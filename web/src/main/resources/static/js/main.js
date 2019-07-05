(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _favorite_form_favorite_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./favorite-form/favorite-form.component */ "./src/app/favorite-form/favorite-form.component.ts");
/* harmony import */ var _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./author-form/author-form.component */ "./src/app/author-form/author-form.component.ts");









var routes = [
    { path: "book/create", component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_6__["BookFormComponent"] },
    { path: "book/:id", component: _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_4__["BookPageComponent"] },
    { path: "favorite/create", component: _favorite_form_favorite_form_component__WEBPACK_IMPORTED_MODULE_7__["FavoriteFormComponent"] },
    { path: "favorite/:id", component: _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_5__["BookListComponent"] },
    { path: "author/create", component: _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_8__["AuthorFormComponent"] },
    { path: "", component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], pathMatch: "full" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col s12 m4\">\r\n\t\t\t<navigation-component></navigation-component>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"col s12 m8\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./book-list/book-list.component */ "./src/app/book-list/book-list.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-page/book-page.component */ "./src/app/book-page/book-page.component.ts");
/* harmony import */ var _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./favorite-list/favorite-list.component */ "./src/app/favorite-list/favorite-list.component.ts");
/* harmony import */ var _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./favorite/favorite.component */ "./src/app/favorite/favorite.component.ts");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./service/book.service */ "./src/app/service/book.service.ts");
/* harmony import */ var _service_favorite_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./service/favorite.service */ "./src/app/service/favorite.service.ts");
/* harmony import */ var _service_author_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/author.service */ "./src/app/service/author.service.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _favorite_form_favorite_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./favorite-form/favorite-form.component */ "./src/app/favorite-form/favorite-form.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./author-form/author-form.component */ "./src/app/author-form/author-form.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"],
                _book_list_book_list_component__WEBPACK_IMPORTED_MODULE_8__["BookListComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"],
                _book_page_book_page_component__WEBPACK_IMPORTED_MODULE_10__["BookPageComponent"],
                _favorite_list_favorite_list_component__WEBPACK_IMPORTED_MODULE_11__["FavoriteListComponent"],
                _favorite_favorite_component__WEBPACK_IMPORTED_MODULE_12__["FavoriteComponent"],
                _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_16__["BookFormComponent"],
                _favorite_form_favorite_form_component__WEBPACK_IMPORTED_MODULE_17__["FavoriteFormComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_18__["NavigationComponent"],
                _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_19__["AuthorFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _service_book_service__WEBPACK_IMPORTED_MODULE_13__["BookService"],
                _service_favorite_service__WEBPACK_IMPORTED_MODULE_14__["FavoriteService"],
                _service_author_service__WEBPACK_IMPORTED_MODULE_15__["AuthorService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/author-form/author-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-form/author-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tcolor:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yLWZvcm0vYXV0aG9yLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFNBQVM7QUFDViIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci1mb3JtL2F1dGhvci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3J7XHJcblx0Y29sb3I6cmVkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/author-form/author-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/author-form/author-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form [formGroup]=\"authorForm\" (ngSubmit)=\"handleSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12 m12\">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"name\" \n\t\t\t\t\tformControlName=\"nameField\"\n\t\t\t\t\t/>\n\t\t\t\t<label for=\"name\">Author Name</label>\n\t\t\t</div>\n\t\t\t<div class=\"error\" *ngIf=\"nameField.invalid && \n\t\t\t\t(nameField.touched || nameField.dirty)\">\n\t\t\t\t<div *ngIf=\"nameField.errors.required\">\n\t\t\t\t\t<p>Author name can not be left blank</p>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"nameField.errors.minlength\">\n\t\t\t\t\t<p>Author name must be more than 4 characters</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"btn cyan\">Save Author</button>\n\t\t</div>\n\t</form>\n\n\t<div *ngIf=\"message\">\n\t\t<p>{{ message }}</p>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/author-form/author-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-form/author-form.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorFormComponent", function() { return AuthorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ */ "./src/app/service/index.ts");




var AuthorFormComponent = /** @class */ (function () {
    function AuthorFormComponent(authorService) {
        this.authorService = authorService;
    }
    AuthorFormComponent.prototype.ngOnInit = function () {
        this.nameField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.authorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nameField: this.nameField,
        });
        this.message = null;
    };
    AuthorFormComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.nameField.errors) {
            return;
        }
        var name = this.nameField.value;
        this.authorService.createAuthor(name)
            .subscribe(function (author) {
            if (author != null) {
                _this.message = "Author created";
            }
            else {
                _this.message = "Failed to create new author " + name;
            }
        });
    };
    AuthorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'author-form-component',
            template: __webpack_require__(/*! ./author-form.component.html */ "./src/app/author-form/author-form.component.html"),
            styles: [__webpack_require__(/*! ./author-form.component.css */ "./src/app/author-form/author-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service___WEBPACK_IMPORTED_MODULE_3__["AuthorService"]])
    ], AuthorFormComponent);
    return AuthorFormComponent;
}());



/***/ }),

/***/ "./src/app/book-form/book-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-form/book-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tcolor:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1mb3JtL2Jvb2stZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsU0FBUztBQUNWIiwiZmlsZSI6InNyYy9hcHAvYm9vay1mb3JtL2Jvb2stZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9ye1xyXG5cdGNvbG9yOnJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/book-form/book-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-form/book-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form [formGroup]=\"bookForm\" (ngSubmit)=\"handleSubmit()\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"title\" \n\t\t\t\t\tformControlName=\"titleField\"\n\t\t\t\t\t/>\n\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t\t<div class =\"error\" *ngIf=\"titleField.invalid && \n\t\t\t\t\t(titleField.dirty || titleField.touched)\">\n\t\t\t\t\t<div *ngIf=\"titleField.errors.required\">\n\t\t\t\t\t\t<p>Title is required</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"titleField.errors.minlength\" >\n\t\t\t\t\t\t<p>Title must be more than 4 characters</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"input-field col m12 s12\">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"description\" \n\t\t\t\t\tformControlName=\"descriptionField\"\n\t\t\t\t\t/>\n\t\t\t\t<label for=\"description\">Description</label>\n\n\t\t\t\t<div class=\"error\" *ngIf=\"descriptionField.invalid && \n\t\t\t\t\t(descriptionField.dirty || descriptionField.touched)\" >\n\t\t\t\t\t<div *ngIf=\"descriptionField.errors.required\">\n\t\t\t\t\t\t<p>Description is required</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"descriptionField.errors.minlength\">\n\t\t\t\t\t\t<p>Description must be more than 10 characters</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"input-field col m12 s12\" >\n\t\t\t\t<select \n\t\t\t\t\tid=\"authorField\" \n\t\t\t\t\tname=\"author\" \n\t\t\t\t\tformControlName=\"authorField\"\n\t\t\t\t\tclass=\"browser-default\"\n\t\t\t\t\t>\n\t\t\t\t\t<option [ngValue]=\"null\" disabled>Select the Author</option>\n\t\t\t\t\t<option \n\t\t\t\t\t\t*ngFor=\"let author of authors\"\n\t\t\t\t\t\t[value]=\"author.id\" >{{author.name}}</option>\n\t\t\t\t</select>\n\n\t\t\t\t<div class=\"error\" *ngIf=\"authorField.invalid && \n\t\t\t\t\t(authorField.touched || authorField.dirty)\">\n\t\t\t\t\t<div *ngIf=\"authorField.errors.required\">\n\t\t\t\t\t\t<p>Author must be selected</p>\n\t\t\t\t\t</div>\t\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"btn cyan\">Save Book</button>\n\t\t</div>\n\t</form>\n</div>"

/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ */ "./src/app/service/index.ts");




// declare var $ : any; 
var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(bookService, authorService) {
        this.bookService = bookService;
        this.authorService = authorService;
        this.book = {
            id: null,
            title: "",
            description: "",
            author: { id: null, name: "" }
        };
    }
    BookFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authorService.getAll().subscribe(function (authors) {
            _this.authors = authors;
        });
        this.titleField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.descriptionField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
        ]);
        this.authorField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
        this.bookForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            titleField: this.titleField,
            authorField: this.authorField,
            descriptionField: this.descriptionField,
        });
    };
    BookFormComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.titleField.errors || this.descriptionField.errors
            || this.authorField.errors) {
            return;
        }
        this.book.title = this.titleField.value;
        this.book.description = this.descriptionField.value;
        this.book.author = this.authors.filter(function (author) {
            return author.id == _this.authorField.value;
        })[0];
        this.bookService.createBook(this.book).subscribe(function (book) {
            if (book != null) {
                console.log("Book saved");
            }
            else {
                console.log("Failed to save book");
            }
        });
    };
    BookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-form-component',
            template: __webpack_require__(/*! ./book-form.component.html */ "./src/app/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.css */ "./src/app/book-form/book-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service___WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _service___WEBPACK_IMPORTED_MODULE_3__["AuthorService"]])
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/book-list/book-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-list/book-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stbGlzdC9ib29rLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-list/book-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-list/book-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div *ngFor=\"let book of books\">\r\n\t\t<book-component [book]=\"book\" ></book-component>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/book-list/book-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-list/book-list.component.ts ***!
  \**************************************************/
/*! exports provided: BookListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookListComponent", function() { return BookListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ */ "./src/app/service/index.ts");




var BookListComponent = /** @class */ (function () {
    function BookListComponent(bookService, favoriteService, route) {
        this.bookService = bookService;
        this.favoriteService = favoriteService;
        this.route = route;
    }
    BookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (param) {
            if (param["id"] == null || param["id"] == 0) {
                _this.bookService.getAll()
                    .subscribe(function (bookList) {
                    _this.books = bookList;
                });
            }
            else {
                _this.favoriteId = param["id"];
                _this.favoriteService.getFavorite(_this.favoriteId)
                    .subscribe(function (favorite) {
                    _this.favorite = favorite;
                    _this.books = favorite.books;
                });
            }
        });
    };
    BookListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-list-component',
            template: __webpack_require__(/*! ./book-list.component.html */ "./src/app/book-list/book-list.component.html"),
            styles: [__webpack_require__(/*! ./book-list.component.css */ "./src/app/book-list/book-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service___WEBPACK_IMPORTED_MODULE_3__["BookService"],
            _service___WEBPACK_IMPORTED_MODULE_3__["FavoriteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "./src/app/book-page/book-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-page/book-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".book-cover{\r\n\tmax-width:600px;\r\n\tmax-height:400px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1wYWdlL2Jvb2stcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stcGFnZS9ib29rLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29rLWNvdmVye1xyXG5cdG1heC13aWR0aDo2MDBweDtcclxuXHRtYXgtaGVpZ2h0OjQwMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/book-page/book-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-page/book-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<h1>{{book.title}}</h1>\n\t<img src=\"/assets/books.png\" alt=\"book cover\" class=\"book-cover\" />\n\t<p>By {{book.author.name}}</p>\n\t<p>{{book.description}}</p>\n\n\t<hr />\n\t<p>Add this book to a favorite:</p>\n\t<div class=\"row\">\n\t\t<form [formGroup]=\"bookFavoriteForm\" (ngSubmit)=\"handleSubmit()\" >\n\t\t\t<div class=\"input-field s12 m12\">\n\t\t\t\t<select\n\t\t\t\t\tid=\"favoriteList\"\n\t\t\t\t\tformControlName=\"favoriteField\"\n\t\t\t\t\tclass=\"browser-default\"\n\t\t\t\t\t>\n\t\t\t\t\t<option [ngValue]=\"null\" selected disabled>\n\t\t\t\t\t\tSelect the favorite\n\t\t\t\t\t</option>\n\t\t\t\t\t<option \n\t\t\t\t\t\t*ngFor=\"let favorite of favoriteList\"\n\t\t\t\t\t\t[value]=\"favorite.id\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t{{favorite.title}}\n\t\t\t\t\t</option>\n\t\t\t\t</select>\n\t\t\t</div>\n\t\t\t<button type=\"submit\" class=\"btn cyan\">Add to favorite</button>\n\t\t</form>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/book-page/book-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-page/book-page.component.ts ***!
  \**************************************************/
/*! exports provided: BookPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookPageComponent", function() { return BookPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/ */ "./src/app/service/index.ts");





var BookPageComponent = /** @class */ (function () {
    function BookPageComponent(bookService, favoriteService, route, router) {
        this.bookService = bookService;
        this.favoriteService = favoriteService;
        this.route = route;
        this.router = router;
        this.book = {
            id: null,
            title: "Title",
            description: "Description",
            author: { id: null, name: "Author" }
        };
    }
    BookPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteField = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("");
        this.bookFavoriteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            favoriteField: this.favoriteField,
        });
        this.route.params.subscribe(function (param) {
            _this.bookService.getBook(param["id"]).subscribe(function (book) {
                _this.book = book;
            });
        });
        this.favoriteService.getAll().subscribe(function (favoriteList) {
            _this.favoriteList = favoriteList;
        });
    };
    BookPageComponent.prototype.handleSubmit = function () {
        var _this = this;
        var favoriteId = this.favoriteField.value;
        this.favoriteService.addBookToFavorite(this.book, favoriteId)
            .subscribe(function (favorite) {
            if (favorite != null) {
                console.log("Added book to favorite");
                _this.router.navigate(["/favorite/" + favoriteId]);
            }
            else {
                console.log("Failed to add book");
            }
        });
    };
    BookPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-page-component',
            template: __webpack_require__(/*! ./book-page.component.html */ "./src/app/book-page/book-page.component.html"),
            styles: [__webpack_require__(/*! ./book-page.component.css */ "./src/app/book-page/book-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service___WEBPACK_IMPORTED_MODULE_4__["BookService"],
            _service___WEBPACK_IMPORTED_MODULE_4__["FavoriteService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookPageComponent);
    return BookPageComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m6\">\n\t<div class=\"card\">\n\t\t<div class=\"card-image\">\n\t\t\t<!-- <img src=\"https://source.unsplash.com/888x500/?water\" /> -->\n\t\t<!-- <img src=\"https://via.placeholder.com/300x150/888888/ffffff/?text=cover\"> -->\n\t\t\t<img src=\"/assets/books.png\" alt=\"book cover\"/>\n\t\t\t<h1 class=\"card-title\" style=\"color:yellow;\n\ttext-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\">{{book.title}} - by {{book.author.name}}</h1>\n\t\t</div>\n\t\t<div class=\"card-content\">\n\t\t\t<p>{{book.description}}</p>\n\t\t</div>\n\t\t<div class=\"card-action\">\n\t\t\t<a [routerLink]=\"['/book', book.id]\">See book</a>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BookComponent.prototype, "book", void 0);
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'book-component',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/favorite-form/favorite-form.component.css":
/*!***********************************************************!*\
  !*** ./src/app/favorite-form/favorite-form.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error{\r\n\tcolor:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUtZm9ybS9mYXZvcml0ZS1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxTQUFTO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS1mb3JtL2Zhdm9yaXRlLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvcntcclxuXHRjb2xvcjpyZWQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/favorite-form/favorite-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/favorite-form/favorite-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<form [formGroup]=\"favoriteForm\" (ngSubmit)=\"handleSubmit()\" >\n\t\t<div class=\"row\">\n\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t<input \n\t\t\t\t\ttype=\"text\" \n\t\t\t\t\tname=\"title\" \n\t\t\t\t\tformControlName=\"titleField\" />\n\t\t\t\t<label for=\"title\">Title</label>\n\t\t\t</div>\n\t\t\t<div class=\"error\" *ngIf=\"titleField.invalid && \n\t\t\t\t(titleField.touched ||titleField.dirty)\">\n\t\t\t\t<div *ngIf=\"titleField.errors.required\">\n\t\t\t\t\t<p>Title field can not be left blank</p>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"titleField.errors.minlength\">\n\t\t\t\t\t<p>Title must be more than 4 characters</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<button type=\"submit\" class=\"cyan btn\">Save Favorite</button>\n\t\t</div>\n\t</form>\n\n\t<p *ngIf=\"message\">{{message}}</p>\n</div>"

/***/ }),

/***/ "./src/app/favorite-form/favorite-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/favorite-form/favorite-form.component.ts ***!
  \**********************************************************/
/*! exports provided: FavoriteFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteFormComponent", function() { return FavoriteFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/ */ "./src/app/service/index.ts");




var FavoriteFormComponent = /** @class */ (function () {
    function FavoriteFormComponent(favoriteService) {
        this.favoriteService = favoriteService;
    }
    FavoriteFormComponent.prototype.ngOnInit = function () {
        this.titleField = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.favoriteForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            titleField: this.titleField
        });
        this.message = null;
    };
    FavoriteFormComponent.prototype.handleSubmit = function () {
        var _this = this;
        if (this.titleField.errors) {
            return;
        }
        this.favoriteService.createFavorite(this.titleField.value)
            .subscribe(function (favorite) {
            if (favorite == null) {
                _this.message = "Failed to create favorite";
            }
            else {
                _this.message = "Favorite created";
            }
        });
    };
    FavoriteFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorite-form-component',
            template: __webpack_require__(/*! ./favorite-form.component.html */ "./src/app/favorite-form/favorite-form.component.html"),
            styles: [__webpack_require__(/*! ./favorite-form.component.css */ "./src/app/favorite-form/favorite-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service___WEBPACK_IMPORTED_MODULE_3__["FavoriteService"]])
    ], FavoriteFormComponent);
    return FavoriteFormComponent;
}());



/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.active{\r\n\tbackground-color: #00bcd4 ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUtbGlzdC9mYXZvcml0ZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQywwQkFBMEI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZS1saXN0L2Zhdm9yaXRlLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYWN0aXZle1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQgO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"collection\" >\n\t<div *ngIf=\"!favoriteList; else elseBlock\">\n\t\t<p>Favorite List is empty</p>\n\t</div>\n\t<div *ngFor=\"let favorite of favoriteList\" #elseBlock>\n\t\t<favorite-component [favorite]=\"favorite\" >\n\t\t\t\t\n\t\t</favorite-component>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/favorite-list/favorite-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/favorite-list/favorite-list.component.ts ***!
  \**********************************************************/
/*! exports provided: FavoriteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteListComponent", function() { return FavoriteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_favorite_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/favorite.service */ "./src/app/service/favorite.service.ts");



var FavoriteListComponent = /** @class */ (function () {
    function FavoriteListComponent(favoriteService) {
        this.favoriteService = favoriteService;
    }
    FavoriteListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.favoriteService.getAll().subscribe(function (favoriteList) {
            _this.favoriteList = favoriteList;
        });
    };
    FavoriteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorite-list-component',
            template: __webpack_require__(/*! ./favorite-list.component.html */ "./src/app/favorite-list/favorite-list.component.html"),
            styles: [__webpack_require__(/*! ./favorite-list.component.css */ "./src/app/favorite-list/favorite-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_favorite_service__WEBPACK_IMPORTED_MODULE_2__["FavoriteService"]])
    ], FavoriteListComponent);
    return FavoriteListComponent;
}());



/***/ }),

/***/ "./src/app/favorite/favorite.component.css":
/*!*************************************************!*\
  !*** ./src/app/favorite/favorite.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.collection-item:hover{\r\n\tcursor:pointer;\r\n}\r\n\r\na.collection-item{\r\n\tcolor:black;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLFdBQVc7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlL2Zhdm9yaXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhLmNvbGxlY3Rpb24taXRlbTpob3ZlcntcclxuXHRjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuYS5jb2xsZWN0aW9uLWl0ZW17XHJcblx0Y29sb3I6YmxhY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/favorite/favorite.component.html":
/*!**************************************************!*\
  !*** ./src/app/favorite/favorite.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a \r\n\tclass=\"collection-item\" \r\n\t[routerLink]=\"['/favorite', favorite.id]\" \r\n\t[ngClass]=\"{'active cyan': this.selectedListId == this.favorite.id}\"  \r\n\t>{{favorite.title}}</a>"

/***/ }),

/***/ "./src/app/favorite/favorite.component.ts":
/*!************************************************!*\
  !*** ./src/app/favorite/favorite.component.ts ***!
  \************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteComponent.prototype, "favorite", void 0);
    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'favorite-component',
            template: __webpack_require__(/*! ./favorite.component.html */ "./src/app/favorite/favorite.component.html"),
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite/favorite.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\">\n\n\t\t<book-list-component>\n\n\t\t</book-list-component>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main-component',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.btn{\r\n\twidth:100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxVQUFVO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEuYnRue1xyXG5cdHdpZHRoOjEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<favorite-list-component >\n\n</favorite-list-component>\n<hr />\n<a [routerLink]=\"['book/create']\" class=\"btn cyan\">New Book</a>\n<br />\n<br />\n<a [routerLink]=\"['favorite/create']\" class=\"btn cyan\">New Favorite</a>\n<br />\n<br />\n<a [routerLink]=\"['author/create']\" class=\"btn cyan\">New Author</a>\n<br />\n<br />\n<a [routerLink]=\"['/']\" class=\"btn cyan\">All Books</a>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'navigation-component',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/service/author.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/author.service.ts ***!
  \*******************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var AuthorService = /** @class */ (function () {
    function AuthorService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                "Content-Type": "application/json"
            }),
        };
    }
    AuthorService.prototype.getAll = function () {
        return this.http.get("/api/author/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getAll")));
    };
    AuthorService.prototype.getAuthor = function (id) {
        return this.http.get("/api/author/find/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getAuthor", id)));
    };
    AuthorService.prototype.createAuthor = function (name) {
        return this.http.post("/api/author/create/", name, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("createAuthor")));
    };
    AuthorService.prototype.searchByName = function (name) {
        return this.http.get("/api/author/" + name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("searchByName")));
    };
    AuthorService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    AuthorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/service/book.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/book.service.ts ***!
  \*****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    BookService.prototype.getBook = function (id) {
        return this.http.get("/api/book/find/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getBook")));
    };
    BookService.prototype.getAll = function () {
        return this.http.get("/api/book/")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getAll", [])));
    };
    BookService.prototype.createBook = function (book) {
        return this.http.post("/api/book/create", book)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("addBook", book)));
    };
    BookService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/service/favorite.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/favorite.service.ts ***!
  \*********************************************/
/*! exports provided: FavoriteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return FavoriteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FavoriteService = /** @class */ (function () {
    function FavoriteService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json"
            }),
        };
    }
    FavoriteService.prototype.getFavorite = function (id) {
        return this.http.get("/api/favorite/find/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getFavorite")));
    };
    FavoriteService.prototype.searchByTitle = function (title) {
        return this.http.get("/api/favorite/search/" + title)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("searchByTitle")));
    };
    FavoriteService.prototype.getAll = function () {
        return this.http.get("/api/favorite/all")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getAll")));
    };
    FavoriteService.prototype.createFavorite = function (title) {
        return this.http.post("/api/favorite/create", title, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("createFavorite")));
    };
    FavoriteService.prototype.addBookToFavorite = function (book, favoriteId) {
        return this.http.post("/api/favorite/find/" + favoriteId + "/add-book/", book.id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("addBookToFavorite")));
    };
    FavoriteService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = "operation"; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    FavoriteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FavoriteService);
    return FavoriteService;
}());



/***/ }),

/***/ "./src/app/service/index.ts":
/*!**********************************!*\
  !*** ./src/app/service/index.ts ***!
  \**********************************/
/*! exports provided: BookService, FavoriteService, AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.service */ "./src/app/service/book.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return _book_service__WEBPACK_IMPORTED_MODULE_0__["BookService"]; });

/* harmony import */ var _favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.service */ "./src/app/service/favorite.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteService", function() { return _favorite_service__WEBPACK_IMPORTED_MODULE_1__["FavoriteService"]; });

/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./author.service */ "./src/app/service/author.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return _author_service__WEBPACK_IMPORTED_MODULE_2__["AuthorService"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\sites\projects\maktaba\bookmarker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map