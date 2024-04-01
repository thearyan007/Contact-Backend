import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  const { username, email, password } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("Fields cannot be empty");
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) {
    res.status(403);
    throw new Error("User Already Exist!!");
  }

  //hash password using bcrypt
  const hashedPsss = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    username,
    password: hashedPsss,
    email,
  });
  if (newUser) {
    res.status(201).json({ _id: newUser._id, userName: newUser.username });
  } else {
    res.status(400);
    throw new Error("User data not valid, failed to Sign up!");
  }
});

export const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Fields cannot be empty");
  }

  const user = await User.findOne({
    username,
  });
  //compair pass with hashed pass
  if (user && bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          _id: user._id,
          username: user.username,
          email: user.email,
        },
      },
      process.env.SECERT_ASSCESS_TOKEN,
      { expiresIn: "10m" }
    );
    res.status(200).json({
      _id: user._id,
      userName: user.username,
      accessToken: accessToken,
    });
  } else {
    res.status(401);
    throw new Error("Username or password not Valid!!");
  }
});

export const current = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});
