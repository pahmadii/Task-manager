const Task=require('../models/task');

const getAllTask=(req,res)=>{
res.send('get tasks')
};

const createTask=async(req,res)=>{
   const task=await Task.create(req.body)
 res.status(201).json({task})
 };

 const getTask=(req,res)=>{
 res.json({id:req.params.id})
};

 const updateTask=(req,res)=>{
res.send('update task')
 };

const deleteTask=(req,res)=>{
 res.send('delete9 task')  
};

   module.exports={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
   }                                 