import express from "express";
import React from "react";
import Header from "../shared/Header";
import { renderToString } from 'react-dom/server';
import { indexTemplate } from "./indexTemplate";

const HeaderHtml = renderToString(<Header />);
// const express = require('express');

const app = express();

// // Добавляем базовую политику безопасности для разработки.
// // На проде эту политику нужно чуть жестче настроить.
// app.use((req, res, next) => {
//   res.set("Content-Security-Policy", "default-src 'self'; connect-src 'self' http://localhost:3000 https://localhost:3000; script-src 'self'; style-src 'self';");
//   next();
// });

app.use("/static", express.static("dist/client"));

app.get("/", (req, res) => {
  res.send(indexTemplate(HeaderHtml));
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
