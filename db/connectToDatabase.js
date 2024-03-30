import mongoose, { connect } from "mongoose";
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to database!");
  } catch (error) {
    console.log("Error in connecting to the DB");
  }
};

export default connectToDatabase;
