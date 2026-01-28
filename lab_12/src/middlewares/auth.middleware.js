import jwt from "jsonwebtoken";
import User from "../models/user.model.js";


const JWT_SECRET = "78f88311f7358517b10c0427632b9dbc"
export const verifyJWT = async (req, res, next) => {
  try {
    let token; {
      token = req.headers.authorization;
    }

    if (!token) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    const decoded = jwt.verify(token,JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(401).json({ message: "User not found" });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};
