// const http = require("http");
import http from "http"
// import hi from "./makeexportfn.js";
// import fn from "./makeexportfn.js"
// import {another} from "./makeexportfn.js"
// console.log(another)
// console.log(fn());
import fs from 'fs';
const home = fs.readFileSync("./index.html");
const server = http.createServer((req,res,)=>{
    // console.log("server working");
    // console.log(req.url);   
    // res.end("Noice");
    // res.end("<h1>No</h1>")
    console.log(req.method)
    if(req.url ==="/")
    {
        // res.end("<h1>Home</h1>")
        res.end(home)
    }
    else if(req.url ==="/about")
    {
        
        res.end("<h1>about</h1>")
    }
    else
    {
        const urlWithoutSlash = req.url.substring(1);
        res.end(`<h1>${urlWithoutSlash}</h1>`)
    }

    // console.log(req.url)
    // const a = req.url;
    // if(req.url ===a)
    // {
    //     res.end(`<h1>${a}</h1>`)
    // }

});
server.listen(5000,()=>{
    console.log("served");
}); 