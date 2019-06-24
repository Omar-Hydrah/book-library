import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { BookService } from "./service/book.service";
import { FavoriteService } from "./service/favorite.service";
import { AuthorService } from "./service/author.service";
import { BookFormComponent } from './book-form/book-form.component';
import { FavoriteFormComponent } from './favorite-form/favorite-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AuthorFormComponent } from './author-form/author-form.component';

import * as $ from "jquery";

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        BookListComponent,
        BookComponent,
        BookPageComponent,
        FavoriteListComponent,
        FavoriteComponent,
        BookFormComponent,
        FavoriteFormComponent,
        NavigationComponent,
        AuthorFormComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        BookService,
        FavoriteService,
        AuthorService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}