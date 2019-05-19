import { Injectable } from '@angular/core';
import { Book } from "../model/book.model";

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor() {
    	
    }

    getBooksList() : Book[]{
    	return [{
            id: 1, 
            title: "Happiness", 
            description: "Non existent",
            author: {
                id: 1,
                name: "Mark Anthony"
            },
        },
        {
                 
            id: 2, 
            title: "Sadness", 
            description: "Non existent",
            author: {
                id: 2,
                name: "Octavian"
            }, 
        }];
    }
}