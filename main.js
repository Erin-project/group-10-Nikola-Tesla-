import express from "express";
import cors from "cors";
import React from "react";
import { renderToString } from "react-dom/server";

const app = express();

app.use(cors());

// Serve files in the repo folder so /background.png loads in the browser
app.use(express.static("."));


// sets background image 
function TextBoxPage() {
  return React.createElement(
    "div",
    {
      style: {
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        margin: 0,
        display: "flex",
        justifyContent: "center", // centers horizontally
        alignItems: "center"      // centers vertically
      }
    },
    React.createElement(
      "form",
      {
        style: {
          display: "flex",
          gap: "10px" // adds a small space between the input and button
        }
      },
      React.createElement("input", {
        type: "text",
        placeholder: "Type your message...",
        style: {
          padding: "10px 14px",
          fontSize: "16px",
          width: "300px"
        }
      }),
      React.createElement(
        "button",
        {
          type: "submit",
          style: {
            padding: "10px 18px",
            fontSize: "16px",
            cursor: "pointer"
          }
        },
        "Send"
      )
    )
  );
}


//gets the text box
app.get("/", (req, res) => {
  res.send(renderToString(React.createElement(TextBoxPage)));
});


//creates the text box
app.get("/chat", (req, res) => {
  res.send(renderToString(React.createElement(TextBoxPage)));
});



app.listen(3000, () => {
  console.log("Tesla Bot running at http://localhost:3000");
});
