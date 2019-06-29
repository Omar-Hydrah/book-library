import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { AuthorService } from "../service/";
import { Author } from "../model/";

@Component({
    selector: 'author-form-component',
    templateUrl: './author-form.component.html',
    styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

	authorForm : FormGroup;
	nameField  : FormControl;
    message    : string;

    constructor(private authorService : AuthorService) {}
    ngOnInit() {
    	this.nameField = new FormControl("");
    	this.authorForm = new FormGroup({
    		nameField : this.nameField,
    	});

        this.message = null;
    }

    handleSubmit(){
        var name = this.nameField.value;
        this.authorService.createAuthor(name)
        .subscribe((author : Author)=>{
            if(author != null){
                this.message = "Author created";
            }else{
                this.message = "Failed to create new author " + name;
            }
        });
    }
}