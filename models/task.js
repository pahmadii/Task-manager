const mongoose=require('mongoose');

const TaskSchema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,'most provide name'],
        trim:true,
        maxlength:[20,'name can not be more than 20 charachter']
    },

    completed:{
        type:Boolean,
        default:false,
    },
});

module.exports=mongoose.model('Task',TaskSchema);