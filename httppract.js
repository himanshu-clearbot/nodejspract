import http from "http"

// req is request and res is response 
const server = http.createServer((req,res)=>
{
    // console.log(req)

    if(req.url==='/')
    {
        res.end('Welcome')  
    }
    res.end(`<a href="/">Home</a>`)
    // res.write("WElcome")
    // res.end()
})

server.listen(5000)