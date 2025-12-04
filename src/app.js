import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("<button>Maracuya Run</button>");
});

app.listen(PORT, () => {
  console.log(`Server: http://localhost:${PORT}`);
});
