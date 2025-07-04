import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import connectToSocket from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello:World");
});

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://samarth872:samarth%40123@cluster0.kcitzjp.mongodb.net/Zoom"
  );

  console.log(`MONGO Connected.connect : ${connectionDb.connection.host}`);
  server.listen(8000, () => {
    console.log("Listening on port 8000");
  });
};

start();
