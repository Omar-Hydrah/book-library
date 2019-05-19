import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../model/book.model";

@Component({
    selector: 'book-component',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
	@Input() book : Book;

    constructor() {}
    ngOnInit() {

    }
}