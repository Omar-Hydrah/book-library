import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";
import { Book }        from "../model/book.model";
import { Favorite }    from "../model/favorite.model";

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	books : Book[];

    constructor(private bookService : BookService) {}
    ngOnInit() {
    	this.books = this.bookService.getBooksList();
    }

    onListSelected(favorite : Favorite){
    	this.books = favorite.books;
    }
}