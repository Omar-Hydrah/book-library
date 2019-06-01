import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Favorite } from "../model/favorite.model";
import { FavoriteService } from "../service/favorite.service";

@Component({
    selector: 'favorite-list-component',
    templateUrl: './favorite-list.component.html',
    styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
	private favoriteList : Favorite[];
    private selectedListId : number = 1;

    @Output() listSelected = new EventEmitter<Favorite>();

    constructor(private favoriteService : FavoriteService) {}
    ngOnInit() {
    	this.favoriteList = this.favoriteService.getFavoriteList();
    }

    onSelectList(favorite : Favorite){
    	this.listSelected.emit(favorite);
        this.selectedListId = favorite.id;
    }
}