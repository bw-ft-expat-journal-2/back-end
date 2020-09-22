const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// auth router handles register and login, providing JWT
const authRouter = require("../auth/auth-router");
const authenticate = require("../auth/auth-middleware");

// sepearate routers for users, posts, and images
const usersRouter = require("../users/users-router");
const postsRouter = require("../posts/posts-router");
const imagesRouter = require("../images/images-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.json({ api: `we're up and running` });
});

server.use("/api/auth", authRouter);

// require token to enter through authenticate middleware
server.use("/api/users", authenticate, usersRouter);
server.use("/api/posts", authenticate, postsRouter);
server.use("/api/images", authenticate, imagesRouter);

module.exports = server;
