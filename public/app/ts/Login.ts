/**
 * Created by root on 28/12/16.
 */
/**
 * Created by root on 26/12/16.
 */

import {Component} from 'angular2/core';

import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common'


@Component({
    selector: 'add-users',
    templateUrl: 'app/ts/app.login.html',
})
//form validation

export class Login {
    registrationForm: ControlGroup;
    username: Control;
    firstname: Control;
    email: Control;
    password: Control;
    submitAttempt: boolean = false;
    constructor(private builder: FormBuilder) {
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

    Login(user,isvalid) {
        this.submitAttempt = true;

        if(isvalid == true)
        {
            console.log(isvalid)
            alert("hello");
        }

    }
}

