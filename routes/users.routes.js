import express from "express";
import { singupdataupload ,userlogincheck } from "../controllers/users.controllers.js";
import { storebirthday, GetBithdayData } from "../controllers/birthday.controllers.js";
import { checkifuserisloggedin } from "../middlewares/auth.js";

const router = express.Router();


router
    .route("/signup")
    .get((req,res)=>{
        res.render("../views/signup.ejs")
    })
    .post(singupdataupload)

router
    .route("/login")
    .get((req,res)=>{
        res.render("../views/login.ejs")
    })
    .post(userlogincheck)

router
    .route("/")
    .get(checkifuserisloggedin,(req,res)=>{
        res.render("../views/birthday.ejs")
    })
    .post(checkifuserisloggedin,storebirthday)

router
    .route("/dashboard")
    .get(checkifuserisloggedin,GetBithdayData)
    
export {router}