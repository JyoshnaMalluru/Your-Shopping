const DressCard = require("../models/dresscard.js");

module.exports.index = async(req,res,next)=> {
    const allDressCards = await DressCard.find({});
    res.render("dresscards/index.ejs",{allDressCards});
};

module.exports.new = async(req,res,next)=>{
    res.render("dresscards/new.ejs");
};

module.exports.show = async(req,res,next) => {
    let {id} = req.params;
    const dresscard = await DressCard.findById(id).populate("owner");
    if(!dresscard){
        req.flash("error","DressCard you requested for does not exist");
        res.redirect("/dresscards")
    }
    res.render("dresscards/show.ejs",{dresscard});
};

module.exports.create = async(req,res,next)=>{
        let url = req.file.path;
        let filename = req.file.filename;
        const newDressCard = new DressCard(req.body.dresscard);
        // console.log(url,"..",filename);
        newDressCard.owner = req.user._id;
        newDressCard.image = {url,filename};
        await newDressCard.save();
        req.flash("success","New DressCard added!");
        res.redirect("/dresscards");
};

module.exports.edit = async(req,res)=>{
    let {id} = req.params;
    const dresscard = await DressCard.findById(id);
    // console.log(dresscard);
    if(!dresscard){
        req.flash("error","DressCard you requested for does not exist");
        res.redirect("/dresscards")
    }
    let originalImageUrl = dresscard.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_300,w_250")
    res.render("dresscards/edit.ejs",{dresscard,originalImageUrl});
};

module.exports.update = async(req,res)=>{
    let {id} = req.params;
    let dresscard = await DressCard.findByIdAndUpdate(id,{...req.body.dresscard});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        dresscard.image = {url,filename};
        await dresscard.save();
    }
    req.flash("success","DressCard Updated!");
    res.redirect(`/dresscards/${id}`);
};

module.exports.delete = async(req,res)=>{
    let {id} = req.params;
    let deleteDressCard = await DressCard.findByIdAndDelete(id);
    console.log(deleteDressCard);
    req.flash("success","DressCard deleted!");
    res.redirect("/dresscards");
};