const mongoose = require('mongoose')

const mongoPath = 'mongodb://localhost:27017/ProjectKapil'
let connectDB = async()=>{
   await mongoose.connect(mongoPath,{useNewUrlParser:true,useUnifiedTopology:true})
 console.log(`successfully connected to the DB...`)
}

module.exports = connectDB