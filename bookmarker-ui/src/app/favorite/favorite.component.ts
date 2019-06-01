import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Favorite } from "../model/favorite.model";
import { FavoriteService } from "../service/favorite.service";

@Component({
    selector: 'favorite-component',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

	@Input() favorite : Favorite;
	@Output() listSelected = new EventEmitter<Favorite>();

    constructor(private favoriteService : FavoriteService) {}
    ngOnInit() {

    }
    
	updateBookList(){
		this.listSelected.emit(this.favorite);
	}    
}