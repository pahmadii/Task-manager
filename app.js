const express=require('express');
require('dotenv').config();
const tasks=require('./routes/task');
const app=express();


app.use(express.json());



app.get('/',(req,res)=>{
res.send('get all tasks')
})

app.use('/api/v1/tasks',tasks);


const port=8080;

app.listen(port,()=>{
    console.log(`listening on port ${port}....`)});