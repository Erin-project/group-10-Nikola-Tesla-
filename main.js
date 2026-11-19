import express from "express";
import cors from "cors";
import fs from "fs";
import data from "./tesla_data.json" with { type: "json" };

const app = express();

app.use(cors());

// Shows a blank page at http://localhost:3000
app.get("/", (req, res) => {
  res.send("");
});



app.listen(3000, () => {
  console.log("Tesla Bot running at http://localhost:3000");
});


