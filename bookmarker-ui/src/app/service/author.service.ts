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

    getAll() : Observable<Author[]>{
        return this.http.get<Author[]>("/api/author/all")
            .pipe(catchError(this.handleError<any>("getAll")));
    }

    getAuthor(id : number) : Observable<Author>{
        return this.http.get<Author>("/api/author/find/" + id)
            .pipe(catchError(this.handleError<any>("getAuthor", id)));
    }

    createAuthor(author : Author) : Observable<Author>{
    	return this.http.post<Author>("/api/author/create/", author)
    		.pipe(catchError(this.handleError("createAuthor", author)));
    }

    searchByName(name : string) : Observable<Author[]>{
    	return this.http.get<Author[]>("/api/author/" + name)
    		.pipe(catchError(this.handleError<Author[]>("searchByName")));
    		
    }

    private handleError<T>(operation="operation", result ? : T){
        return (error : any) : Observable<T> =>{
            console.error(error);
            return of(result as T);
        }
    }
}