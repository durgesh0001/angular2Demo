"use strict";
var browser_1 = require('angular2/platform/browser');
var app_component_1 = require('./app.component');
//webservices
var http_1 = require('angular2/http');
//Routing
var router_1 = require('angular2/router');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS
]);
//# sourceMappingURL=main.js.map