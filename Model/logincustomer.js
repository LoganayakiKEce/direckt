let{Schema,model} = require("mongoose")
let customerlogin =  new Schema({
    name:{type:String},
    email:{unique:true,type:String},
    password:{type:String},
    phonenumber:{unique:true,type:Number}
})
module.exports = model("Logincustomer",customerlogin);