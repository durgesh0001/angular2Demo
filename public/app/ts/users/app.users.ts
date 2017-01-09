/**
 * Created by durgesh on 26/12/16.
 */
import {Component} from 'angular2/core';
import {Httpservices} from '../services/httpServices';
import {CORE_DIRECTIVES, FORM_DIRECTIVES,FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Pager} from '../pager.component';
import {NgTableComponent, NgTableFilteringDirective, NgTablePagingDirective, NgTableSortingDirective} from 'ng2-table/ng2-table';
import {Pagination} from '../pagination.component';
import {SearchPipe} from '../customPipes/searchPipes';
import {dbService} from '../services/dbServices';

@Component({
    selector: 'my-users',
    templateUrl: 'app/ts/users/app.users.html',
    pipes:[SearchPipe],
    directives: [Pagination, Pager, FORM_DIRECTIVES, CORE_DIRECTIVES],
    providers:[Httpservices,dbService],
})

export class MyUsers {
    private result:Array<any> = [];
    testdata = "";
    searchbyName   = "";
    id ="";
    postdata:string;
    private usersData:Array<any> = [];
    //print to the user the selected page
    currentSelectedPage:string="";
    //print to the user the total iterms per page
    currentItemsPerPage:string="";
    //the maximum buttons to show
    private maxSize:number = 3;
    //the number of pages you want to print
    private totalResults:number = 60;
    //the current page
    private currentPage:number = 2;

    //edit module
    registrationForm: ControlGroup;
    username: Control;
    firstname: Control;
    email: Control;
    password:Control;
    submitAttempt: boolean = false;
    usernamemodelvalue= "";
    firstnamemodelvalue= "";
    emailmodelvalue = "";
    userpasswordvalue = "";
    constructor(private _httpservice:Httpservices,private builder: FormBuilder,private _dbservicee:dbService)
    {    //edit module start
        this.username = new Control('', Validators.required)
        this.firstname = new Control('', Validators.required)
        this.email = new Control('', Validators.required)
        this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));

        // If we want to use more than one synchronous validators, we need to compose them

        this.registrationForm = builder.group({
            username: this.username,
            firstname: this.firstname,
            email: this.email,
            password:this.password,
        });
        //edit module end
    this.getUsersRecords();
        console.log("return");
        console.log(this.result);
    this.usersData.push(
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg',text:'BMW 1'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg',text:'BMW 2'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg',text:'BMW 3'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg',text:'BMW 4'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg',text:'BMW 5'},
            {image:'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg',text:'BMW 6'}
        );

    }
    private setCurrentPage(pageNo:number):void {
        this.currentPage = pageNo;
    };

    private currentPageChanged(event:any):void {
        this.currentSelectedPage = ' is : ' + event.page;
        this.currentItemsPerPage = ' is : ' +  event.itemsPerPage;
    };
    editUser(user,isvalid) {
        this.submitAttempt = true;

        if(isvalid == true)
        {
            user._id =this.id;
            this._httpservice.updateUser(user)
                .subscribe(
                    data =>this.result=data.records,
                    error => console.log(JSON.stringify(error)),
                    () => console.log("finish")
                )
            alert("record saved");

        }
    }
    openmodel(data)
    {
        //binding data to model value
        this.usernamemodelvalue=  data.username;;
        this.firstnamemodelvalue= data.firstname;
        this.emailmodelvalue =    data.email;
        this.userpasswordvalue =   data.password;
        this.id    = data._id;
    }

    getUsersRecords()
    {
        // this._dbservicee.list().then(allDoc => {
        //     this.result=allDoc.rows;
        //     console.log(this.result);
        //     return this.result;
        // });

       this. _httpservice.getUser()
            .subscribe(
                data =>this.result=data,
                error => console.log(JSON.stringify(error)),
                () => console.log("finish")
            )
        return 1;
    }


}
