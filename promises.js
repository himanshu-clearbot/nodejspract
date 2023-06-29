

console.log("start")
// setTimeout(() => {
//     console.log("fs")
// }, 200); //async
let p1 = new Promise(function(resolve,reject)
{
    // console.log("promise")
    resolve(5);


})
let p4 = new Promise(function(resolve,reject)
{
    // console.log("promise")
    resolve(5);
})

let p2 = new Promise((resolve,reject)=>
{
    console.log("promise2")
    reject("this is error")

})
console.log("ebnd")

console.log(p1)
let p5 = Promise.all([p1,p4])
p5.then((value)=>
{
    console.log(value)
})
console.log(p2)
// paralllel execution

p1.then((value)=>
{
    console.log(value)
}) // this is handling when executed perfectly

p1.then((value)=>
{
    console.log(value)
    let p3 = new Promise((resolve,reject)=>
    {
        console.log('then -> p3')
        resolve("f")
    })
    return p3
}).then((value)=>
{
    // console.log(value)
    console.log("`value`")
})

p2.catch((error)=>
{
    console.log("error in p2")
}) // this is error handling

// let p3 = new Promise( resolve=>{
//     console.log('work')
// })
// p3.then()
console.log("end")