import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use(cors());

function TextBoxPage() {
  return React.createElement(
    "div",
    { style: { backgroundColor: "#ffffff", minHeight: "100vh", padding: "20px" } },
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