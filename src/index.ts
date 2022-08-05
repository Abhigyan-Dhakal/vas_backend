import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";

dotenv.config();

const app: Application = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

// Listening to a server on a specific port
app.listen(PORT, () => {
  console.log("Server listening on port ", PORT);
});
