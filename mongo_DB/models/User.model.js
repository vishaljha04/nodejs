import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: [true, "Email is already exist with some other user"],
  },
  jobTitle: {
    type: String,
  },
  gender: {
    type: String,
  },
});

export const  User = mongoose.model("User",userSchema);
