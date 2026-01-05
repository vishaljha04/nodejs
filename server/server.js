import http from 'http';
import fs from 'fs';

const PORT = 8000;

//req--> user metadata inside req objects
//res--> response object
//node http server
const app = http.createServer((req,res)=>{
    console.log("New req recieved");
    const log = `${Date.now()}:New Request recieved\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("Hello from server");
    });
    // console.log(req);
});

app.listen(PORT,()=>{
    console.log("server is running on port",PORT);
})


