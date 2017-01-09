"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var app_users_1 = require('./users/app.users');
var app_addUsers_1 = require('./users/app.addUsers');
//Routing => ROUTER_DIRECTIVES,RouteConfig and <base href="/"> in index.html
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [app_users_1.MyUsers, app_addUsers_1.AddUsers, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'app/ts/app.component.html',
        }),
        router_1.RouteConfig([
            { path: '/users', name: 'Users', component: app_users_1.MyUsers },
            { path: '/add', name: 'Add', component: app_addUsers_1.AddUsers }
        ])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map