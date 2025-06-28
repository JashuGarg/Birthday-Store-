import { users } from "../models/user.model.js";
import jwt from "jsonwebtoken";

import { setUser } from "../utils/auth.js";
import cookieParser from "cookie-parser";
async function singupdataupload(req,res){
    const body = req.body;
    // console.log(body);
    
    if(!body || !body.username || !body.email || !body.password){
        res.send({ 
        mssg :"All the fields are Required",
        status : "Failed"
    });
    }

    const user = await users.create({
        username: body.username,
        email : body.email,
        password : body.password
    })

    const token = setUser(user)
    res.cookie("uuid",token)
    // res.send({
    //     mssg : "User Created Successfully!!",
    //     status : "Passed"
    // }) // for testing purpose using res.send() 😊


    res.render("../views/birthday.ejs")

}


async function  userlogincheck(req,res) {
    const body = req.body;
    
    const user = await users.findOne({
        email: body.email,
        password:body.password
    })

    if(!user) return res.render("/signup");
    const token = setUser(user)

    res.cookie("uuid",token) ;
    // res.send({
    //     mssg : "User login Successfully!!",
    //     status : "Passed"
    // }) // for testing purpose using res.send() 😊
    res.redirect("/")
}


export {singupdataupload,userlogincheck}