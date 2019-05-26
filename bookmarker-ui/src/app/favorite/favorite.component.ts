import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from "../model/favorite.model";
import { FavoriteService } from "../service/favorite.service";

@Component({
    selector: 'favorite-component',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

	@Input() favorite : Favorite;

    constructor(private favoriteService : FavoriteService) {}
    ngOnInit() {

    }

	    
}