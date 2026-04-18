import express from "express";
import { createQuote } from "../controllers/quoteController.js";
import { quoteLimiter } from "../middleware/rateLimiter.js";

const router = express.Router();

router.post("/", quoteLimiter, createQuote);

export default router;
