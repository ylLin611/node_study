/**
 * Request 和 Response 都是基于 Stream 实现的
 * Stream 再 Node 中的四种基本类型
 * * Writable 写入
 * * Readable 读取
 * * Duplex 可读可写
 * * Transform 可读可写可转换
 */

const http = require("http");
const fs = require("fs");

// 创建一个Writable Stream,读 test.txt 文件，从第2个汉字读到第8个，每间隔两秒读一个，并监听文件开启，读完，关闭事件
const readStream = fs.createReadStream("./txt/test.txt", {
  start: 3,
  end: 30,
  highWaterMark: 3, // 默认64kb
});
readStream.on("data", (data) => {
  readStream.pause();
  // 这样开启之后没走到end，文件被修改是可以监听到的。
  // 已知生命周期： open => end => close
  setTimeout(() => {
    readStream.resume();
  }, 500);
});

// readStream.on("open", () => {
//   console.log("文件开始读取了");
// });

// readStream.on("end", () => {
//   console.log("文件读取结束了");
// });

// readStream.on("close", () => {
//   console.log("文件被关闭了");
// });

// 文件复制
// 第一种方式 直接读直接写
fs.readFile("./txt/test.txt", (err, data) => {
  fs.writeFile(
    "./test.txt",
    data,
    {
      flag: "a+",
    },
    () => {}
  );
});
// 第二种方式 流操作
const readStreamCopy = fs.createReadStream("./txt/test.txt");
const writeStreamCopy = fs.createWriteStream("./testStream.txt");

readStreamCopy.on("data", (data) => {
  writeStreamCopy.write(data);
});

readStreamCopy.on("end", () => {
  writeStreamCopy.close();
});

// 第三种方式 pipe

const writeStreamPipe = fs.createWriteStream("./testPipe.txt");
readStream.pipe(writeStreamPipe);
