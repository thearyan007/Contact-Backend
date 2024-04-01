import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "User",
    },
    name: {
      type: String,
      require: [true, "Please add the contact name!"],
    },
    email: {
      type: String,
      require: [true, "Please provide your email address!"],
    },
    mobile: {
      type: String,
      require: [true, "Please add your mobile Number!!"],
    },
  },
  {
    timestamps: true,
  }
);
const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
