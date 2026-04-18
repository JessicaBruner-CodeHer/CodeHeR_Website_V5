import rateLimit from "express-rate-limit";

export const quoteLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { success: false, message: "Too many quote requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});

export const badgeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "Too many badge requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
});
