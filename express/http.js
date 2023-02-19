const express = require("express");

const app = express();

app.post("/post", (req, res) => {
  console.log(req);
  res.end("post请求成功");
});
app.get("/get", (req, res) => {
  console.log(req);
  res.end("get请求成功");
});

app.listen(55555, () => {});
