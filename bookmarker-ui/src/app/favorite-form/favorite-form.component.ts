import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { FavoriteService } from "../service/";
import { Favorite } from "../model/";

@Component({
    selector: 'favorite-form-component',
    templateUrl: './favorite-form.component.html',
    styleUrls: ['./favorite-form.component.css']
})
export class FavoriteFormComponent implements OnInit {

	favoriteForm : FormGroup;
	titleField   : FormControl;

    constructor() {}
    ngOnInit() {
    	this.titleField   = new FormControl("");
    	this.favoriteForm = new FormGroup({
    		titleField : this.titleField
    	});
    }

    handleSubmit(){

    }
}