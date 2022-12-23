import express from "express";
import dotenv from 'dotenv'
dotenv.config()
import config from "./config/config.js";
import routes from "./routes/index.js"

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({ message: "Probando api" });
});
app.use("/api", routes)

app.listen(config.port||3002, (error) => {
  if (error) console.log(error);
  else console.log(`Server running on port ${config.port}`);
});
