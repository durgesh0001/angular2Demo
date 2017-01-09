"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Created by root on 26/12/16.
 */
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var pagination_component_1 = require('./pagination.component');
var pagerConfig = {
    itemsPerPage: 10,
    previousText: '« Previous',
    nextText: 'Next »',
    align: true
};
var PAGER_TEMPLATE = "\n    <ul class=\"pager\">\n      <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page - 1, $event)\">{{getText('previous')}}</a>\n      </li>\n      <li [class.disabled]=\"noNext()\" [class.next]=\"align\" [ngClass]=\"{'pull-right': align}\">\n        <a href (click)=\"selectPage(page + 1, $event)\">{{getText('next')}}</a>\n      </li>\n  </ul>\n";
var Pager = (function (_super) {
    __extends(Pager, _super);
    function Pager(cd, renderer, elementRef) {
        _super.call(this, cd, renderer, elementRef);
        this.config = pagerConfig;
    }
    Pager = __decorate([
        core_1.Component({
            selector: 'pager[ngModel]',
            template: PAGER_TEMPLATE,
            directives: [common_1.NgClass],
            inputs: [
                'align',
                'totalItems', 'itemsPerPage',
                'previousText', 'nextText',
            ]
        }),
        __param(0, core_1.Self())
    ], Pager);
    return Pager;
}(pagination_component_1.Pagination));
exports.Pager = Pager;
//# sourceMappingURL=pager.component.js.map