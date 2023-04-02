import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    user: {
      type: Object,
      default: undefined,
    },
    topic_id: {
      type: String,
      default: undefined,
    },
    message: {
      type: String,
      required: true,
    },
    created_at: {
      type: Date, 
      default: Date.now,
    },
  },
);

const Message = mongoose.model("Message", messageSchema, "Message");

export default Message;