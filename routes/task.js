const express=require('express');
const router=express.Router();
const { getAllTask,createTask, getTask,updateTask,deleteTask}=require('../controller/task');

router.route('/');
router.route('/:id');



module.exports=router;