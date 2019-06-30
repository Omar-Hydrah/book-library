import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { Book, Favorite } from "../model/index";
import { BookService, FavoriteService } from "../service/";

@Component({
    selector: 'book-page-component',
    templateUrl: './book-page.component.html',
    styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {
	private book : Book = {
		id: null, 
		title: "Title", 
		description: "Description",
		author: {id: null, name: "Author"}
	};

	private favoriteList : Favorite[];
	private bookFavoriteForm : FormGroup;
	private favoriteField    : FormControl;
	private selectedFavorite : Favorite;

    constructor(private bookService : BookService, 
    	private favoriteService : FavoriteService, 
    	private route : ActivatedRoute, private router : Router) {}

    ngOnInit() {
    	this.favoriteField    = new FormControl("");
    	this.bookFavoriteForm = new FormGroup({
    		favoriteField: this.favoriteField,
    	});

    	this.route.params.subscribe((param : any)=>{
    		this.bookService.getBook(param["id"]).subscribe((book : Book)=>{
    			this.book = book;
    		});
    	});

    	this.favoriteService.getAll().subscribe((favoriteList : Favorite[])=>{
    		this.favoriteList = favoriteList;
    	});
    }

    handleSubmit(){
    	var favoriteId = this.favoriteField.value;

    	this.favoriteService.addBookToFavorite(this.book, favoriteId)
    	.subscribe((favorite : Favorite)=>{
    		if(favorite != null){
    			console.log("Added book to favorite");
    			this.router.navigate([`/favorite/${favoriteId}`]);
    		}else{
    			console.log("Failed to add book");
    		}
    	})
    }
}