const mongoose = require("mongoose");
const DressCard = require("../models/dresscard.js");
const initData = require("./data.js");

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

const initDB= async() => {
    await DressCard.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj, owner:"67266171cc448c71da3fb466",}));
    await DressCard.insertMany(initData.data);
    console.log("Data was initialized");
}
initDB();