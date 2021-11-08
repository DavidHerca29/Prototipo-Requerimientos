"use strict";
exports.__esModule = true;
exports.bdConnection = void 0;
var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: 'mysql_bases1',
    user: 'root',
    password: '123456',
    database: 'ChessWorldWide'
});
exports.bdConnection = mysqlConnection;
mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    else {
        console.log("Db connected");
    }
});
