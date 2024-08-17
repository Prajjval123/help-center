import mongoose from "mongoose";

const helpCardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const HelpCard = mongoose.model("HelpCard", helpCardSchema);

export default HelpCard;
