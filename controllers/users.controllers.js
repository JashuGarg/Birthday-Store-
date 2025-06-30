import { users } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

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

    const hashPass = await bcrypt.hash(body.password,10)
    const user = await users.create({
        username: body.username,
        email : body.email,
        password : hashPass
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
    }) 

if(!user) return res.render("/signup");

const isMatch = await bcrypt.compare(body.password, user.password);
    if (!isMatch) {
        // password is incorrect
        return res.render("login", { error: "Invalid credentials" }); // or redirect
    }

    const token = setUser(user)

    res.cookie("uuid",token) ;
    // res.send({
    //     mssg : "User login Successfully!!",
    //     status : "Passed"
    // }) // for testing purpose using res.send() 😊
    res.redirect("/")
}


export {singupdataupload,userlogincheck}