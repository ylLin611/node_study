/**
 * * http://c.biancheng.net/c/ascii/
 * hello
 * h 0x68
 * 字符串解析成ascii码
 */
/* <Buffer 68 65 6c 6c 6f> */

// const buffer = new Buffer("hello");
// console.log(buffer);

const 中文 = Buffer.from("杨林");
console.log(中文);
