# 内容总览

## fs 的使用

[fs 操作](./fs.js)
[读写文件夹](./读写文件夹.js)

- 读写文件

## Stream

[Stream 操作](./streamAndPipe.js)

- 读写流
- 复制文件
- pipe

## http 模块

[http 测试](./http.js)

- 可以 createServer 多个
- nodemon 热更新

### http headers

#### content-type

- application/x-www-form-urlencoded 以&分隔都得键值对参数
- application/json json 类型
- text/plain 文本类型
- application/xml xml 类型
- multipart/form-data 上传文件

#### keep-alive

http1.1 中所有连接默认是 connection: keep-alive 的

- 不同服务器 keep-alive 时间不同
- node 中默认是 5s
- ？猜测这个指 5s 内不用去握手了

> 插入 Tips 首选项 => 配置用户代码片段 => js => https://snippet-generator.app/ cv
