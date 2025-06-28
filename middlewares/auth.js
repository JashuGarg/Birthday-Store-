import {getUser } from "../utils/auth.js";


function checkifuserisloggedin(req,res,next){
const token = req.cookies?.uuid;


    if(!token) return res.redirect("/login");

    const user = getUser(token);

    if(!user) return res.redirect ("/login");

    req.user = user;
    next();
}

export {checkifuserisloggedin} 