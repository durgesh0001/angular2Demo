/**
 * Created by root on 28/12/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, _a) {
        var term = _a[0];
        return value.filter(function (item) { return item.Name.startsWith(term); });
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: "search",
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=searchPipes.js.map