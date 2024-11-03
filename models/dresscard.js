const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dresscardSchema =  new Schema({
    title : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    image : {
        url: String,
        filename: String,
    },
    price : {
        type : Number,
        required : true,
    },
    like : {
        type : Boolean,
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref: "User",
    },
});

const DressCard = mongoose.model("DressCard",dresscardSchema);
module.exports = DressCard;