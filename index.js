import express from "express";
import mongoose from "mongoose";
import { MONGOOSE_URI } from "./config.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { placesRouter } from "./routes/routes.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const publicPath = path.join(__dirname, "./client/build");

app.use(express.static(publicPath));

app.use("/", placesRouter);

mongoose.connect(MONGOOSE_URI, () => {
  console.log("Connected to cloud");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("listening on port " + port);
});
