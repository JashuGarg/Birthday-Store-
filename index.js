import express from "express";
import { ConnectDB } from "./connect.js";
import cookieParser from "cookie-parser";
import { router as userrouter } from "./routes/users.routes.js";

const app = express();
const port = 8000;
const url = "mongodb://localhost:27017/birthdaydata";

//middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.set("view engine","ejs");

//connect DB
ConnectDB(url).then(()=>{
    console.log("DataBase connected succesfully");
}).catch((err)=>{
    console.log("Err in connecting DB: ",err);
})


//routes 
app.use("/",userrouter);
// app.use("/login",);
// app.use("/signup",userrouter);
// app.use("/birthday",);


//listen

app.listen(port,(err)=>{
    if(!err)
        console.log("Server is LIVE");
    else    
        console.log("Err in connecting to the server : ",err);
})