import {Component,Injectable} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import { Headers, Http } from 'angular2/http';
import {MyUsers} from './users/app.users';
import {AddUsers} from './users/app.addUsers';
import {Login} from './Login';






//Routing => ROUTER_DIRECTIVES,RouteConfig and <base href="/"> in index.html
@Component({
    selector: 'my-app',
    directives:[MyUsers,AddUsers,Login,ROUTER_DIRECTIVES],
    templateUrl: 'app/ts/app.component.html',
})
//Routing

@RouteConfig([
    {path: '/users', name: 'Users', component:MyUsers},
    {path: '/add', name: 'Add', component: AddUsers},
    {path: '/login', name: 'Login', component: Login,useAsDefault:true}

])

export class AppComponent {

}