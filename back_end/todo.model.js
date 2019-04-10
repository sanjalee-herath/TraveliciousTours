const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    user_type: {
        type: String
    }

});

let tour = new Schema({
    id: {
        type: String
    },
    dis: {
        type: String
    }

});

module.exports = mongoose.model('user', user);
module.exports = mongoose.model('tour', tour);