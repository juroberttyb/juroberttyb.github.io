import express from "express";
import { getAllTopics, postTopic, loginTopic, updateTopic } from "../controllers/topic.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:topic_id/login", loginTopic);
router.get("", getAllTopics);

/* POST */
router.post("", postTopic);

/* UPDATE */
router.patch("/:topic_id", updateTopic);

export default router;