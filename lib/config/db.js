
import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aniketgupta2405:PXyGeRVMo5A8nuNi@cluster0.ojmqfaj.mongodb.net/todo-app",
     
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
  }
};
