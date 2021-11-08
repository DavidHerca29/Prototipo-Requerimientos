"use strict";
exports.__esModule = true;
exports.kindnessrouter = void 0;
var express = require("express");
var userscontroller_1 = require("../controllers/userscontroller");
var sessions = require("express-session");
//import * as sessions from './sessiontype'
var app = express();
exports.kindnessrouter = app;
var sess;
var oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));
app.use(express.static(__dirname + '/www'));
app.get("/signin", function (req, res) {
    var email = req.query["email"].toString();
    var pass = req.query["name"].toString();
    sess = req.session;
    sess.email = email;
    userscontroller_1.UserController.getInstance().login(email, pass)
        .then(function (value) {
        if (value.recordsets[0][0].Valido != 0) {
        }
        res.send(value.recordsets[0][0]);
    })["catch"](function (err) {
        console.log(err);
        res.json(err);
    });
});
app.get("/login", function (req, res) {
    var email = req.query["email"].toString();
    var pass = req.query["pass"].toString();
    sess = req.session;
    sess.email = email;
    userscontroller_1.UserController.getInstance().login(email, pass)
        .then(function (value) {
        if (value.recordsets[0][0].Valido != 0) {
        }
        res.send(value.recordsets[0][0]);
    })["catch"](function (err) {
        console.log(err);
        res.json(err);
    });
});
app.get("/check", function (req, res) {
    sess = req.session;
    res.send(sess.email);
});
app.get("/registerAutobusera", function (req, res) {
    var owner = req.query["owner"].toString();
    var company = req.query["company"].toString();
    userscontroller_1.UserController.getInstance().registerAutobusera(owner, company)
        .then(function (value) {
        res.send(value.recordsets[0][0]);
    })["catch"](function (err) {
        console.log(err);
        res.json(err);
    });
});
app.get("/post", function (req, res) {
    var time = req.query["time"].toString();
    console.log(time);
    var email = req.query["email"].toString();
    userscontroller_1.UserController.getInstance().newPost(time, email)
        .then(function (value) {
        res.json(value[0]);
    })["catch"](function (err) {
        console.log(err);
        res.json(err);
    });
});
app.get("/habit", function (req, res) {
    var longitude = Number(req.query["lon"]);
    var latitude = Number(req.query["lat"]);
    var email = req.query["email"].toString();
    var title = req.query["title"].toString();
    var fecha = req.query["fecha"].toString();
    userscontroller_1.UserController.getInstance().newhabit(longitude, latitude, email, title, fecha)
        .then(function (value) {
        res.json(value[0]);
    })["catch"](function (err) {
        console.log(err);
        res.json(err);
    });
});
app.get("/index", function (req, res) {
    res.sendFile('www/index.html', { root: __dirname });
});
app.get("/mainadmin", function (req, res) {
    res.sendFile('www/mainAdministrador.html', { root: __dirname });
});
app.get("/newautobusera", function (req, res) {
    res.sendFile('www/insertAutobusera.html', { root: __dirname });
});
app.get("/mainbus", function (req, res) {
    res.sendFile('www/mainAutobusero.html', { root: __dirname });
});
app.get("/newdriver", function (req, res) {
    res.sendFile('www/insertdriver.html', { root: __dirname });
});
app.get("/newroute", function (req, res) {
    res.sendFile('www/insertroute.html', { root: __dirname });
});
