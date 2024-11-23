const express=require('express');
require('dotenv').config();

const app=express();

const port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}....`)});