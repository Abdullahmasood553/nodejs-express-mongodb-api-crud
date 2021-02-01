let mongoose = require('mongoose');



// Employee Schema
const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required:true
    }, 
    email: {
        type:String,
        required:true
    },
    salary: {
        type:String,
        required:true
    }
});



module.exports = {Employee}