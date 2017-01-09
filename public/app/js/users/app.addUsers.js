/**
 * Created by root on 26/12/16.
 */
System.register(['angular2/core', 'angular2/common', './app.users', '../services/httpServices', '../services/dbServices', "angular2/router"], function(exports_1, context_1) {
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
    var core_1, common_1, app_users_1, httpServices_1, dbServices_1, router_1;
    var AddUsers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_users_1_1) {
                app_users_1 = app_users_1_1;
            },
            function (httpServices_1_1) {
                httpServices_1 = httpServices_1_1;
            },
            function (dbServices_1_1) {
                dbServices_1 = dbServices_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddUsers = (function () {
                function AddUsers(builder, _dbservicee, _httpservice, router, location) {
                    this.builder = builder;
                    this._dbservicee = _dbservicee;
                    this._httpservice = _httpservice;
                    this.router = router;
                    this.location = location;
                    this.result = [];
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
                    var _this = this;
                    this.submitAttempt = true;
                    if (isvalid == true) {
                        this._httpservice.addUser(user)
                            .subscribe(function (data) { return _this.result = data.records; }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("finish"); });
                        alert("record saved");
                        this.location.replaceState('/users');
                        this.router.navigate(['Users']);
                    }
                };
                AddUsers = __decorate([
                    core_1.Component({
                        selector: 'add-users',
                        templateUrl: 'app/ts/users/app.addUsers.html',
                        directives: [app_users_1.MyUsers],
                        providers: [dbServices_1.dbService, httpServices_1.Httpservices],
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder, dbServices_1.dbService, httpServices_1.Httpservices, router_1.Router, router_1.Location])
                ], AddUsers);
                return AddUsers;
            }());
            exports_1("AddUsers", AddUsers);
        }
    }
});
//# sourceMappingURL=app.addUsers.js.map