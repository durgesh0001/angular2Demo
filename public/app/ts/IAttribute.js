"use strict";
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
var NgTransclude = (function () {
    function NgTransclude(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTransclude.prototype, "ngTransclude", {
        get: function () {
            return this._ngTransclude;
        },
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgTransclude = __decorate([
        core_1.Directive({
            selector: '[ngTransclude]',
            properties: ['ngTransclude']
        }),
        __param(0, core_1.Inject(core_1.ViewContainerRef))
    ], NgTransclude);
    return NgTransclude;
}());
exports.NgTransclude = NgTransclude;
//# sourceMappingURL=IAttribute.js.map