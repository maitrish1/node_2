const http = require("http");

const server= http.createServer((req,res)=>{
    console.log('Maitrish')
});

server.listen(4000)