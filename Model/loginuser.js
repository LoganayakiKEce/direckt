let {Schema,model} = require("mongoose");

let userlogin = new Schema({
    name:{type:String},
    businessname:{type:String},
    location:{type:String},
    phonenumber:{unique:true,type:Number},
    email:{unique:true,type:String},
    password:{type:String},
    latitude: { type: Number },   
    longitude: { type: Number },
    googlelink:{type:String},
    category:{type:String},
    availabilitystatus:{type:Boolean}
})
module.exports = model("userlogin",userlogin);