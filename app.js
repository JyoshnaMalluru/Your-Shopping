if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const DressCard = require("./models/dresscard.js");
const path = require("path");
const methodOverride = require ("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {dresscardSchema}=require("./schema.js");
const session = require("express-session");
const flash = require('connect-flash');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js")
const dresscardsRouter = require("./routes/dresscard.js");
const userRouter = require("./routes/user.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/shop";
main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.static(path.join(__dirname,"/images")));
const sessionOptions ={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now()+7*24*60*60*1000,
        maxage:7*24*60*60*1000,
        httpOnly:true,
    }
}
// app.get("/",(req,res)=>{
//     res.send("Hi,I am root");
// })

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    // console.log(res.locals.success)
    next();
})

// app.get("/demouser",async(req,res)=>{
//     let fakeUser = new User({
//         email : "student@gmail.com",
//         username :"Jyoshna"
//     });
//     let registeredUser = await User.register(fakeUser,"helloworld");
//     res.send(registeredUser);
// })
app.use("/dresscards",dresscardsRouter);
app.use("/",userRouter);

// app.get("/testDressCard",async(req,res)=>{
//     let sampleDressCard = new DressCard({
//         title : "Kurti",
//         category : "women",
//         price : 500
//     });
//     await sampleDressCard.save();
//     console.log("sample DressCard was saved");
//     res.send("successful testing");
// })
app.all("*",(req,res,next) =>{
    next(new ExpressError(404,"Page Not Found!"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something Went Wrong"} = err;
    res.status(statusCode).render("error.ejs",{message})
    // res.status(statusCode).send(message);
})
app.listen(8080,()=> {
    console.log("server is listening to port");
})