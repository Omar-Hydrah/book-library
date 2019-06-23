import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Author } from "../model/";

@Injectable({
    providedIn: 'root'
})
export class AuthorService {
    constructor(private http : HttpClient) {}

    createAuthor(author : Author) : Observable<Author>{
    	return this.http.post<Author>("/api/author/create", author)
    		.pipe(catchError(this.handleError("createAuthor", author)));
    }

    searchByName(authorName : String) : Observable<Author[]>{
    	return this.http.get<Author[]>("/api/author/" + authorName)
    		.pipe(catchError(this.handleError("searchByName", authorName)));
    		
    }

    private handleError<T>(operation="operation", result ? : T){
    	return (error : any) : Observable<T> =>{
    		console.error(error);
    		return of(result as T);
    	};
    }
}