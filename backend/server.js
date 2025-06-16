require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Dados de login
const users = [
  {
    id: 1,
    email: "estudante@email.com",
    password: bcrypt.hashSync("123456", 8),
    name: "estudante"
  }
];

// Rota de login

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ msg: "Usuário não encontrado" });

  const isValid = bcrypt.compareSync(password, user.password);
  if (!isValid) return res.status(401).json({ msg: "Senha inválida" });

  const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  res.json({ token });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get("/api/dashboard", authenticateToken, (req, res) => {
  res.json({ name: req.user.name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
