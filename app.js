import express from "express";
import connectDB from "./api/database.js";
import cors from "cors";
import bodyParser from "body-parser";
import routes from "./api/routers.js";

const app = express();
app.use(cors())
app.use(bodyParser.json())
connectDB(
  "mongodb://localhost:27017/"
);
app.use("/resume", routes);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is runing......");
});
