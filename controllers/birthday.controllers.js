import { birthday } from "../models/birthday.model.js";

async function storebirthday(req,res){
    const body = req.body;
    // console.log(body);
    
    if(!body || !body.date || !body.name ){
       return  res.send("All fields are compusory");
    }

    const result = await birthday.create({
        name:body.name,
        date : body.date
    })
    res.render("../views/birthday.ejs");
}

async function  GetBithdayData(req,res) {
    
   try {
    const people = await birthday.find({}); 
    res.render("../views/userdashboard", { people }); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching birthdays");
  }

}

export {storebirthday,GetBithdayData}