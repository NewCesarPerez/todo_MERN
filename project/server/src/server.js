import express from "express";
import config from "../config/config.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({ message: "Probando api" });
});

app.listen(config.port, (error) => {
  if (error) console.log(error);
  else console.log(`Server running on port ${PORT}`);
});
