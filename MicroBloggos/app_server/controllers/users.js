User = require ('../models/db').UserModel;

module.exports ={

    usersReadAll: function (req, res, next) {
        User.find({}, function(err,users){
        res.json(users)
        });

    },
    userReadOne: function (req, res, next) {
        var userid = req.params.userid;
        User.find({_id: userid}, function(err,users){
        res.json(users)
        });

    },
    usersUpdateOne: function (req, res, next) {
        var userid = req.params.userid;
        User.findByIdAndUpdate(userid, { $set: req.body}, { new: true }, function (err, User) {
            if (err) return handleError(err);
            res.send(User);
          });    
    },
    usersDeleteOne: function (req, res, next) {
        var userid = req.params.userid;
        
    }
    
}