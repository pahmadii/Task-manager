const getAllTask=(req,res)=>{
res.send('get tasks')
};

const createTask=(req,res)=>{
 res.json(req.body)
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