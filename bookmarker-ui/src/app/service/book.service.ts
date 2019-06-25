import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of} from "rxjs";
import { catchError } from "rxjs/operators";
import { Book } from "../model/book.model";


@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor(private http : HttpClient) {
    	
    }

    getBook(id : number) : Observable<Book>{
    	return this.http.get<Book>("/api/book/find/" + id)
    		.pipe(catchError(this.handleError<Book>("getBook")));
    }
    
    getAll() : Observable<Book[]>{
    	return this.http.get<Book[]>("/api/book/")
    		.pipe(catchError(this.handleError<Book[]>("getAll", [])));
    }


    createBook(book : Book) : Observable<Book> {
    	return this.http.post<Book>("/api/book/create", book)
    		.pipe(catchError(this.handleError("addBook", book)));
    }

    private handleError<T>(operation="operation", result ? : T){
        return (error : any) : Observable<T> =>{
            console.error(error);
            return of(result as T);
        }
    }

}