"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by durgesh on 26/12/16.
 */
var core_1 = require('angular2/core');
var httpServices_1 = require('../services/httpServices');
var common_1 = require('angular2/common');
var pager_component_1 = require('../pager.component');
var pagination_component_1 = require('../pagination.component');
var searchPipes_1 = require('../customPipes/searchPipes');
var MyUsers = (function () {
    function MyUsers(_httpservice) {
        this._httpservice = _httpservice;
        this.result = [];
        this.testdata = "";
        this.searchbyName = "";
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
    MyUsers.prototype.getUsersRecords = function () {
        var _this = this;
        this._httpservice.getUser()
            .subscribe(function (data) { return _this.result = data.records; }, function (error) { return console.log(JSON.stringify(error)); }, function () { return console.log("finish"); });
        return 1;
    };
    MyUsers = __decorate([
        core_1.Component({
            selector: 'my-users',
            templateUrl: 'app/ts/users/app.users.html',
            pipes: [searchPipes_1.SearchPipe],
            directives: [pagination_component_1.Pagination, pager_component_1.Pager, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
            providers: [httpServices_1.Httpservices],
        })
    ], MyUsers);
    return MyUsers;
}());
exports.MyUsers = MyUsers;
//# sourceMappingURL=app.users.js.map