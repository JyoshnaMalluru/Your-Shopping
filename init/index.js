const mongoose = require("mongoose");
const DressCard = require("../models/dresscard.js");
const initData = require("./data.js");
require('dotenv').config({ path: '../.env' });
const MONGO_URL = `mongodb+srv://jyoshna1595:${process.env.CLOUD_DBPASSWORD}@cluster0.bcjsm.mongodb.net/`;
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

const initDB= async() => {
    await DressCard.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"67937944298c01f4a0a69521",}));
    await DressCard.insertMany(initData.data);
    console.log("Data was initialized");
}
initDB();