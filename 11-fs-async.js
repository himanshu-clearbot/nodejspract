// const { readFile, writeFile } = require('fs')
import fs from "fs"
console.log('start')
fs.readFile('./test2.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  console.log(first)
})
console.log("end") //this is async function


//   fs.readFile('./testforfs.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     fs.writeFile(
//       './result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')
