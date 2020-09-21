const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");
const authenticate = require("../auth/auth-middleware");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: `we're up and running` });
});

server.use("/api/auth", authRouter);

module.exports = server;
