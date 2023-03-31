const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = {
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

}

const Users = mongoose.model('users', userSchema);
module.exports = Users;