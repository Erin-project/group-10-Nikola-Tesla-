import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use(cors());

// Serve files in the repo folder so /background.png loads in the browser
app.use(express.static("."));

function TextBoxPage() {
  return React.createElement(
    "div",
    {// sets background image 
      style: {
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "20px"
      }
    },
    React.createElement(
      "form",
      null,
      React.createElement("input", {
        type: "text",
        placeholder: "Type your message..."
      }),
      React.createElement("button", { type: "submit" }, "Send")
    )
  );
}

app.get("/", (req, res) => {
  res.send(renderToString(React.createElement(TextBoxPage)));
});

app.get("/chat", (req, res) => {
  res.send(renderToString(React.createElement(TextBoxPage)));
});

app.listen(3000, () => {
  console.log("Tesla Bot running at http://localhost:3000");
});