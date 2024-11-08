const DressCard = require("../models/dresscard.js");
const flash = require("connect-flash");

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
module.exports.addlike = async (req, res) => {
    const { id } = req.params;
    try {
        const dresscard = await DressCard.findById(id);
        if (!dresscard) {
            return res.status(404).json({ success: false, message: "Dress card not found" });
        }

        if (dresscard.like) {
            dresscard.like = false;
            console.log(dresscard)
            await dresscard.save();
            req.flash("error", "Removed from Wishlist!");
        } else {
            dresscard.like = true;
            console.log(dresscard);
            await dresscard.save();
            req.flash("success", "Added to Wishlist!");
        }
        res.redirect(`/dresscards/${id}`);
    } catch (error) {
        console.error("Error updating like:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
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
module.exports.category = async(req,res)=>{
    let {category} = req.params;
    let allDressCards = await DressCard.find({category:category});
    // console.log(allDressCards);
    res.render("dresscards/index.ejs",{allDressCards});
}

module.exports.search = async(req,res) =>{
    let type = req.query.q;
    let allDressCards = await DressCard.find({title:type});
    console.log(allDressCards);
    res.render("dresscards/index.ejs",{allDressCards});
}
module.exports.wishlist = async(req,res) =>{
    let allDressCards = await DressCard.find({like:true});
    // console.log(allDressCards);
    res.render("dresscards/index.ejs",{allDressCards});
}
module.exports.sort = async (req, res) => {
    // console.log('Sort option:', req.query.sort);
    const sortOption = req.query.sort === 'asc' ? 1 : -1;
    const allDressCards = await DressCard.find().sort({ price: sortOption });
    res.render('dresscards', { allDressCards });
  };

module.exports.delete = async(req,res)=>{
    let {id} = req.params;
    let deleteDressCard = await DressCard.findByIdAndDelete(id);
    console.log(deleteDressCard);
    req.flash("success","DressCard deleted!");
    res.redirect("/dresscards");
};