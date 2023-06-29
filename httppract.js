import http from "http"

// req is request and res is response 
const server = http.createServer((req,res)=>
{
    // console.log(req)
    console.log('refreshing')
    res.end('Hello')
    console.log(req.url)
    // if(req.url==='/')
    // {
    //     res.end('Welcome')  
    // }
    // res.end(`<a href="/">Home</a>`)
    // res.write("WElcome")
    // res.end()
}) 
//syncs are blocking code

server.listen(5000, ()=>
{
    console.log('server is listen')
}) // async