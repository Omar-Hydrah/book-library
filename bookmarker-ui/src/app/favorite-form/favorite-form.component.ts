import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
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
    message : string;

    constructor(private favoriteService : FavoriteService) {}
    ngOnInit() {
    	this.titleField   = new FormControl("", [
            Validators.required,
            Validators.minLength(4),
        ]);
    	this.favoriteForm = new FormGroup({
    		titleField : this.titleField
    	});
        this.message = null;
    }

    handleSubmit(){
        if(this.titleField.errors){
            return;
        }

        this.favoriteService.createFavorite(this.titleField.value)
        .subscribe((favorite : Favorite)=>{
            if(favorite == null){
                this.message = "Failed to create favorite";
            }else{
                this.message = "Favorite created";
            }
        });
    }
}