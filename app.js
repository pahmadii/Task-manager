const express=require('express');
require('dotenv').config();
const app=express();


app.use(express.json());



app.get('/',(req,res)=>{
res.send('get all tasks')
})



const port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}....`)});