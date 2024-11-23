const mongoose=require('mongoose');

const connectionString=
'mongodb+srv://Moe:@cluster0.gerrv.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=Cluster0';


mongoose
.connect(connectionString)
.then(()=>console.log('connected to DB.....'))
.catch((err)=>console.log(err));

