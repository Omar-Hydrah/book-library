import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Book, Favorite } from "../model/";
import { BookService, FavoriteService } from "../service/";


@Component({
    selector: 'book-list-component',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
    favoriteId : number;
    favorite   : Favorite;
    books      : Book[];

    constructor(private bookService : BookService, 
        private favoriteService : FavoriteService, 
        private route : ActivatedRoute) {}

    ngOnInit() {
        this.route.params.subscribe((param : any)=>{

            if(param["id"] == null || param["id"] == 0){
                this.favoriteService.getAll()
                .subscribe((favoriteList : Favorite[])=>{
                    this.favorite = favoriteList[0]; 
                    this.books    = this.favorite.books;   
                });

            }else{
                this.favoriteId = param["id"];
                
                this.favoriteService.getFavorite(this.favoriteId)
                .subscribe((favorite : Favorite)=>{
                    this.favorite = favorite;
                    this.books    = favorite.books;    
                });
            }


        });
    }

      
}