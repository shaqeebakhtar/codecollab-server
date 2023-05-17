import express, { Express } from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import ACTIONS from "./actions";

const PORT = process.env.PORT || 5000;
const app: Express = express();

const httpServer = createServer(app);
const io = new Server(httpServer);

type TCollaboratorSocketMap = {
  [socketId: string]: string;
};

const collaboratorSocketMap: TCollaboratorSocketMap = {};

const getAllConnectedClients = (roomId: string) => {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return { socketId, collaboratorName: collaboratorSocketMap[socketId] };
    }
  );
};

io.on("connection", (socket) => {
  console.log("connected", socket.id);

  socket.on(ACTIONS.JOIN, ({ editorRoomId, collaboratorName }) => {
    collaboratorSocketMap[socket.id] = collaboratorName;
    socket.join(editorRoomId);
    const clients = getAllConnectedClients(editorRoomId);

    // emit an action to everyone that someone has joined
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        collaboratorName,
        socketId: socket.id,
      });
    });
  });
});

httpServer.listen(PORT);
