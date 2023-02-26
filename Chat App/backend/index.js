const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const port = 8080;
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./users/user");
const { formateMessage } = require("./users/messages");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const boatName = "Masai Server";

io.on("connection", (socket) => {
  console.log("Hii from the server");

  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);
    socket.join(user.room);

    //welcome message to current user
    socket.emit("message", formateMessage(boatName, "welcome to Masai Server"));

    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formateMessage(boatName, `${user.username} has joined the chat`)
      );

    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);
    io.to(user.room).emit("message", formateMessage(user.username, msg));
  });

  socket.on("disconnect", () => {
    const user = userLeave(socket.id);
    io.to(user.room).emit(
      "message",
      formateMessage(boatName, `${user.username} has left the chat`)
    );
  });
});

server.listen(port, () => console.log(`server is running on port ${port}`));
