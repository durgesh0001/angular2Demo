/**
 * Created by root on 26/12/16.
 */

import {Component} from 'angular2/core';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common'
import {MyUsers} from './app.users';
import {Httpservices} from '../services/httpServices';


import {dbService} from '../services/dbServices';
import {ROUTER_DIRECTIVES, Router, Location} from "angular2/router";



@Component({
    selector: 'add-users',
    templateUrl: 'app/ts/users/app.addUsers.html',
    directives: [MyUsers],
    providers:[dbService,Httpservices],
})
//form validation

export class AddUsers {
    private result:Array<any> = [];
    registrationForm: ControlGroup;
    username: Control;
    firstname: Control;
    email: Control;
    password: Control;
    submitAttempt: boolean = false;
    constructor(private builder: FormBuilder,private _dbservicee:dbService,private _httpservice:Httpservices, private router:Router, private location:Location) {
        this.username = new Control('', Validators.required)
        this.firstname = new Control('', Validators.required)
        this.email = new Control('', Validators.required)

        // If we want to use more than one synchronous validators, we need to compose them
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));

        this.registrationForm = builder.group({
            username: this.username,
            firstname: this.firstname,
            email: this.email,
            password: this.password
  });

    }

    registerUser(user,isvalid) {
        this.submitAttempt = true;

        if(isvalid == true)
        {
            this._httpservice.addUser(user)
                .subscribe(
                    data =>this.result=data.records,
                    error => console.log(JSON.stringify(error)),
                    () => console.log("finish")
                )
          alert("record saved");
          this.location.replaceState('/users');
          this.router.navigate(['Users']);

        }

    }
}

