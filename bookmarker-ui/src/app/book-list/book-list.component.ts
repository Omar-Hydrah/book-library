import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from "../model/book.model";
import { BookService } from "../service/book.service";


@Component({
    selector: 'book-list-component',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
	// @Input() books : Book[];
	// @Output() bookSelected = new EventEmitter<Book>();
    books : Book[];

    constructor(private bookService : BookService) {}
    ngOnInit() {
        console.log();
    }

      
}