const express = require('express')
const connectDB = require('./connectDB/connectDB.js')
const router = require('./routes/routes.js')
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)
const port = 5000
app.listen(5000,()=>{
    console.log(`server listening to port ${port}...`)
})
connectDB()