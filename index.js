// const fs=require('fs')
// fs.readFile("demo.txt",'utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)

// })

const http=require("http")
const myServer=http.createServer((request,response)=>{
    response.write("welcome")
    response.end()

})
myServer.listen(5500)
