import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config()

const generateToken = (userId) => {
  const JWT_SECRET="78f88311f7358517b10c0427632b9dbc"
  return jwt.sign(
    { id: userId },
 JWT_SECRET,
    { expiresIn: "7d" }
  );
};

export default generateToken;