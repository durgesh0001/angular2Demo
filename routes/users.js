
var express = require('express');
var router = express.Router();
var randomstring = require("randomstring");
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
/* GET users listing. */
router.post('/login', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var user=JSON.parse(req.body.json);
    console.log(user)
    User.find({email:user.email,password:user.password}, function (err, employees) {
     return res.json({data:employees});

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
router.post('/updatebyemail', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    var user=JSON.parse(req.body.json);
    User.update({email:user.email},{$set:{profile_picture:user.profile_picture}}, function (err, Users) {
        if (err) { return handleError(res, err); }
        if(!Users) { return res.send(404); }
        console.log(Users);
        return res.json(200, Users);

    });
});
router.get('/upload', function(req, res, next) {
    // tickets.push("hello");
    res.render('upload',{page_title:"Add Customers-Node.js"});
});
router.post('/upload',function(req,res){
    var multiparty = require('multiparty');
    var form = new multiparty.Form();

    var fs= require("fs");
    form.parse(req, function(err, fields, files) {
        var img=files.image[0];
        var myname= randomstring.generate(3)+img.originalFilename;
        var newpath1="http://systematixindiademo1.herokuapp.com/images/"+myname;
        res.json({status: 1, message: 'success','path':newpath1});

        fs.readFile(img.path,function (err,data)
        {
            var path1="./public/images/"+myname;
            fs.writeFile(path1, data,function(error) {
                if (error) throw err;
                console.log('It\'s saved!');

            });

        });

    });

});
function handleError(res, err) {
    return res.send(500, err);
}

module.exports = router;
