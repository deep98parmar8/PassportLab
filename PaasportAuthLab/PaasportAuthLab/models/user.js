
'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;





/*const mongoose = require('mongoose')

//Create the user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    }

});
//Create, Instantiate and export model with schema
const user = mongoose.model("User", UserSchema);
module.exports = User; */