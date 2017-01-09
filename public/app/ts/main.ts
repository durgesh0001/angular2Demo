import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
//webservices
import { HTTP_PROVIDERS } from 'angular2/http';
//Routing
import {ROUTER_PROVIDERS} from 'angular2/router';


bootstrap(AppComponent, [
    ROUTER_PROVIDERS,HTTP_PROVIDERS
]);


