import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from "./main/main.component";
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';
import { BookPageComponent } from './book-page/book-page.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteComponent } from './favorite/favorite.component';

import { BookService } from "./service/book.service";
import { FavoriteService } from "./service/favorite.service";
import { BookFormComponent } from './book-form/book-form.component';
import { FavoriteFormComponent } from './favorite-form/favorite-form.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        ListComponent,
        BookComponent,
        BookPageComponent,
        FavoriteListComponent,
        FavoriteComponent,
        BookFormComponent,
        FavoriteFormComponent,
        NavigationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        BookService,
        FavoriteService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}