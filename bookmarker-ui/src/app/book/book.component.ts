import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../model/book.model";

@Component({
    selector: 'book-component',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input() book : Book;
	@Output() bookSelected = new EventEmitter<Book>();

    constructor() {}
    ngOnInit() {

    }

    onBookSelected(){
    	this.bookSelected.emit(this.book);
    }
}