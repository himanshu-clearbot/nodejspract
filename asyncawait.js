console.log("start")
async function harr ()
{
    return 5
}


harr().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});

console.log(harr)


console.log("end")

harr().then(console.log('print'))
// async is promise
