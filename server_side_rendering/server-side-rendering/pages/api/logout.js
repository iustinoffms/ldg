import cookie from "cookie";

export default function handler(req, res) {
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("token", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      expires: new Date(0),
      maxAge: 60 * 60,
      sameSite: "strict",
      path: "/",
    })
  );
  res.status(200).json({ name: "John Doe" });
}
