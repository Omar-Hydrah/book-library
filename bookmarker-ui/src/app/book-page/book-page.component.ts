import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../model/index";

@Component({
    selector: 'book-page-component',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
	@Input() book : Book;

    constructor() {}
    ngOnInit() {}
}