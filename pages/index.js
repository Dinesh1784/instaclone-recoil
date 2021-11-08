import Head from "next/head";
import { useEffect } from "react";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   return router.push("/auth/signin");
  // });
  console.log(router);
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram -Recoil (State Management)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header*/}
      <Header />
      {/* Feed*/}
      <Feed />
      {/* Modal*/}
      <Modal />
    </div>
  );
}
