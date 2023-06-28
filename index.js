const http = require("http");
const server = http.createServer(()=>{
    console.log("server working");
});
server.listen(5000,()=>{
    console.log("served");
});