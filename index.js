const http = require('http');
const fs = require('fs');
const myserver = http.createServer((req,res)=>{
    const log =  `${Date.now()}:${req.url}New Request Received\n`;
    fs.appendFile('Log.txt',log,(err,data)=>{
        res.end("Hello From Server");
    })
    
})

myserver.listen(8000,()=>console.log("Listening on port 8000"))