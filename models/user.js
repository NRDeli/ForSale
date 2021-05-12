const mongoose = require("mongoose");
const pspLclMng = require("passport-local-mongoose");

//user schema
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    wishlist: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "item",
        }],

})
//pspLclMng -it contains all the finctions as that of serialize user ,deserializeUser,authenicate,isAuthenticated defined
userSchema.plugin(pspLclMng);
//modelling user schema
var USER = mongoose.model("user", userSchema);
module.exports = USER;