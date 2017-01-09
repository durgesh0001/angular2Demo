
var express = require('express');
var router = express.Router();
var User = require('./user.model.js');
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    User.find({}, function (err, employees) {

        if(!employees) { return res.send(404); }
        return res.json(employees);
    });
});

router.post('/add', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var user=JSON.parse(req.body.json);
console.log(user)
    User.create(user, function(err, employees) {
        if(err) { console.log(err) }
        res.json(201,employees);
    });
});

router.post('/delete', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var id=JSON.parse(req.body.json);
    User.findById(id, function (err, users) {
        if (err) {
            return handleError(res, err);
        }
        if (!users) {
            return res.send(404);
        }
        users.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            console.log("deleted")
            return res.send(204);
        });
    });
});
router.post('/update', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var user=JSON.parse(req.body.json);

    User.findById(user._id, function (err, Users) {
        if (err) { return handleError(res, err); }
        if(!Users) { return res.send(404); }
        var updated = _.merge(Users, user);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, Users);
        });
    });
});
function handleError(res, err) {
    return res.send(500, err);
}

module.exports = router;
