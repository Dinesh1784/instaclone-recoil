import React from "react";
import Post from "./Post";
import { onSnapshot, collection, query, orderBy } from "@firebase/firestore";
import { db } from "../firebase";
// const posts = [
//   {
//     id: "1",
//     username: "Dinesh",
//     userimg:
//       "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_1.png",
//     img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     caption: "This is DOPE",
//   },
//   {
//     id: "2",
//     username: "Dhoni",
//     userimg:
//       "https://prd-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/full_width/public/thumbnails/image/placeholder-profile_1.png",
//     img: "https://images.unsplash.com/photo-1633113090205-cc1ac795b5f9?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//     caption: "This is DOPE",
//   },
// ];

const Posts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        console.log(snapshot);
      }
    );
    return unsubscribe();
  }, [db]);

  console.log(posts);
  return (
    <div>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.data().username}
            userImg={post.data().profileImg}
            image={post.data().image}
            caption={post.data().caption}
          />
        ))}
    </div>
  );
};

export default Posts;
