
const express=require('express');
require('dotenv').config();
const tasks=require('./routes/task');
const connectDB=require('./db/connect');
const notFound=require('./middleware/not-found');
const errorHandlerMiddleware=require('./middleware/error-handler');

const app=express();


app.use(express.json());
app.use(express.static('public'));




app.use('/api/v1/tasks',tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);



const port=8080;
const start=async()=>{
try{
await connectDB(process.env.MOngo_URI)
app.listen(port,()=>{console.log(`listening on port ${port}....`)});
} catch(error){
console.log(error)
}
}
start();
