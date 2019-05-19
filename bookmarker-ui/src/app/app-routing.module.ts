import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from "./list/list.component";
import { MainComponent } from "./main/main.component";
import { BookPageComponent } from "./book-page/book-page.component";

const routes: Routes = [
	{path: ":id", component: BookPageComponent},
	{path: "", component: MainComponent, pathMatch: "full"},
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
