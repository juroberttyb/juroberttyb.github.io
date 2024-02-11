import Message from "../models/Message.js";

/* READ */
export const getMsg = async (req, res) => {
  try {
    const { message_id } = req.params;
    // console.log("message_id", message_id)
    const msg = await Message.find({ _id: message_id });
    res.status(200).json(msg);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const getAllMsg = async (req, res) => {
  try {
    const { count, topic_id } = req.query
    if (count === undefined || topic_id === undefined) {
      throw Error ('query parameter: count, not provided')
    }

    // sort({created_at: -1}) for reverse order
    // sort('created_at') for original order
    // console.log({topic: topic})
    const msgs = await Message.find({topic_id: topic_id}).sort({created_at: -1}).limit(count);
    msgs.reverse()
    res.status(200).json(msgs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

/* CREATE */
export const postMsg = async (req, res) => {
  try {
    const { user, topic_id, message } = req.body;
    // const user = await User.findById(userId);

    const newMsg = new Message({
      user: user,
      topic_id: topic_id,
      message: message,
    });

    const id = await newMsg.save();
    const msg = await Message.find({_id: id});

    res.status(201).json(msg);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};
