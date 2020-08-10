(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["last-movie-last-movie-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <ion-card-header>\n    <ion-card-title>{{'SETTINGS' | translate }}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-label *ngIf='language'>{{'SPANISH' | translate}}</ion-label>\n    <ion-label *ngIf='!language'>{{'ENGLISH' | translate}}</ion-label>\n    <ion-toggle [(ngModel)]=\"language\" [ionChange]=\"changeLang()\"></ion-toggle>\n    <ion-button (click)=\"logout()\">\n      {{'LOG_OUT' | translate }}\n    </ion-button>\n  </ion-card-content>\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/last-movie/last-movie.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/last-movie/last-movie.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      {{ 'LAST_MOVIES' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">{{ 'LAST_MOVIES' | translate }}</ion-title>\n     \n    </ion-toolbar>\n  </ion-header>\n\n  <app-movie-card  [card]=\"lastMovie\"></app-movie-card>\n\n  <app-settings></app-settings>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let SettingsComponent = class SettingsComponent {
    constructor(translate, router) {
        this.translate = translate;
        this.router = router;
        this.language = true;
    }
    ngOnInit() {
        this.language = sessionStorage.getItem('lang') === 'es' ? true : false;
    }
    //function to change language
    changeLang() {
        let lang = 'es';
        if (!this.language) {
            lang = ('en');
        }
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        sessionStorage.setItem('lang', 'es');
    }
    logout() {
        localStorage.setItem('session', 'false');
        this.router.navigate(['/login']);
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SettingsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/settings/settings.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")).default]
    })
], SettingsComponent);



/***/ }),

/***/ "./src/app/modules/last-movie/last-movie.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/modules/last-movie/last-movie.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGFzdC1tb3ZpZS9sYXN0LW1vdmllLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/last-movie/last-movie.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/last-movie/last-movie.component.ts ***!
  \************************************************************/
/*! exports provided: LastMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMovieComponent", function() { return LastMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_themoviedb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/themoviedb.service */ "./src/app/services/themoviedb.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");




let LastMovieComponent = class LastMovieComponent {
    constructor(themoviedbService, translate) {
        this.themoviedbService = themoviedbService;
        this.translate = translate;
        this.lastMovie = {
            original_title: ''
        };
        this.language = true;
        this.themoviedbService.latestMovie(sessionStorage.getItem('lang')).subscribe(data => {
            this.lastMovie = data;
        });
    }
    ngOnInit() {
        this.language = sessionStorage.getItem('lang') === 'es' ? true : false;
    }
    //function to change language
    changeLang() {
        let lang = 'es';
        console.log(this.lastMovie);
        if (!this.language) {
            lang = ('en');
        }
        this.translate.setDefaultLang(lang);
        this.translate.use(lang);
        sessionStorage.setItem('lang', 'es');
    }
};
LastMovieComponent.ctorParameters = () => [
    { type: src_app_services_themoviedb_service__WEBPACK_IMPORTED_MODULE_2__["ThemoviedbService"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
];
LastMovieComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-last-movie',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./last-movie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/last-movie/last-movie.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./last-movie.component.scss */ "./src/app/modules/last-movie/last-movie.component.scss")).default]
    })
], LastMovieComponent);



/***/ }),

/***/ "./src/app/modules/last-movie/last-movie.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/last-movie/last-movie.module.ts ***!
  \*********************************************************/
/*! exports provided: LastMovieModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMovieModule", function() { return LastMovieModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _last_movie_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./last-movie.routing.module */ "./src/app/modules/last-movie/last-movie.routing.module.ts");
/* harmony import */ var _last_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./last-movie.component */ "./src/app/modules/last-movie/last-movie.component.ts");
/* harmony import */ var src_app_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/movie-card/movie-card.component */ "./src/app/components/movie-card/movie-card.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_app_app_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");













let LastMovieModule = class LastMovieModule {
};
LastMovieModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_last_movie_component__WEBPACK_IMPORTED_MODULE_7__["LastMovieComponent"], src_app_components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_8__["MovieCardComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]],
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_5__["ExploreContainerComponentModule"],
            _last_movie_routing_module__WEBPACK_IMPORTED_MODULE_6__["LastMovieRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"].forChild({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateLoader"],
                    useFactory: src_app_app_module__WEBPACK_IMPORTED_MODULE_10__["createTranslateLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]
                },
            })
        ]
    })
], LastMovieModule);



/***/ }),

/***/ "./src/app/modules/last-movie/last-movie.routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/last-movie/last-movie.routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: LastMovieRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastMovieRoutingModule", function() { return LastMovieRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _last_movie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last-movie.component */ "./src/app/modules/last-movie/last-movie.component.ts");
/* harmony import */ var src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");





const routes = [
    {
        path: '',
        canActivate: [src_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        component: _last_movie_component__WEBPACK_IMPORTED_MODULE_3__["LastMovieComponent"],
    }
];
let LastMovieRoutingModule = class LastMovieRoutingModule {
};
LastMovieRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LastMovieRoutingModule);



/***/ })

}]);
//# sourceMappingURL=last-movie-last-movie-module-es2015.js.map