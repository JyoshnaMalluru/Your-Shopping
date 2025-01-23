const DressCard = require("./models/dresscard.js");
const {dresscardSchema}=require("./schema.js");
const ExpressError = require("./utils/ExpressError.js");

module.exports.validateDressCard = (req, res, next) => {
    const { error } = dresscardSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(', ');
        throw new ExpressError(400, msg);
    } else {
        next();
    }
};

module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","You must be logged in to create a dresscard");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner = async(req,res,next) => {
    let {id} = req.params;
    let dresscard = await DressCard.findById(id);
    if(!dresscard.owner.equals(res.locals.currUser._id.toString())){
        req.flash("error","You don't have to permission to edit");
        return res.redirect(`/dresscards/${id}`);
    }
    next();
}