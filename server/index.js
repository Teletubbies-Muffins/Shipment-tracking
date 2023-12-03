import express from 'express';
import moongose from 'moongose';

const server = express()

server.get('/',(req,res)=>{
    console.log("response")
    res.send("get")
})

server.listen(8000,()=> console.log("running"))