import express from "express";
import cors from "cors";
const port = process.env.PORT || 5000;
const app = express();
// middle were
app.use(cors());
app.use(express.json());

import apiData from "./data.json" assert { type: "json" };

try {
  app.get("/", (req, res) => {
    res.send({ apiData });
  });





  
  app.listen(port, () => console.log("Node is listening on port: " + port));
} catch (error) {
  console.log(error);
}
