import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app: Application = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Health check route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "B2B Backend running 🚀" });
});

export default app;
