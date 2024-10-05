const { createServer } = require("node:http");

const hostname = "127.0.0.1"; //localhost, we can change 1 from that localhost (from 1 to 255)
const port = 3000; // nơi chạy dự án của mình, cần loại bỏ các loại port phổ biến

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Chao thay vo");
});

server.listen(port, hostname, () => {
  //listen ở đâu tức là website của mình sẽ chạy ở đâu.
  console.log(`Server running at http://${hostname}:${port}/`);
});
