"use strict";
exports.__esModule = true;
exports.WWCrepository = void 0;
var common_1 = require("../common");
var sql = require('mssql');
var poolconfig = {
    user: 'apiConnection',
    password: '123456',
    database: 'Ubicabus',
    server: '25.87.215.200',
    port: 1433,
    pool: {
        max: 3,
        min: 1,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
var poolglobalconfig = {
    user: 'apiConnection',
    password: '123456',
    database: 'Ubicabus',
    server: '25.87.215.200',
    port: 1433,
    pool: {
        max: 6,
        min: 1,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
var WWCrepository = /** @class */ (function () {
    function WWCrepository() {
        if (WWCrepository.poolconnector == null) {
            WWCrepository.poolconnector = new sql.ConnectionPool(poolglobalconfig);
            WWCrepository.globalpool = WWCrepository.poolconnector.connect();
            console.log("Yes");
        }
        this.log = new common_1.Logger();
        try {
        }
        catch (e) {
            this.log.error(e);
        }
    }
    WWCrepository.getInstance = function () {
        if (!this.instance) {
            this.instance = new WWCrepository();
        }
        return this.instance;
    };
    /*
        public RatingPerMonth(gameMode : string, month:number, player : string, ano: string) : Promise<any>
        {
            const promise = new Promise<string> (
                (resolve, rejects) => {
                    var sql = 'CALL  PlayerRatingperMonth (\''+player+'\',\''+gameMode+'\','+month+','+ano+')';
                    bdConnection.query(sql, (err:any, rows:any, fields:any) => {
                        
                        if (err){
                            console.log(err);
                            rejects(err.message);
                        }
                        else {
                            
                            resolve(rows);
                        }
                    });
                }
    
            );
            return promise;
        }
    
        public MatchesPerMonth(gameMode : string, month:number, player : string, ano: string) : Promise<any>
        {
            const promise = new Promise<string> (
                (resolve, rejects) => {
                    var sql = 'CALL  MatchesPerMonth (\''+player+'\',\''+gameMode+'\','+month+','+ano+')';
                    bdConnection.query(sql, (err:any, rows:any, fields:any) => {
                        
                        if (err){
                            console.log(err);
                            rejects(err.message);
                        }
                        else {
                            resolve(rows);
                        }
                    });
                }
    
            );
            return promise;
        }
    
        public MatchTracing(nickBlack : string, nickWhite:string, time : string) : Promise<any>
        {
            const promise = new Promise<string> (
                (resolve, rejects) => {
                    var sql = 'CALL  MatchTracing (\''+nickWhite+'\',\''+nickBlack+'\',\''+time+'\')';
                    bdConnection.query(sql, (err:any, rows:any, fields:any) => {
                        
                        if (err){
                            console.log(err);
                            rejects(err.message);
                        }
                        else {
                            
                            resolve(rows);
                        }
                    });
                }
    
            );
            return promise;
        }
    
        public FriendList(user : string) : Promise<any>
        {
            const promise = new Promise<string> (
                (resolve, rejects) => {
                    var sql = 'CALL FriendList (\''+user+'\')';
                    bdConnection.query(sql, (err:any, rows:any, fields:any) => {
                        
                        if (err){
                            console.log(err);
                            rejects(err.message);
                        }
                        else {
                            
                            resolve(rows);
                        }
                    });
                }
    
            );
            return promise;
        }
        
        public PlansPerUser(user : string) : Promise<any>
        {
            const promise = new Promise<string> (
                (resolve, rejects) => {
                    var sql = 'CALL PlayerPlans (\''+user+'\')';
                    bdConnection.query(sql, (err:any, rows:any, fields:any) => {
                        
                        if (err){
                            console.log(err);
                            rejects(err.message);
                        }
                        else {
                            resolve(rows);
                        }
                    });
                }
    
            );
            return promise;
        }
    */
    WWCrepository.prototype.testsp = function () {
        var promise = new Promise(function (resolve, rejects) {
            var sql = 'Exec test_sp';
            WWCrepository.globalpool.then(function (pool) {
                pool.request().query(sql)
                    .then(function (data) {
                    resolve(data);
                })["catch"](function (err) {
                    rejects(err.message);
                });
            });
        });
        return promise;
    };
    WWCrepository.prototype.login = function (email, pass) {
        var promise = new Promise(function (resolve, rejects) {
            var sql = "Exec login '" + email + "', '" + pass + "'";
            WWCrepository.globalpool.then(function (pool) {
                pool.request().query(sql)
                    .then(function (data) {
                    resolve(data);
                })["catch"](function (err) {
                    rejects(err.message);
                });
            });
        });
        return promise;
    };
    WWCrepository.prototype.registerAutobusera = function (owner, company) {
        var promise = new Promise(function (resolve, rejects) {
            var sql = "Exec registerautobusera '" + owner + "', '" + company + "'";
            WWCrepository.globalpool.then(function (pool) {
                pool.request().query(sql)
                    .then(function (data) {
                    resolve(data);
                })["catch"](function (err) {
                    rejects(err.message);
                });
            });
        });
        return promise;
    };
    WWCrepository.prototype.newPost = function (time, email) {
        // obtener una conexion a la base dee datos
        // hacer el llamado a la base de datos
        var promise = new Promise(function (resolve, rejects) {
            var sql = "Exec sp_Post '" + time + "', '" + email + "'";
            console.log(sql);
            WWCrepository.globalpool.then(function (pool) {
                pool.request().query(sql)
                    .then(function (data) {
                    resolve();
                })["catch"](function (err) {
                    rejects(err.message);
                });
            });
        });
        return promise;
    };
    WWCrepository.prototype.newhabit = function (longitude, latitude, email, title, fecha) {
        // obtener una conexion a la base dee datos
        // hacer el llamado a la base de datos
        var promise = new Promise(function (resolve, rejects) {
            var sql = "Exec sp_Checkin " + longitude + ", " + latitude + ", '" + email + "', '" + title + "', '" + fecha + "'";
            WWCrepository.globalpool.then(function (pool) {
                pool.request().query(sql)
                    .then(function (data) {
                    resolve();
                })["catch"](function (err) {
                    rejects(err.message);
                });
            });
        });
        return promise;
    };
    return WWCrepository;
}());
exports.WWCrepository = WWCrepository;
