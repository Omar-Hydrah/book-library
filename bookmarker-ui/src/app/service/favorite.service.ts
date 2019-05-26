import { Injectable } from '@angular/core';
import { Favorite } from "../model/favorite.model";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    constructor() {}

    getFavorite(){
    	return {
    		id: 1,
    		title: "Science books",
    		books: [
    			{
	    			id: 1,
	    			title: "Physics",
	    			description: "Intro to physics",
	    			author : {
	    				id: 1,
	    				name: "John Alex"
	    			}
    			},
    			{
	    			id: 2,
	    			title: "Chemistry",
	    			description: "Intro to Chemistry",
	    			author : {
	    				id: 1,
	    				name: "John Alex"
	    			}
    			},
    		]
    	};
    }

    getFavoriteList(){
    	return [{
    		id: 1,
    		title: "Science books",
    		books: [
    			{
	    			id: 1,
	    			title: "Physics",
	    			description: "Intro to physics",
	    			author : {
	    				id: 1,
	    				name: "John Alex"
	    			}
    			},
    			{
	    			id: 2,
	    			title: "Chemistry",
	    			description: "Intro to Chemistry",
	    			author : {
	    				id: 1,
	    				name: "John Alex"
	    			}
    			},
    		]
    	}];
    }
}