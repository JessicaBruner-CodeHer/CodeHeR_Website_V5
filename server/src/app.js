import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import quoteRoutes from "./routes/quoteRoutes.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://codeherllc.com",
  "http://www.codeherllc.com",
  "https://codeherllc.com",
  "https://www.codeherllc.com"
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/quotes", quoteRoutes);

// Serve React frontend in production
if (process.env.NODE_ENV === "production") {
  const clientDist = path.join(__dirname, "../../client/dist");
  app.use(express.static(clientDist));
  app.get("/{*path}", (req, res) => {
    res.sendFile(path.join(clientDist, "index.html"));
  });
}

export default app;
