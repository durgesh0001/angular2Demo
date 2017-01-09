/**
 * Created by root on 26/12/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var app_users_1 = require('./app.users');
var AddUsers = (function () {
    function AddUsers(builder) {
        this.builder = builder;
        this.submitAttempt = false;
        this.username = new common_1.Control('', common_1.Validators.required);
        this.firstname = new common_1.Control('', common_1.Validators.required);
        this.email = new common_1.Control('', common_1.Validators.required);
        // If we want to use more than one synchronous validators, we need to compose them
        this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(8)]));
        this.registrationForm = builder.group({
            username: this.username,
            firstname: this.firstname,
            email: this.email,
            password: this.password
        });
    }
    AddUsers.prototype.registerUser = function (user, isvalid) {
        this.submitAttempt = true;
        if (isvalid == true) {
            console.log(isvalid);
            alert("hello");
        }
    };
    AddUsers = __decorate([
        core_1.Component({
            selector: 'add-users',
            templateUrl: 'app/ts/users/app.addUsers.html',
            directives: [app_users_1.MyUsers],
        })
    ], AddUsers);
    return AddUsers;
}());
exports.AddUsers = AddUsers;
//# sourceMappingURL=app.addUsers.js.map