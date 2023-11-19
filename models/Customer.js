const { Schema, model } = require ('mongoose')

const customerSchema = new Schema({
        type : {type: String, required:true, lowecase:true},
        date : {type: Date, default: Date.now}
}, {timestamps:true})

module.exports = model('customer', customerSchema);