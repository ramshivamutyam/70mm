import express from 'express';
import nodemon from 'nodemon';


const app=express();

app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.send("welcome");
})

app.listen(3000,()=>{
    console.log(`listening on port:${3000}`);
})