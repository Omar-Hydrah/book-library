import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../model/book.model";


@Component({
    selector: 'list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() books : Book[];
	@Output() bookSelected = new EventEmitter<Book>();

    constructor() {}
    ngOnInit() {}

    onBookSelected(book : Book){
    	this.bookSelected.emit(book);
    }
}