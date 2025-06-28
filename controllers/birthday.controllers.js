import { birthday } from "../models/birthday.model.js";
import { users } from "../models/user.model.js";

async function storebirthday(req,res){
    const body = req.body;
    // console.log(req.user);
  
    if(!body || !body.date || !body.name ){
       return  res.send("All fields are compusory");
    }
    // console.log(user);
    const result = await birthday.create({
        name:body.name,
        date : body.date,
        createdBy: req.user._id,
    })
    res.render("../views/birthday.ejs");
}

async function  GetBithdayData(req,res) {
    
   try {
    const people = await birthday.find({createdBy:req.user._id}); 
    res.render("../views/userdashboard", { people }); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching birthdays");
  }

}

export {storebirthday,GetBithdayData}