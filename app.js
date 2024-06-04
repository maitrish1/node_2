const http = require("http");

const server= http.createServer((req,res)=>{
    res.setHeader('Content-Type',"text/html")
    let url=req.url
    if(url==='/home'){
        res.write("<h1>Welcome home</h1>")
    }
    if(url==='/about'){
        res.write("<h1>Welcome to About Us page</h1>")
    }
    if(url==='/node'){
        res.write("<h1>Welcome to my Node Js project</h1>")
    }

    res.end()
});

server.listen(4000)