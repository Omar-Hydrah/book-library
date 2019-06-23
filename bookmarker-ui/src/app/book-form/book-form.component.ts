import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { BookService } from "../service/book.service";
import { Book } from "../model/";

@Component({
    selector: 'book-form-component',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

	bookForm : FormGroup;
	title    : FormControl;
	description : FormControl;

    constructor(private bookService : BookService) {}
    ngOnInit() {
    	this.title = new FormControl("");
    	this.description = new FormControl("");

    	this.bookForm = new FormGroup({
    		title : this.title,
    		description : this.description
    	});
    }

	handleSubmit(){
		
	}    
}