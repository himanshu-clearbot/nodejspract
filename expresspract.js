import express from "express";
import fs from "fs";
import path from "path";
const app = express();
// console.log(path.resolve());
// console.log(path.join(path.resolve(),"public"));

// const server = express();
app.use(express.static(path.join(path.resolve(),"public")));

// server.listen(5000,()=>
// {
//     console.log("server is listening ");
// });



// app.set("view engine","ejs") this would help to wright front instead of front.ejs 
app.get("/",(req,res)=>
{

    // res.render("front.ejs");
    // res.render("front.ejs",{name:"jay"});
    res.render("front.ejs", {place:"india"}); //dynamic data 

    // const pathlocation = path.resolve();

    // res.sendFile(path.join(pathlocation,"./index.html"));

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
});

app.listen(5000,()=>
{
    console.log("server is listening ");
});