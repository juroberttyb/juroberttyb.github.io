import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    created_at: {
      type: Date, 
      default: Date.now,
    },
  },
);

const Topic = mongoose.model("Topic", topicSchema, "Topic");

export default Topic;