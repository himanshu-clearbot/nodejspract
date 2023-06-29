import fs from "fs"

const getText = (path)=>
{
    return new Promise((resolve,reject)=>{
    fs.readFile(path,'utf8',(err,data)=>{
    if(err)
    {
        console.log(err) //it would show error if
    }
    else{
        console.log(data)
    }
    }) 
    })
}

