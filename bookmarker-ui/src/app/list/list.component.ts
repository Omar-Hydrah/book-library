import { Component, OnInit, Input } from '@angular/core';
import { Book } from "../model/book.model";


@Component({
    selector: 'list-component',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	@Input() books : Book[];

    constructor() {}
    ngOnInit() {}
}