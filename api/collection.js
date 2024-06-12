import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  name: { type: String, required: false },
  skills: { type: Array, required: true },
  contactInfo: { type: String, required: false },
  email: { type: String, required: true },
  experiense: { type: String, required: false },
  projectURL: { type: String, required: true },
});

const resumeCollection = mongoose.model("resume", resumeSchema);

export default resumeCollection;
