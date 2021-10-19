const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    categoryName:{
        type:String,
        required:[true,'cannot leave this empty']
    }
})

const category = mongoose.model('category',categorySchema)
module.exports = category