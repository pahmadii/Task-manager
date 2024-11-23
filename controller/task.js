const getAllTask=(req,res)=>{
res.send('get tasks')
};

const createTask=(req,res)=>{
 res.send('create task')
 };

 const getTask=(req,res)=>{
 res.send('get single task')
};

 const updateTask=(req,res)=>{
res.send('update task')
 };

const deleteTask=(req,res)=>{
 res.send('delete task')  
};

   module.exports={
    getAllTask,
    createTask,
    getTask,
    updateTask,
    deleteTask
   }                                 