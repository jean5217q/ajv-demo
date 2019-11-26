import React from "react";
import express from "express";
import AppComponent from "component/app";
import { renderToString } from "react-dom/server";
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname)));

app.get("/signUp", (req, res) => {});

app.get("/editProfile", (req, res) => {});

app.get("*", (req, res) => {
  res.send(`
  <!DOCTYPE html>
    <head>
    <base href="/" />
      <title>AJV</title>
    </head>
    <body>
      <div id="app">${renderToString(<AppComponent />)}</div>
      <script src="/bundle.js" defer=""></script>
    </body>
  </html>
  `);
});

app.listen(2222, () => {
  // console.log('server on port 3000');
});
