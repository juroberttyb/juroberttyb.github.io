import express from "express";
import { getAllTopics, postTopic } from "../controllers/topic.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("", getAllTopics);

/* POST */
router.post("", postTopic);

export default router;