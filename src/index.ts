import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { errorHandler } from "./middlewares/errorHandler";
import { notFound } from "./middlewares/notFound";
import appRouter from "./routes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(appRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Listening to a server on a specific port
app.listen(PORT, () => {
  console.log("Server listening on port:", PORT);
});
