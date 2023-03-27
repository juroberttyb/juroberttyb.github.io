import express from "express";
import { getMsg, getAllMsg, postMsg } from "../controllers/message.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("", getAllMsg);
router.get("/:message_id", getMsg);

/* POST */
router.post("", postMsg);

export default router;