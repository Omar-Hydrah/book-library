import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { BookComponent } from './book/book.component';
import { BookPageComponent } from './book-page/book-page.component';


@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        BookComponent,
        BookPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}