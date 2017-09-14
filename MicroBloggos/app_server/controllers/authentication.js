UserModel = require('../models/db').UserModel;
const saltRounds = 10;
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(saltRounds);

module.exports = {

    register: function (req, res, next) {

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(req.body.email) || req.body.name == undefined || req.body.password == undefined) {
            return res.status(400).json({ error: 'wrong email or paramater missing' });
        }
        else {

            var UserAdd = new UserModel({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt)

            });

            // Save
            UserAdd.save(function (err, resuser) {
                if (err) return res.status(404).json({ error: 'Name/Email already in use' });
                res.status(200).json({ "user": resuser, err:"" });
            });
        }
    },

    login: function (req, res, next) {

        if (req.body.email != undefined && req.body.password != undefined) {
            UserModel.findOne({ "email": req.body.email }, function (err, theOne) {
                // console.log(theOne);
                if (err) return res.status(404);
                if (!bcrypt.compareSync(req.body.password, theOne.password)) {
                    return res.status(400).json({ error: 'wrong email or wrong password' });
                }
                else {
                    res.status(200).json({ "log": true, "user": theOne });
                }
            });
        }
        else {
            return res.status(400).json({ error: 'wrong email or wrong password' });
        }
    }
}