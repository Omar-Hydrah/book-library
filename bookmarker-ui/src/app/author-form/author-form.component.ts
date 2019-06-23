import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthorService } from "../service/";


@Component({
    selector: 'author-form-component',
    templateUrl: './author-form.component.html',
    styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

	authorForm : FormGroup;
	name       : FormControl;

    constructor(private authorService : AuthorService) {}
    ngOnInit() {
    	this.name = new FormControl("");
    	this.authorForm = new FormGroup({
    		name : this.name,
    	});
    }

    handleSubmit(){

    }
}