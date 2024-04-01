import asynHandler from "express-async-handler";
import jwt, { decode } from "jsonwebtoken";

export const validateToken = asynHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.SECERT_ASSCESS_TOKEN, (err, decode) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      }
      req.user = decode.user;
      next();
    });
    if (!token) {
      res.status(401);
      throw new Error("User is not authorised or token is missing!!");
    }
  }
});
