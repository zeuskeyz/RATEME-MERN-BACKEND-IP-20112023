const mongoose = require('mongoose');
const connect = module.exports = async ()=>{
    try { await mongoose.connect(process.env.DB_LINK, console.log('DATABASE CONNECTED'))} 
    catch (error) { error => console.log('DB CONNECTION ERROR')}

};

