import mongoose from "mongoose";


const birthdaySchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    },
    createdBy :{
        type: mongoose.Schema.Types.ObjectId,
        ref : "user"
    }
})

export const birthday = mongoose.model("birthday",birthdaySchema);