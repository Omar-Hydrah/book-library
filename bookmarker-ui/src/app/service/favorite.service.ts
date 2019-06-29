import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Favorite, Book } from "../model/";

@Injectable({
    providedIn: 'root'
})
export class FavoriteService {
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        }),
    }
    constructor(private http : HttpClient) {}

    getFavorite(id : number) : Observable<Favorite>{
        return this.http.get<any>("/api/favorite/find/" + id)
            .pipe(catchError(this.handleError<Favorite>("getFavorite")));
    }

    searchByTitle(title : string) : Observable<Favorite>{
        return this.http.get<any>("/api/favorite/search/" + title)
            .pipe(catchError(this.handleError<Favorite>("searchByTitle")));
    }

    getAll() : Observable<Favorite[]>{
        return this.http.get<Favorite[]>("/api/favorite/all")
            .pipe(catchError(this.handleError<Favorite[]>("getAll")));
    }

    createFavorite(title : string) : Observable<Favorite>{
        return this.http.post<Favorite>("/api/favorite/create", title, 
            this.httpOptions)
            .pipe(catchError(this.handleError<Favorite>("createFavorite")));
    }

    addBookToFavorite(favorite : Favorite, book : Book) : Observable<Favorite>{
    	return this.http.post<Favorite>(
            `/api/favorite/${favorite.id}/add-book`, book, this.httpOptions)
    		.pipe(catchError(
                this.handleError<Favorite>("addBookToFavorite", favorite)));
    }

    private handleError<T>(operation="operation", result ? : T){
        return (error : any) : Observable<T>=>{
            console.error(error);
            return of(result as T);
        };
    }
}