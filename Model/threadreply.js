let{Schema,model} = require("mongoose")
const mongoose = require("mongoose")
let threadsreply = new Schema({
    threads_id: { type: mongoose.Schema.Types.ObjectId, ref: 'threads' },
    loginuser_id : {type: mongoose.Schema.Types.ObjectId, ref: 'userlogin'},
    deliverystatus:{type:Boolean},
    replymessage:{type:String},
    deal:{type:Boolean}
})
module.exports = model("threadsreply",threadsreply)