System.register(['angular2/core', '../services/httpServices', 'angular2/common', '../pager.component', '../pagination.component', '../customPipes/searchPipes', '../services/dbServices'], function(exports_1, context_1) {
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
    var core_1, httpServices_1, common_1, pager_component_1, pagination_component_1, searchPipes_1, dbServices_1;
    var MyUsers;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (httpServices_1_1) {
                httpServices_1 = httpServices_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (pager_component_1_1) {
                pager_component_1 = pager_component_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            },
            function (searchPipes_1_1) {
                searchPipes_1 = searchPipes_1_1;
            },
            function (dbServices_1_1) {
                dbServices_1 = dbServices_1_1;
            }],
        execute: function() {
            MyUsers = (function () {
                function MyUsers(_httpservice, builder, _dbservicee) {
                    this._httpservice = _httpservice;
                    this.builder = builder;
                    this._dbservicee = _dbservicee;
                    this.result = [];
                    this.testdata = "";
                    this.searchbyName = "";
                    this.id = "";
                    this.usersData = [];
                    //print to the user the selected page
                    this.currentSelectedPage = "";
                    //print to the user the total iterms per page
                    this.currentItemsPerPage = "";
                    //the maximum buttons to show
                    this.maxSize = 3;
                    //the number of pages you want to print
                    this.totalResults = 60;
                    //the current page
                    this.currentPage = 2;
                    this.submitAttempt = false;
                    this.usernamemodelvalue = "";
                    this.firstnamemodelvalue = "";
                    this.emailmodelvalue = "";
                    this.userpasswordvalue = "";
                    this.username = new common_1.Control('', common_1.Validators.required);
                    this.firstname = new common_1.Control('', common_1.Validators.required);
                    this.email = new common_1.Control('', common_1.Validators.required);
                    this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(8)]));
                    // If we want to use more than one synchronous validators, we need to compose them
                    this.registrationForm = builder.group({
                        username: this.username,
                        firstname: this.firstname,
                        email: this.email,
                        password: this.password,
                    });
                    //edit module end
                    this.getUsersRecords();
                    console.log("return");
                    console.log(this.result);
                    this.usersData.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                }
                MyUsers.prototype.setCurrentPage = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                MyUsers.prototype.currentPageChanged = function (event) {
                    this.currentSelectedPage = ' is : ' + event.page;
                    this.currentItemsPerPage = ' is : ' + event.itemsPerPage;
                };
                ;
                MyUsers.prototype.editUser = function (user, isvalid) {
                    var _this = this;
                    this.submitAttempt = true;
                    if (isvalid == true) {
                        user._id = this.id;
                        this._httpservice.updateUser(user)
                            .subscribe(function (data) { return _this.result = data.records; }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("finish"); });
                        alert("record saved");
                    }
                };
                MyUsers.prototype.openmodel = function (data) {
                    //binding data to model value
                    this.usernamemodelvalue = data.username;
                    ;
                    this.firstnamemodelvalue = data.firstname;
                    this.emailmodelvalue = data.email;
                    this.userpasswordvalue = data.password;
                    this.id = data._id;
                };
                MyUsers.prototype.getUsersRecords = function () {
                    // this._dbservicee.list().then(allDoc => {
                    //     this.result=allDoc.rows;
                    //     console.log(this.result);
                    //     return this.result;
                    // });
                    var _this = this;
                    this._httpservice.getUser()
                        .subscribe(function (data) { return _this.result = data; }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("finish"); });
                    return 1;
                };
                MyUsers = __decorate([
                    core_1.Component({
                        selector: 'my-users',
                        templateUrl: 'app/ts/users/app.users.html',
                        pipes: [searchPipes_1.SearchPipe],
                        directives: [pagination_component_1.Pagination, pager_component_1.Pager, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        providers: [httpServices_1.Httpservices, dbServices_1.dbService],
                    }), 
                    __metadata('design:paramtypes', [httpServices_1.Httpservices, common_1.FormBuilder, dbServices_1.dbService])
                ], MyUsers);
                return MyUsers;
            }());
            exports_1("MyUsers", MyUsers);
        }
    }
});
//# sourceMappingURL=app.users.js.map