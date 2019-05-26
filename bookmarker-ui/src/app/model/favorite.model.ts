import { Book } from "./book.model";

export interface Favorite{
	id: number;
	title: string;
	books: Book[];
}