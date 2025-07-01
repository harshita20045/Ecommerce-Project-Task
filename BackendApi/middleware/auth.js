import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = async (request, response, next) => {
  try {
    let { token } = request.cookies;

    if (!token) throw new Error("Unauthorized");
    let decode = await jwt.verify(token, process.env.JWT_SECRET);

    console.log(decode.userId + " " + email);
    next();
  } catch (err) {
    return response.status(500).json({ message: "Unauthorized User...." });
  }
};
