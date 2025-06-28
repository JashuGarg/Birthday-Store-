import mongoose from "mongoose";

const birthdaySchema = new mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required: true
    }
})

export const birthday = mongoose.model("birthday",birthdaySchema);