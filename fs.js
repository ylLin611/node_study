// 读文件

const fs = require("fs");

// 同步读取
// const res = fs.readFileSync("./images/401.gif");
// console.log(res);

// 异步读取
// fs.readFile("./txt/test.txt", (err, data) => {
//   console.log(data);
// });

// fs.promises
//   .readFile("./txt/test.txt", {
//     encoding: "utf-8",
//   })
//   .then((res) => {
//     console.log(res);
//   });

// 手动读取
// fs.open("./images/401.gif", (err, fd) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(fd);

//   fs.fstat(fd, (err, status) => {
//     console.log(Date(status.atime));
//     fs.close(fd);
//   });
// });

/**
 * 文件写入
 */
// fs.writeFile(
//   "./txt/writeFile.txt",
//   "test",
//   {
//     encoding: "utf-8",
//     flag: "a+", // w、w+  r、r+ a、a+
//   },
//   (err, data) => {
//     console.log(err);
//     if (!err) {
//       console.log("文件写入成功");
//       console.log(data);
//     }
//   }
// );
