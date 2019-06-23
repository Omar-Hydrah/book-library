import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Favorite, Book } from "../model/";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    constructor(private http : HttpClient) {}

    getFavorite(id : number) : Observable<any>{
        return this.http.get<any>("/api/favorite/" + id)
            .pipe(catchError(this.handleError("getFavorite", id)));
    }

    searchByTitle(title : string) : Observable<any>{
        return this.http.get<any>("/api/favorite/search/" + title)
            .pipe(catchError(this.handleError("searchByTitle", title)));
    }

    getAll() : Observable<Favorite[]>{
        return this.http.get<Favorite[]>("/api/favorite/all")
            .pipe(catchError(this.handleError<Favorite[]>("getAll")));
    }

    createFavorite(favorite : Favorite) : Observable<Favorite>{
        return this.http.post<Favorite>("/api/favorite/create", favorite)
            .pipe(catchError(this.handleError<Favorite>("createFavorite", favorite)));
    }

    addBookToFavorite(favorite : Favorite, book : Book){
    	return this.http.post<Favorite>(
            `/api/favorite/${favorite.id}/add-book`, book)
    		.pipe(catchError(this.handleError("addBookToFavorite", {
    			book : book,
    			favorite : favorite
    		})));
    }

    private handleError<T>(operation="operation", result ? : T){
        return (error : any) : Observable<T>=>{
            console.error(error);
            return of(result as T);
        };
    }
}