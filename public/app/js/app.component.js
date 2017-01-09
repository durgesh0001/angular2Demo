System.register(['angular2/core', 'angular2/router', './users/app.users', './users/app.addUsers', './Login'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, app_users_1, app_addUsers_1, Login_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_users_1_1) {
                app_users_1 = app_users_1_1;
            },
            function (app_addUsers_1_1) {
                app_addUsers_1 = app_addUsers_1_1;
            },
            function (Login_1_1) {
                Login_1 = Login_1_1;
            }],
        execute: function() {
            //Routing => ROUTER_DIRECTIVES,RouteConfig and <base href="/"> in index.html
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [app_users_1.MyUsers, app_addUsers_1.AddUsers, Login_1.Login, router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/ts/app.component.html',
                    }),
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: app_users_1.MyUsers },
                        { path: '/add', name: 'Add', component: app_addUsers_1.AddUsers },
                        { path: '/login', name: 'Login', component: Login_1.Login, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map