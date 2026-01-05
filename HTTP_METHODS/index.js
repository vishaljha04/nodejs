import http from "http";
import fs from "fs";
import { url } from "url";

const PORT = 8000;

const app = http.createServer((req, res) => {
  console.log("New req recieved");
  const myUrl = url.parse(req.url, true);
  const log = `${Date.now()}:${req.method}:${myUrl}New Request recieved\n`;
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("Hello from server");

        break;

      default:
        break;
    }
  });
  // console.log(req);
});

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
