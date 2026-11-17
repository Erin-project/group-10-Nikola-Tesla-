import express from "express"
import cors from "cors":
import fs from "fs"
import data from "tesla_data.json"

const app = express();

//runs app in browser at port 3000 

app.listen(3000, () => {
    console.log("Tesla Bot running at http://localhost:3000");
});
