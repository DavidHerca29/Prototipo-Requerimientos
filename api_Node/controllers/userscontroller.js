"use strict";
exports.__esModule = true;
exports.UserController = void 0;
var wwcrepository_1 = require("../repositories/wwcrepository");
var common_1 = require("../common");
var UserController = /** @class */ (function () {
    function UserController() {
        this.log = new common_1.Logger();
        try {
        }
        catch (e) {
            this.log.error(e);
        }
    }
    UserController.getInstance = function () {
        if (!this.instance) {
            this.instance = new UserController();
        }
        return this.instance;
    };
    UserController.prototype.login = function (email, pass) {
        return wwcrepository_1.WWCrepository.getInstance().login(email, pass);
    };
    UserController.prototype.registerAutobusera = function (owner, company) {
        return wwcrepository_1.WWCrepository.getInstance().registerAutobusera(owner, company);
    };
    UserController.prototype.newPost = function (time, email) {
        return wwcrepository_1.WWCrepository.getInstance().newPost(time, email);
    };
    UserController.prototype.newhabit = function (longitude, latitude, email, title, fecha) {
        return wwcrepository_1.WWCrepository.getInstance().newhabit(longitude, latitude, email, title, fecha);
    };
    return UserController;
}());
exports.UserController = UserController;
