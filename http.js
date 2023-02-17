const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  console.log("服务器被访问");
  /**
   * req 对象本质上是一个可读流
   * req 中包含信息
   * 1、url req.url
   * 2、method req.method
   * 3、headers
   * 4、处理传参
   */
  // params 参数处理
  const urlParams = url.parse(req.url);
  const params = qs.parse(urlParams.query);
  console.log(params);
  // body 参数
  req.setEncoding("utf-8");
  req.on("data", (data) => {
    const body = JSON.parse(data);
    console.log(body.name);
  });
  /**
   * res 是可写流
   * 不调用end的话客户端会一直等待
   */
  // 设置header信息
  // content-type单独设置 ! 写错了的话 浏览器会触发下载
  res.setHeader("Content-Type", "application/json");
  // 和状态码一起设置

  const list = {
    status: "success",
    data: [
      {
        name: "yl",
      },
      {
        name: "bl",
      },
    ],
  };
  res.end(JSON.stringify(list));
});

server.listen(55555, () => {
  console.log("服务开启成功");
});
