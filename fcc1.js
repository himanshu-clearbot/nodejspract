// setInterval(()=>
// {
//     console.log("hello")
// },1000)

import john from "./fcc2.js"
const sayHii = (name) =>
{
    console.log("Hello there",name)
}

const sayHi = () =>
{
    console.log("Hello there")
}
sayHi()
sayHii('h')

console.log(john)

import os from 'os'
console.log(os.uptime())

import fs from "fs"
const file = fs.readFileSync('./testforfs.txt','utf-8')
fs.writeFileSync('test2.txt',"this is test2 file",{flag:'a'})
console.log(file)