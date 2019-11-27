import React from "react";
import express from "express";
import AppComponent from "component/app";
import { renderToString } from "react-dom/server";
import { normalizeAllErrors } from "modal/validator";
import { validateForSignUp } from "modal/signUp";
import { validateForEditProfile } from "modal/editProfile";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

app.post("/signUp", (req, res) => {
  try {
    const signUpData = req.body;
    validateForSignUp(signUpData);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({
      message: normalizeAllErrors(error)
    });
  }
});

app.post("/editProfile", (req, res) => {
  try {
    const profile = req.body;
    validateForEditProfile(profile);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send({
      message: normalizeAllErrors(error)
    });
  }
});

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
