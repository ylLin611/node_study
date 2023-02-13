const fs = require("fs");

// 基础读
// fs.readdir(
//   "./testDir",
//   {
//     withFileTypes: true,
//   },
//   (err, files) => {
//     console.log(err);
//     files.forEach((item) => {
//       console.log(item);
//       console.log(item.isDirectory());
//     });
//   }
// );

// 读文件夹中所有文件

function readAllFile(path) {
  fs.readdir(
    path,
    {
      withFileTypes: true,
    },
    (err, files) => {
      files.forEach((item) => {
        if (item.isDirectory()) {
          readAllFile(`${path}/${item.name}`);
        } else {
          console.log(item.name);
        }
      });
    }
  );
}
readAllFile("./testDir");
