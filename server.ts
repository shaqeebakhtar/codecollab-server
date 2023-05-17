import express, { Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT || 5000;
const app: Express = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("connected", socket.id);
});

httpServer.listen(PORT);
