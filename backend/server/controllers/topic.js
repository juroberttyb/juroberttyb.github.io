import Topic from "../models/Topic.js";

/* READ */
export const getAllTopics = async (req, res) => {
  try {
    const count = req.query.count
    if (count === undefined) {
      throw Error ('query parameter: count, not provided')
    }

    // sort({created_at: -1}) for reverse order
    // sort('created_at') for original order
    const msgs = await Topic.find().sort({created_at: -1}).limit(count);
    msgs.reverse()
    res.status(200).json(msgs);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

export const loginTopic = async (req, res) => {
  try {
    const { topic_id } = req.params;
    const topic = await Topic.find({ _id: topic_id });

    const { password } = req.query
    if (password !== topic.password) {
      res.status(401).json({});
    }
    res.status(200).json({});
  } catch (err) {
    res.status(401).json({});
    // res.status(404).json({ error: err.message });
  }
};

/* CREATE */
export const postTopic = async (req, res) => {
  try {
    const { topic, photoUrl } = req.body;
    // const user = await User.findById(userId);

    const newTopic = new Topic({
      topic: topic,
      photoUrl: photoUrl,
    });

    const id = await newTopic.save();
    const t = await Topic.find({_id: id});

    res.status(201).json(t);
  } catch (err) {
    res.status(409).json({ error: err.message });
  }
};
