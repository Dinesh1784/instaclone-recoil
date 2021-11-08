export default function helloAPI(req, res, next) {
  if (req.method === "GET") {
    res.status(200).json({
      status: "success",
      message: "You are in products",
    });
  }
}
