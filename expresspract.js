import express from "express";
import fs from "fs";
import path from "path";

console.log(path.resolve());
// const server = express();


// server.listen(5000,()=>
// {
//     console.log("server is listening ");
// });

const app = express();
app.get("/",(req,res)=>
{

    const pathlocation = path.resolve();

    res.sendFile(path.join(pathlocation,"./index.html"));

    // res.status(400).send("<h1>400 </h1>");
    // res.json(
    //     {
    //         success : true
    //     }
    // )
    // res.send("hi");
    // res.sendStatus(404); Not Found
    // res.sendStatus(400); Bad request 
    // res.sendStatus(500); Internal Server Error 

    // res.statusCode()
    // res.end("hi");
})
app.listen(5000,()=>
{
    console.log("server is listening ");
});