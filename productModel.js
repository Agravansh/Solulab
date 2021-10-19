const mongoose = require('mongoose')
const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:[true,`cannot leave this empty`],
        minlength:[3,'name should be atleast 3 characters long']
    },
    qtyPerUnit:{
        type:Number,
        required:[true,`cannot leave this empty`],
    },
    unitPrice:{
        type:Number,
        required:[true,`cannot leave this empty`],
    },
    unitInStock:{
        type:Number,
        required:[true,`cannot leave this empty`],
    },
    discontinued:{
        type:Boolean,
        default:false,
    },
    categoryId:{
        type:mongoose.Schema.ObjectId,
        ref:'category',
    }
})

const product = mongoose.model('product',productSchema)
module.exports = product