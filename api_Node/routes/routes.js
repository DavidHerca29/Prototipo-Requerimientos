"use strict";
exports.__esModule = true;
var express = require("express");
var common_1 = require("../common");
var kindness_1 = require("./kindness");
var Routes = /** @class */ (function () {
    function Routes() {
        this.express = express();
        this.logger = new common_1.Logger();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    Routes.prototype.middleware = function () {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    };
    Routes.prototype.routes = function () {
        this.express.use('/kind', kindness_1.kindnessrouter);
        this.logger.info("Kindness route loaded");
    };
    return Routes;
}());
exports["default"] = new Routes().express;
