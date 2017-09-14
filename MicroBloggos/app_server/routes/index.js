var express = require('express');
var router = express.Router();
var ctrlAuth = require('../controllers/authentication');
var ctrlUsers = require('../controllers/users');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  ctrlUsers.usersReadAll(req, res, next);
});
router.get('/users/:userid', function(req, res, next) {
  ctrlUsers.userReadOne(req, res, next);
});
router.put('/users/:userid', function(req, res, next) {
  ctrlUsers.usersUpdateOne(req, res, next);
});
router.delete('/users/:userid(\\d+)', function(req, res, next) {
  ctrlUsers.usersDeleteOne(req, res, next);
});
router.post('/register', function(req, res, next) {
  ctrlAuth.register(req, res, next);
});
router.post('/login', function(req, res, next) {
  ctrlAuth.login(req, res, next);
});

module.exports = router;
