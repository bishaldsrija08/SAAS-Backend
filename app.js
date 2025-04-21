// const app = require("express")()
const express = require("express")
const app = express()


app.get("/", (req,res)=>{
res.send("Hello World")
})

app.get("/about", (req,res)=>{
    res.send("about")
    })



const port = 3000
app.listen(port,()=>{
    console.log("Server started successfully at port " + port)
})