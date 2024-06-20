let {Schema,model} = require("mongoose");
const mongoose = require("mongoose")
let threads = new Schema({
   
    location:{type:String},
    email:{type:String},
    image:{type:String},
    heading:{type:String},
    bill:{type:String},
    landmark:{type:String},
    category:{type:String},
    threadsreply: [{ type: mongoose.Schema.Types.ObjectId, ref: 'threadsreply' }]
})
module.exports = model("threads",threads);