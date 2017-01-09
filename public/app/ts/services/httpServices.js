"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by root on 26/12/16.
 */
var core_1 = require('angular2/core');
require('rxjs/add/operator/map');
var Httpservices = (function () {
    function Httpservices(_http) {
        this._http = _http;
    }
    Httpservices.prototype.getUser = function () {
        return this._http.get('http://www.w3schools.com/angular/customers.php')
            .map(function (res) { return res.json(); });
    };
    Httpservices = __decorate([
        core_1.Injectable()
    ], Httpservices);
    return Httpservices;
}());
exports.Httpservices = Httpservices;
//# sourceMappingURL=httpServices.js.map