const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secrets = require("./secrets");
const Users = require("../users/users-model");

router.post("/register", (req, res) => {
  // let user = req.body;
  let user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    location: req.body.location
  };
  const rounds = process.env.HASH_ROUNDS || 4;
  const hash = bcrypt.hashSync(user.password, rounds);

  user.password = hash;

  Users.add(user)
    .then((user) => {
      if(!user) {
        res.status(400).json({ message: 'please include credentials'})
      } else {
        res.status(201).json({ data: user });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: error });
    });
});

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ token: token });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "server error" });
    });
});

// function to create token
function generateToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
  };

  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
