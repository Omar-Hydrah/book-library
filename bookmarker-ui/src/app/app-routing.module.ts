import { NgModule } from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';
import { MainComponent }         from "./main/main.component";
import { BookPageComponent }     from "./book-page/book-page.component";
import { BookListComponent }     from "./book-list/book-list.component";
import { BookFormComponent }     from "./book-form/book-form.component";
import { FavoriteFormComponent }     from "./favorite-form/favorite-form.component";
import { AuthorFormComponent }     from "./author-form/author-form.component";

const routes: Routes = [
	{path: ":id",             component: BookPageComponent},
	{path: "favorite/:id",    component: BookListComponent},
	{path: "book/create",     component: BookFormComponent},
	{path: "favorite/create", component: FavoriteFormComponent},
	{path: "author/create",   component: AuthorFormComponent},
	{path: "",                component: MainComponent, pathMatch: "full"},

];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
