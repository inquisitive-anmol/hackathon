const { Server } = require("socket.io");
const textGenController_V1 = require("./controllers/text-gen-Controller");

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true,
};

const socketServer = () => {
  const io = new Server(8000, {
    cors: corsOptions,
  });

  io.on("connection", (socket) => {
    socket.on("generateText", ({ message }) => {
      console.log("generateText: ", message);

      textGenController_V1({
        socket,
        message,
      });
    });
  });
};

module.exports = socketServer;
