import { Component, OnInit } from '@angular/core';
import { BookService } from "../service/book.service";
import { Book, Favorite } from "../model/index";

@Component({
    selector: 'main-component',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	books : Book[];
    private bookSelected : boolean = false;
    private selectedBook : Book;

    constructor(private bookService : BookService) {}
    ngOnInit() {
    	this.books = this.bookService.getBooksList();
    }

    onListSelected(favorite : Favorite){
    	this.books = favorite.books;
        this.selectedBook = null;
        this.bookSelected = false;
    }

    onBookSelected(book : Book){
        this.bookSelected = true;
        this.selectedBook = book;
        console.log(this.bookSelected); 
        console.log(this.selectedBook);
    }
}