// const gun=async()=>{
//     var blob=await fetch('https://randomuser.me/api/');
// var res=await blob.json();
// console.log(res)
// }

// gun();


// const fs=require('fs')
// fs.rm("./copy",{recursive:true},function(err){
//     if(err) console.log(err)
//     else console.log("removed")
// })
// const fs=require('fs')
// fs.rmdir("./copy",{recursive:true},function(err){
//     if(err) console.log(err)
//     else console.log("removed")
// })
// const fs=require('fs')
// fs.unlink(",hello.txt",function(err){
//     if(err) console.log(err)
//     else console.log("done")
// })

// const fs=require('fs')
// fs.copyFile(",hello.txt","./copy/chacha.txt",function(err){
//     if(err) console.log(err)
//     else console.log("done")
// })
// const fs=require('fs')
// fs.rename("hey.txt",",hello.txt",function(err){
//     if(err) console.log(err)
//     else console.log("done")
// })
// const fs=require('fs')
// fs.appendFile("hey.txt",",hello i am verysad",function(err){
//     if(err) console.log(err)
//     else console.log("done")
// })

const express=require("express");
const path = require("path");
const app=express();
 app.set("view engine","ejs")
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use(express.static(path.join(__dirname,"public")))

 app.get("/",(req,res)=>{
    res.render("index")
 })
app.listen(3000)

