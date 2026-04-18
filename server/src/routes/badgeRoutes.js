import express from "express";
import { createBadgeRequest } from "../controllers/badgeController.js";
import { badgeLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/", badgeLimiter, createBadgeRequest);

export default router;
