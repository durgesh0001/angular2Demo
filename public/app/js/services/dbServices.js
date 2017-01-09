/**
 * Created by root on 28/12/16.
 */
System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var dbService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            dbService = (function () {
                function dbService() {
                    this.db = new PouchDB("angulardemo");
                }
                dbService.prototype.list = function () {
                    var promise = this.db.allDocs({
                        include_docs: true
                    });
                    return promise;
                };
                dbService.prototype.save = function (data) {
                    console.log(data);
                    return this.db.post(data);
                };
                dbService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], dbService);
                return dbService;
            }());
            exports_1("dbService", dbService);
        }
    }
});
//# sourceMappingURL=dbServices.js.map