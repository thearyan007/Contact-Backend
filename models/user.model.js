import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: [true, "UserName missing!!"],
      unique: [true, "UserName already exist!"],
    },
    email: {
      type: String,
      require: [true, "Email Missing!!"],
      unique: [true, "Email already exits!!"],
    },
    password: {
      type: String,
      require: [true, "Password missing!!"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
