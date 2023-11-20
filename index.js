//DEPENDENCY MODULES
const express = require('express')
const mongoose =  require('mongoose')
const cors = require('cors')
const connection = require('./database/Connection')
const customerRoutes = require('./controllers/Routes')
require('dotenv').config()

//CREATING AN INSTANCE OF EXPRESS
const app = express()

//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/', customerRoutes)

//CUSTOM MIDDLEWARES
app.listen(process.env.PORT, ()=>{console.log(`\nSERVER RUNNING`); connection()} )
