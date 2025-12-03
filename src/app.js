import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Maracuya Run</h1>");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
