(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");










const routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: { animation: 1 },
    },
    {
        path: 'about',
        component: _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
        data: { animation: 2 },
    },
    {
        path: 'projects',
        component: _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsComponent"],
        data: { animation: 3 },
    },
    {
        path: 'skills',
        component: _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"],
        data: { animation: 4 },
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
        data: { animation: 5 },
    },
    {
        path: '**',
        component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_7__["Page404Component"],
        data: { animation: 6 },
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_animation_transition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/animation/transition */ "./src/app/shared/animation/transition.ts");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() { }
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [[1, "layout"], [1, "content-view"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".layout[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: hidden;\n  background: url(/assets/background-image.webp);\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.layout[_ngcontent-%COMP%]   .content-view[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: -webkit-fill-available;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n@media only screen and (max-width: 768px) {\n  .layout[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n}\n@media only screen and (min-width: 768px) {\n  .content-view[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 12px;\n    background-color: #100e17;\n  }\n\n  .content-view[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n    border-radius: 10px;\n    background-color: #100e17;\n  }\n\n  .content-view[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n    background-color: #27242f;\n  }\n}\n#myVideo[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0;\n  bottom: 0;\n  min-width: 100%;\n  min-height: 100%;\n  z-index: -1;\n}\n.video-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxGZXJuYW5kb1xcRG9jdW1lbnRzXFxyZXBvc2l0b3J5XFxwb3J0Zm9saW8td2ViL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQzpcXFVzZXJzXFxGZXJuYW5kb1xcRG9jdW1lbnRzXFxyZXBvc2l0b3J5XFxwb3J0Zm9saW8td2ViL3NyY1xcc3R5bGVzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0VBRUEsNEJBQUE7RUFDQSxzQkFBQTtBQ0ZKO0FESUk7RUFDSSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURNQTtFQUNJO0lBQ0kseUJBQUE7RUNITjtBQUNGO0FETUE7RUFDRztJQUNHLFdBQUE7SUFDQSx5QkV0QnFCO0VEa0J6Qjs7RURPQztJQUNHLG1CQUFBO0lBQ0EseUJFM0JxQjtFRHVCekI7O0VET0M7SUFFRyx5QkUvQnVCO0VEMEIzQjtBQUNGO0FEWUM7RUFDRyxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDVko7QURhQztFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ1ZKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4ubGF5b3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvYmFja2dyb3VuZC1pbWFnZS53ZWJwKTtcclxuICAgIC8vYmFja2dyb3VuZDogJGJhY2tncm91bmQtcHJpbWFyeS1jb2xvcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgXHJcbiAgICAuY29udGVudC12aWV3IHtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubGF5b3V0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgIC5jb250ZW50LXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgd2lkdGg6IDEycHg7IFxyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yO1xyXG4gICB9XHJcbiAgIFxyXG4gICAuY29udGVudC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLXByaW1hcnktY29sb3I7XHJcbiAgIH1cclxuICAgXHJcbiAgIC5jb250ZW50LXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgLy9ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I7XHJcbiAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAjbXlWaWRlbyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuIH1cclxuXHJcbiAudmlkZW8tZ3JpZCB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuNik7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuIH1cclxuXHJcblxyXG4gIiwiLmxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2JhY2tncm91bmQtaW1hZ2Uud2VicCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubGF5b3V0IC5jb250ZW50LXZpZXcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5sYXlvdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbnRlbnQtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMDBlMTc7XG4gIH1cblxuICAuY29udGVudC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZTE3O1xuICB9XG5cbiAgLmNvbnRlbnQtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MmY7XG4gIH1cbn1cbiNteVZpZGVvIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udmlkZW8tZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHotaW5kZXg6IC0xO1xufSIsIiRtYWluLWNvbG9yOiAjZmZhZjI5O1xyXG4kc2VjdW5kYXJ5LWNvbG9yOiAjZmZjMjVjO1xyXG4kY29tcGxlbnRhcnktY29sb3IxOiAjZmZjZDI5O1xyXG4kY29tcGxlbnRhcnktY29sb3IyOiAjZmYyOTI5O1xyXG5cclxuJGJhY2tncm91bmQtcHJpbWFyeS1jb2xvcjogIzEwMGUxNztcclxuJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yOiAjMjcyNDJmO1xyXG5cclxuXHJcblxyXG4vL290aGVyIHBhbGxldCBjb2xvciBcclxuLy8kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMxNzE1MWU7Il19 */"], data: { animation: [
            _shared_animation_transition__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"],
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    _shared_animation_transition__WEBPACK_IMPORTED_MODULE_1__["slideInAnimation"],
                ]
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/menu/menu.component */ "./src/app/shared/menu/menu.component.ts");
/* harmony import */ var _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/about-me/about-me.component */ "./src/app/components/about-me/about-me.component.ts");
/* harmony import */ var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/projects/projects.component */ "./src/app/components/projects/projects.component.ts");
/* harmony import */ var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/skills/skills.component */ "./src/app/components/skills/skills.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_menu_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/menu/menu-mobile/menu-mobile.component */ "./src/app/shared/menu/menu-mobile/menu-mobile.component.ts");
/* harmony import */ var _shared_menu_menu_pc_menu_pc_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/menu/menu-pc/menu-pc.component */ "./src/app/shared/menu/menu-pc/menu-pc.component.ts");
/* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
        _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
        _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
        _shared_menu_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_12__["MenuMobileComponent"],
        _shared_menu_menu_pc_menu_pc_component__WEBPACK_IMPORTED_MODULE_13__["MenuPcComponent"],
        _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_14__["Page404Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"],
                    _shared_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _components_about_me_about_me_component__WEBPACK_IMPORTED_MODULE_7__["AboutMeComponent"],
                    _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                    _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_9__["SkillsComponent"],
                    _shared_menu_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_12__["MenuMobileComponent"],
                    _shared_menu_menu_pc_menu_pc_component__WEBPACK_IMPORTED_MODULE_13__["MenuPcComponent"],
                    _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_14__["Page404Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/about-me/about-me.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/about-me/about-me.component.ts ***!
  \***********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutMeComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutMeComponent.ɵfac = function AboutMeComponent_Factory(t) { return new (t || AboutMeComponent)(); };
AboutMeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutMeComponent, selectors: [["app-about-me"]], decls: 40, vars: 0, consts: [[1, "about-content"], [1, "title-principal"], [1, "row-about"], [1, "text-content"], ["href", "/assets/CV-Fernando-Arriagada.pdf", "target", "_blank", 1, "button-download"], [1, "animation-content"], [1, "container-slider"], ["id", "carousel_sides"], ["src", "assets/skills/angular.png"], ["src", "assets/skills/javascript.png"], ["src", "assets/skills/python.png", 1, "python-image"]], template: function AboutMeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ingeniero de Software");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Apasionado por buscar soluciones tecnol\u00F3gicas que realicen un impacto positivo en nuestra sociedad. Estoy constantemente explorando nuevas oportunidades y conocimientos, para mejorar mis habilidades como profesional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Poseo s\u00F3lidos conocimientos en tecnolog\u00EDas para desarrollo de aplicaciones con ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Python");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " (Django), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " (Node.js, React, Vue, Angular) y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Docker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Adem\u00E1s de conocimiento avanzado en herramientas para desarrollo colaborativo como ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Git");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " (Github y Gitlab), ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Jira");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Descargar CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@media only screen and (max-width: 768px) {\n  .about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n  .about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .animation-content[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n.about-content[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #fff;\n  padding: 50px;\n  font-size: 20px;\n  max-width: 1000px;\n  padding: 20px;\n  padding-top: 80px;\n}\n.about-content[_ngcontent-%COMP%]   .title-principal[_ngcontent-%COMP%] {\n  margin-top: 0px;\n  margin-bottom: 30px;\n}\n.about-content[_ngcontent-%COMP%]   .title-principal[_ngcontent-%COMP%]::after {\n  background-color: #ffc25c;\n  height: 5px;\n  width: 200px;\n  margin-top: 2px;\n  content: \"\";\n  display: flex;\n  -webkit-animation: width 1s ease-in-out;\n          animation: width 1s ease-in-out;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%] {\n  display: flex;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-weight: 100;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%] {\n  background: #ffc25c;\n  color: #100e17;\n  font-weight: 900;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n  margin: auto;\n  margin-top: 45px;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .text-content[_ngcontent-%COMP%]   .button-download[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  font-weight: 900;\n}\n.about-content[_ngcontent-%COMP%]   .row-about[_ngcontent-%COMP%]   .animation-content[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  justify-content: center;\n  height: 300px;\n  padding-top: 40px;\n}\n@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n.container-slider[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 140px;\n  perspective: 1000px;\n  left: 450px;\n  top: 50px;\n}\n#carousel_sides[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  transform-style: preserve-3d;\n  -webkit-animation: rotate 60s linear infinite;\n          animation: rotate 60s linear infinite;\n  animation-direction: reverse;\n  text-align: center;\n}\n#carousel_sides[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 230px;\n}\n#carousel_sides[_ngcontent-%COMP%]   img.python-image[_ngcontent-%COMP%] {\n  width: 200px;\n  padding-top: 20px;\n}\n#carousel_sides[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  width: 186px;\n  height: 116px;\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  margin: 0px;\n  display: block;\n  opacity: 0.95;\n}\n#carousel_sides[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotateY(0deg) translateZ(100px);\n}\n#carousel_sides[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotateY(120deg) translateZ(100px);\n}\n#carousel_sides[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotateY(240deg) translateZ(100px);\n}\n@-webkit-keyframes rotate {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(2500deg);\n  }\n}\n@keyframes rotate {\n  from {\n    transform: rotateY(0deg);\n  }\n  to {\n    transform: rotateY(2500deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGFib3V0LW1lXFxhYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBR0k7SUFDRSx5QkFBQTtFQ05KO0VEUUk7SUFDRSxzQkFBQTtFQ05OO0VEU0k7SUFDRSxzQkFBQTtFQ1BOO0FBQ0Y7QURhQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQ1hGO0FEYUU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGFJO0VBQ0UseUJFcENZO0VGcUNaLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ1hOO0FEZUU7RUFDRSxhQUFBO0FDYko7QURlSTtFQUNFLFVBQUE7QUNiTjtBRGVNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDYlI7QURnQk07RUFDRSxtQkUxRFU7RUYyRFYsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDZFI7QURnQlE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FDZFY7QURtQkk7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDakJOO0FEc0JBO0VBQ0U7SUFDRSxRQUFBO0VDbkJGO0VEc0JBO0lBQ0UsWUFBQTtFQ3BCRjtBQUNGO0FEYUE7RUFDRTtJQUNFLFFBQUE7RUNuQkY7RURzQkE7SUFDRSxZQUFBO0VDcEJGO0FBQ0Y7QUR1QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNyQkY7QUR3QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtBQ3JCRjtBRHVCRTtFQUNFLFlBQUE7QUNyQko7QUR1Qkk7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNyQk47QUQyQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7QUN6QkY7QUQ0QkE7RUFDRSwwQ0FBQTtBQ3pCRjtBRDRCQTtFQUNFLDRDQUFBO0FDekJGO0FENEJBO0VBQ0UsNENBQUE7QUN6QkY7QUQ0QkE7RUFDRTtJQUNFLHdCQUFBO0VDekJGO0VENEJBO0lBQ0UsMkJBQUE7RUMxQkY7QUFDRjtBRG1CQTtFQUNFO0lBQ0Usd0JBQUE7RUN6QkY7RUQ0QkE7SUFDRSwyQkFBQTtFQzFCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hYm91dC1tZS9hYm91dC1tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3NyYy9zdHlsZXMvY29sb3JzLnNjc3MnO1xyXG5cclxuOmhvc3Qge31cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmFib3V0LWNvbnRlbnQge1xyXG5cclxuICAgIC5yb3ctYWJvdXQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgLnRleHQtY29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmFuaW1hdGlvbi1jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmFib3V0LWNvbnRlbnQge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xyXG5cclxuICAudGl0bGUtcHJpbmNpcGFsIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdW5kYXJ5LWNvbG9yO1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFuaW1hdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucm93LWFib3V0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnRleHQtY29udGVudCB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJ1dHRvbi1kb3dubG9hZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHNlY3VuZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogIzEwMGUxNztcclxuICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbWF0aW9uLWNvbnRlbnQge1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMFxyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMjAwcHhcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItc2xpZGVyIHtcclxuICB3aWR0aDogMjEwcHg7XHJcbiAgaGVpZ2h0OiAxNDBweDtcclxuICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIGxlZnQ6IDQ1MHB4O1xyXG4gIHRvcDogNTBweDtcclxufVxyXG5cclxuI2Nhcm91c2VsX3NpZGVzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYW5pbWF0aW9uOiByb3RhdGUgNjBzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiByZXZlcnNlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuXHJcbiAgICAmLnB5dGhvbi1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuI2Nhcm91c2VsX3NpZGVzIGZpZ3VyZSB7XHJcbiAgd2lkdGg6IDE4NnB4O1xyXG4gIGhlaWdodDogMTE2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDEwcHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vYm9yZGVyOjFweCBzb2xpZCAjN2ZmZjAwO1xyXG4gIG9wYWNpdHk6IDAuOTU7XHJcbn1cclxuXHJcbiNjYXJvdXNlbF9zaWRlcyBmaWd1cmU6bnRoLWNoaWxkKDEpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCk7XHJcbn1cclxuXHJcbiNjYXJvdXNlbF9zaWRlcyBmaWd1cmU6bnRoLWNoaWxkKDIpIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTIwZGVnKSB0cmFuc2xhdGVaKDEwMHB4KTtcclxufVxyXG5cclxuI2Nhcm91c2VsX3NpZGVzIGZpZ3VyZTpudGgtY2hpbGQoMykge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgyNDBkZWcpIHRyYW5zbGF0ZVooMTAwcHgpO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZyk7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjUwMGRlZyk7XHJcbiAgfVxyXG59XHJcbiIsIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LWNvbnRlbnQgLnJvdy1hYm91dCB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAuYWJvdXQtY29udGVudCAucm93LWFib3V0IC50ZXh0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmFib3V0LWNvbnRlbnQgLnJvdy1hYm91dCAuYW5pbWF0aW9uLWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5hYm91dC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG4uYWJvdXQtY29udGVudCAudGl0bGUtcHJpbmNpcGFsIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmFib3V0LWNvbnRlbnQgLnRpdGxlLXByaW5jaXBhbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjVjO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFuaW1hdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XG59XG4uYWJvdXQtY29udGVudCAucm93LWFib3V0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5hYm91dC1jb250ZW50IC5yb3ctYWJvdXQgLnRleHQtY29udGVudCB7XG4gIHdpZHRoOiA1MCU7XG59XG4uYWJvdXQtY29udGVudCAucm93LWFib3V0IC50ZXh0LWNvbnRlbnQgcCB7XG4gIG9wYWNpdHk6IDAuODtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cbi5hYm91dC1jb250ZW50IC5yb3ctYWJvdXQgLnRleHQtY29udGVudCAuYnV0dG9uLWRvd25sb2FkIHtcbiAgYmFja2dyb3VuZDogI2ZmYzI1YztcbiAgY29sb3I6ICMxMDBlMTc7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQ1cHg7XG59XG4uYWJvdXQtY29udGVudCAucm93LWFib3V0IC50ZXh0LWNvbnRlbnQgLmJ1dHRvbi1kb3dubG9hZDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5hYm91dC1jb250ZW50IC5yb3ctYWJvdXQgLmFuaW1hdGlvbi1jb250ZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLmNvbnRhaW5lci1zbGlkZXIge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogMTQwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG4gIGxlZnQ6IDQ1MHB4O1xuICB0b3A6IDUwcHg7XG59XG5cbiNjYXJvdXNlbF9zaWRlcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgYW5pbWF0aW9uOiByb3RhdGUgNjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogcmV2ZXJzZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Nhcm91c2VsX3NpZGVzIGltZyB7XG4gIHdpZHRoOiAyMzBweDtcbn1cbiNjYXJvdXNlbF9zaWRlcyBpbWcucHl0aG9uLWltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI2Nhcm91c2VsX3NpZGVzIGZpZ3VyZSB7XG4gIHdpZHRoOiAxODZweDtcbiAgaGVpZ2h0OiAxMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICB0b3A6IDEwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMC45NTtcbn1cblxuI2Nhcm91c2VsX3NpZGVzIGZpZ3VyZTpudGgtY2hpbGQoMSkge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG59XG5cbiNjYXJvdXNlbF9zaWRlcyBmaWd1cmU6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDEyMGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG59XG5cbiNjYXJvdXNlbF9zaWRlcyBmaWd1cmU6bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDI0MGRlZykgdHJhbnNsYXRlWigxMDBweCk7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMjUwMGRlZyk7XG4gIH1cbn0iLCIkbWFpbi1jb2xvcjogI2ZmYWYyOTtcclxuJHNlY3VuZGFyeS1jb2xvcjogI2ZmYzI1YztcclxuJGNvbXBsZW50YXJ5LWNvbG9yMTogI2ZmY2QyOTtcclxuJGNvbXBsZW50YXJ5LWNvbG9yMjogI2ZmMjkyOTtcclxuXHJcbiRiYWNrZ3JvdW5kLXByaW1hcnktY29sb3I6ICMxMDBlMTc7XHJcbiRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjogIzI3MjQyZjtcclxuXHJcblxyXG5cclxuLy9vdGhlciBwYWxsZXQgY29sb3IgXHJcbi8vJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yOiAjMTcxNTFlOyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutMeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-me',
                templateUrl: './about-me.component.html',
                styleUrls: ['./about-me.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


//import { ContactService } from '../services/contact/contact.service';






function ContactComponent_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor indique su Nombre ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor introduzca su Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor introduzca un Email v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor indique su n\u00FAmero de celular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor introduzca un n\u00FAmero v\u00E1lido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Por favor escriba una peque\u00F1a descripci\u00F3n de lo que necesita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "error-input": a0, "input-filled": a1 }; };
class ContactComponent {
    constructor() { }
    ngOnInit() {
        this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"];
        this.initContactForm();
    }
    initContactForm() {
        this.validateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]+"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    createContact(e) {
        if (this.validateForm.status == 'VALID') {
            this.sendEmail();
            if (this.validateForm.value.message === 'Secret') {
                this.showSecret();
            }
        }
        else {
            this.ErrorNotification();
            this.validateForm.markAsTouched();
        }
    }
    sendEmail() {
        emailjs_com__WEBPACK_IMPORTED_MODULE_4___default.a.send('gmail', 'templateneokey23', this.contact, "user_Z9ZA15CBTB3P6Kw6xRIeQ")
            .then(success => {
            this.SuccessNotification();
            window.scroll(0, 0);
            this.validateForm.markAsUntouched();
            this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"];
        }, error => {
            this.ErrorServer();
            this.validateForm.markAsUntouched();
            this.contact = new src_app_models_contact__WEBPACK_IMPORTED_MODULE_1__["Contact"];
        });
    }
    showSecret() {
        const audio = new Audio('assets/sound.mp3');
        audio.play();
    }
    ErrorNotification() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Campos incompletos', 'Por favor rellene todos los campos :)', 'error');
    }
    SuccessNotification() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Mensaje Enviado!', 'Recibirá una respuesta en un momento  :)', 'success');
    }
    ErrorServer() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error de servidor :(', 'Intente más tarde, mientras lo solucionamos', 'error');
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 60, vars: 27, consts: [[1, "contact-content"], [1, "title-principal"], [2, "display", "flex"], [1, "sub-title"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "xMidYMid", 2, "width", "47px", "margin-left", "20px"], ["id", "ldio-hylt75eun39-gradient", "x1", "0%", "x2", "0%", "y1", "0%", "y2", "100%"], ["offset", "10%", "stop-color", "black", "stop-opacity", "0"], ["offset", "100%", "stop-color", "white", "stop-opacity", "1"], ["id", "ldio-hylt75eun39-mask", "maskUnits", "userSpaceOnUse", "x", "0", "y", "0", "width", "100", "height", "100"], ["x", "22", "y", "8", "width", "56", "height", "54", "fill", "url(#ldio-hylt75eun39-gradient)"], ["id", "ldio-hylt75eun39-steam", "d", "M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9", "stroke-width", "6", "stroke-linecap", "round", "fill", "#f00", "stroke", "#cacaca"], ["mask", "url(#ldio-hylt75eun39-mask)"], ["x", "29", "y", "-3.50348", 0, "xlink", "href", "#ldio-hylt75eun39-steam"], ["attributeName", "y", "values", "4;-14", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "begin", "-0.5s"], ["x", "47", "y", "-3.00348", 0, "xlink", "href", "#ldio-hylt75eun39-steam"], ["attributeName", "y", "values", "0;-18", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "begin", "-0.25s"], ["x", "64", "y", "-8.50347", 0, "xlink", "href", "#ldio-hylt75eun39-steam"], ["attributeName", "y", "values", "-4;-22", "keyTimes", "0;1", "dur", "1s", "repeatCount", "indefinite", "begin", "-0.3333333333333333s"], ["d", "M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z", "fill", "#ffffff"], ["d", "M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z", "fill", "#ffc25c"], [1, "contact-container", 3, "formGroup", "ngSubmit"], [1, "group"], ["id", "name", "name", "name", "type", "text", "formControlName", "name", 3, "ngClass", "ngModel", "ngModelChange"], [1, "highlight"], [1, "bar"], ["class", "error-label", 4, "ngIf"], ["name", "email", "type", "text", "formControlName", "email", 1, "name-input", 3, "ngModel", "ngClass", "ngModelChange"], ["name", "phone", "type", "text", "formControlName", "phone", 1, "name-input", 3, "ngClass", "ngModel", "ngModelChange"], [1, "group", "message"], ["name", "message", "type", "text", "formControlName", "message", 1, "name-input", 3, "ngModel", "ngClass", "ngModelChange"], [1, "send-button", 3, "click"], [1, "button-send"], ["x", "0", "y", "0", "fill", "none", "width", "100%", "height", "100%"], [1, "error-label"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFComo te puedo ayudar?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "linearGradient", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "stop", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "stop", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mask", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "use", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "animate", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "use", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "animate", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "use", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "animate", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_24_listener($event) { return ctx.createContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_26_listener($event) { return ctx.contact.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ContactComponent_div_31_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_33_listener($event) { return ctx.contact.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ContactComponent_div_38_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, ContactComponent_div_39_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_41_listener($event) { return ctx.contact.phone = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Celular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ContactComponent_div_46_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ContactComponent_div_47_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactComponent_Template_input_ngModelChange_49_listener($event) { return ctx.contact.message = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContactComponent_div_54_Template, 2, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_div_click_55_listener($event) { return ctx.createContact($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "rect", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.validateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx.validateForm.get("name").hasError("required") && ctx.validateForm.get("name").touched, !ctx.validateForm.get("name").hasError("required")))("ngModel", ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("name").hasError("required") && ctx.validateForm.get("name").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.email)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.validateForm.get("email").hasError("required") && ctx.validateForm.get("email").touched || ctx.validateForm.get("email").hasError("pattern") && ctx.validateForm.get("email").touched, !ctx.validateForm.get("email").hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("email").hasError("required") && ctx.validateForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("email").hasError("pattern") && ctx.validateForm.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.validateForm.get("phone").hasError("required") && ctx.validateForm.get("phone").touched || ctx.validateForm.get("phone").hasError("pattern") && ctx.validateForm.get("phone").touched, !ctx.validateForm.get("phone").hasError("required")))("ngModel", ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("phone").hasError("required") && ctx.validateForm.get("phone").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("phone").hasError("pattern") && ctx.validateForm.get("phone").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contact.message)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c0, ctx.validateForm.get("message").hasError("required") && ctx.validateForm.get("message").touched, !ctx.validateForm.get("message").hasError("required")));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.validateForm.get("message").hasError("required") && ctx.validateForm.get("message").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".contact-content[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #fff;\n  padding: 50px;\n  padding-top: 80px;\n}\n\n.title-principal[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.title-principal[_ngcontent-%COMP%]::after {\n  background-color: #ffc25c;\n  height: 5px;\n  width: 200px;\n  margin-top: 2px;\n  content: \"\";\n  display: flex;\n  -webkit-animation: width 1s ease-in-out;\n          animation: width 1s ease-in-out;\n}\n\n@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 200;\n  margin-top: 10px;\n  margin-bottom: 50px;\n}\n\n.contact-container[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n@media only screen and (max-width: 768px) {\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 85%;\n    padding-top: 80px;\n  }\n\n  .title-principal[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n\n  .contact-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\ninput[_ngcontent-%COMP%] {\n  font-size: 18px;\n  padding: 10px 0px 10px 0px;\n  display: block;\n  width: 100%;\n  border: none;\n  background: rgba(0, 0, 0, 0);\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 100;\n  color: #fff;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400 !important;\n  background: #27242f;\n  padding-left: 7px;\n}\n\n\n\ninput[_ngcontent-%COMP%]:-webkit-autofill, input[_ngcontent-%COMP%]:-webkit-autofill:hover, input[_ngcontent-%COMP%]:-webkit-autofill:focus, textarea[_ngcontent-%COMP%]:-webkit-autofill, textarea[_ngcontent-%COMP%]:-webkit-autofill:hover, textarea[_ngcontent-%COMP%]:-webkit-autofill:focus, select[_ngcontent-%COMP%]:-webkit-autofill, select[_ngcontent-%COMP%]:-webkit-autofill:hover, select[_ngcontent-%COMP%]:-webkit-autofill:focus {\n  -webkit-text-fill-color: white;\n  -webkit-box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;\n  -webkit-transition: background-color 5000s ease-in-out 0s;\n  transition: background-color 5000s ease-in-out 0s;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 18px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\ninput[_ngcontent-%COMP%]:focus    ~ label[_ngcontent-%COMP%], .input-filled[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\n  top: -20px !important;\n  font-size: 14px;\n  left: 0;\n}\n\n.bar[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n}\n\n.bar[_ngcontent-%COMP%]:before, .bar[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 2px;\n  width: 0;\n  bottom: 1px;\n  position: absolute;\n  background: #ffaf29;\n  transition: 0.2s ease all;\n  -moz-transition: 0.2s ease all;\n  -webkit-transition: 0.2s ease all;\n}\n\n.bar[_ngcontent-%COMP%]:before {\n  left: 50%;\n}\n\n.bar[_ngcontent-%COMP%]:after {\n  right: 50%;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:before, input[_ngcontent-%COMP%]:focus    ~ .bar[_ngcontent-%COMP%]:after {\n  width: 50%;\n}\n\n\n\n.highlight[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 60%;\n  width: 50%;\n  top: 25%;\n  left: 0;\n  pointer-events: none;\n  opacity: 0.5;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus    ~ .highlight[_ngcontent-%COMP%] {\n  -webkit-animation: inputHighlighter 0.3s ease;\n  animation: inputHighlighter 0.3s ease;\n}\n\n\n\n@-webkit-keyframes inputHighlighter {\n  from {\n    background: #0b4cbc;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n@keyframes inputHighlighter {\n  from {\n    background: #0b4cbc;\n  }\n  to {\n    width: 0;\n    background: transparent;\n  }\n}\n\n.send-button[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 27px;\n}\n\n.group.message[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.error-label[_ngcontent-%COMP%] {\n  color: #b43a3a;\n  font-size: 16px !important;\n  padding-bottom: 5px;\n  position: absolute;\n  right: 0px;\n}\n\n.error-input[_ngcontent-%COMP%] {\n  border: solid 1px #b43a3a;\n}\n\n.error-empty[_ngcontent-%COMP%] {\n  height: 24px;\n}\n\n.error-input[_ngcontent-%COMP%]    ~ .error-empty[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%] {\n  font-weight: 900;\n  text-align: center;\n  color: #ffc25c;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 45px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ffc25c;\n  stroke-width: 5;\n  stroke-dasharray: 422, 0;\n  transition: all 0.35s linear;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 175, 41, 0);\n  font-weight: 900;\n}\n\n.send-button[_ngcontent-%COMP%]   .button-send[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  stroke: #ffaf29;\n  stroke-width: 5;\n  stroke-dasharray: 15, 310;\n  stroke-dashoffset: 48;\n  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L0M6XFxVc2Vyc1xcRmVybmFuZG9cXERvY3VtZW50c1xccmVwb3NpdG9yeVxccG9ydGZvbGlvLXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUNFLFNBQUE7QUNIRjs7QURLRTtFQUNFLHlCRWZjO0VGZ0JkLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ0hKOztBRE9BO0VBQ0U7SUFDRSxRQUFBO0VDSkY7RURPQTtJQUNFLFlBQUE7RUNMRjtBQUNGOztBREZBO0VBQ0U7SUFDRSxRQUFBO0VDSkY7RURPQTtJQUNFLFlBQUE7RUNMRjtBQUNGOztBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFNBO0VBQ0UsWUFBQTtBQ05GOztBRFNBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDTkY7O0VEU0E7SUFDRSxlQUFBO0VDTkY7O0VEU0E7SUFDRSxXQUFBO0VDTkY7QUFDRjs7QURVQTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsbUJFdEUyQjtFRnVFM0IsaUJBQUE7QUNSRjs7QURXQSx3Q0FBQTs7QUFDQTs7Ozs7Ozs7O0VBU0UsOEJBQUE7RUFDQSx5REFBQTtFQUNBLHlEQUFBO0VBQUEsaURBQUE7QUNSRjs7QURXQTtFQUNFLGFBQUE7QUNSRjs7QURXQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUNBQUE7QUNSRjs7QURZQTs7RUFFRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0FDVEY7O0FEWUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDVEY7O0FEWUE7O0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJFcklXO0VGc0lYLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQ0FBQTtBQ1RGOztBRFlBO0VBQ0UsU0FBQTtBQ1RGOztBRFlBO0VBQ0UsVUFBQTtBQ1RGOztBRFlBLGlCQUFBOztBQUNBOztFQUVFLFVBQUE7QUNURjs7QURZQSxtREFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ1RGOztBRFlBLGlCQUFBOztBQUNBO0VBQ0UsNkNBQUE7RUFFQSxxQ0FBQTtBQ1RGOztBRFlBLGdDQUFBOztBQUNBO0VBQ0U7SUFDRSxtQkFBQTtFQ1RGO0VEWUE7SUFDRSxRQUFBO0lBQ0EsdUJBQUE7RUNWRjtBQUNGOztBRHdCQTtFQUNFO0lBQ0UsbUJBQUE7RUNiRjtFRGdCQTtJQUNFLFFBQUE7SUFDQSx1QkFBQTtFQ2RGO0FBQ0Y7O0FEaUJBO0VBQ0UsaUJBQUE7QUNmRjs7QURrQkE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDZkY7O0FEcUJFO0VBQ0UsWUFBQTtBQ2xCSjs7QURzQkE7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ25CRjs7QURzQkE7RUFDRSx5QkFBQTtBQ25CRjs7QURzQkE7RUFDRSxZQUFBO0FDbkJGOztBRHNCQTtFQUNFLGFBQUE7QUNuQkY7O0FEd0JFO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNFdFBjO0VGdVBkLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FDckJKOztBRHVCSTtFQUNFLHFCQUFBO0FDckJOOztBRHdCSTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ3RCTjs7QUR5Qkk7RUFDRSxVQUFBO0VBQ0EsZUVqUlk7RUZrUlosZUFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7QUN2Qk47O0FEMkJFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtBQ3pCSjs7QUQ0Qkk7RUFDRSxlRS9STztFRmdTUCxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0FDMUJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbjpob3N0IHt9XHJcblxyXG4uY29udGFjdC1jb250ZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDgwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1wcmluY2lwYWwge1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY3VuZGFyeS1jb2xvcjtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbmltYXRpb246IHdpZHRoIDFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3aWR0aCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDBcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDIwMHB4XHJcbiAgfVxyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvbnRhY3QtY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgcGFkZGluZy10b3A6IDgwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtcHJpbmNpcGFsIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yO1xyXG4gIHBhZGRpbmctbGVmdDogN3B4O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgQXV0b2NvbXBsZXRlIHN0eWxlcyBpbiBDaHJvbWUqL1xyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG5pbnB1dDotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsOmZvY3VzLFxyXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxcclxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6aG92ZXIsXHJcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmZvY3VzIHtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwKSBpbnNldDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDUwMDBzIGVhc2UtaW4tb3V0IDBzO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBsZWZ0OiA1cHg7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxufVxyXG5cclxuXHJcbmlucHV0OmZvY3VzfmxhYmVsLFxyXG4uaW5wdXQtZmlsbGVkfmxhYmVsIHtcclxuICB0b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5iYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJhcjpiZWZvcmUsXHJcbi5iYXI6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIHdpZHRoOiAwO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kOiAkbWFpbi1jb2xvcjtcclxuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5iYXI6YmVmb3JlIHtcclxuICBsZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi5iYXI6YWZ0ZXIge1xyXG4gIHJpZ2h0OiA1MCU7XHJcbn1cclxuXHJcbi8qIGFjdGl2ZSBzdGF0ZSAqL1xyXG5pbnB1dDpmb2N1c34uYmFyOmJlZm9yZSxcclxuaW5wdXQ6Zm9jdXN+LmJhcjphZnRlciB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uaGlnaGxpZ2h0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0b3A6IDI1JTtcclxuICBsZWZ0OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLyogYWN0aXZlIHN0YXRlICovXHJcbmlucHV0OmZvY3Vzfi5oaWdobGlnaHQge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxuICAtbW96LWFuaW1hdGlvbjogaW5wdXRIaWdobGlnaHRlciAwLjNzIGVhc2U7XHJcbiAgYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLyogQU5JTUFUSU9OUyA9PT09PT09PT09PT09PT09ICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcclxuICBmcm9tIHtcclxuICAgIGJhY2tncm91bmQ6ICMwYjRjYmM7XHJcbiAgfVxyXG5cclxuICB0byB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZDogIzBiNGNiYztcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGlucHV0SGlnaGxpZ2h0ZXIge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZDogIzBiNGNiYztcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VuZC1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZ3JvdXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xyXG59XHJcblxyXG4uZ3JvdXAubWVzc2FnZSB7XHJcblxyXG4gIC8vIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgaW5wdXQge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVycm9yLWxhYmVsIHtcclxuICBjb2xvcjogI2I0M2EzYTtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG59XHJcblxyXG4uZXJyb3ItaW5wdXQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNiNDNhM2E7XHJcbn1cclxuXHJcbi5lcnJvci1lbXB0eSB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4uZXJyb3ItaW5wdXR+LmVycm9yLWVtcHR5IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2VuZC1idXR0b24ge1xyXG5cclxuICAuYnV0dG9uLXNlbmQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkc2VjdW5kYXJ5LWNvbG9yO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW46IDAgMCAyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjdCB7XHJcbiAgICAgIGZpbGw6IG5vbmU7XHJcbiAgICAgIHN0cm9rZTogJHNlY3VuZGFyeS1jb2xvcjtcclxuICAgICAgc3Ryb2tlLXdpZHRoOiA1O1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA0MjIsIDA7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLXNlbmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgkbWFpbi1jb2xvciwgMCk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgLy9jb2xvcjogJG1haW4tY29sb3I7XHJcblxyXG4gICAgcmVjdCB7XHJcbiAgICAgIHN0cm9rZTogJG1haW4tY29sb3I7XHJcbiAgICAgIHN0cm9rZS13aWR0aDogNTtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTUsIDMxMDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMS4zNXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29udGFjdC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xuICBwYWRkaW5nLXRvcDogODBweDtcbn1cblxuLnRpdGxlLXByaW5jaXBhbCB7XG4gIG1hcmdpbjogMDtcbn1cbi50aXRsZS1wcmluY2lwYWw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzI1YztcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbmltYXRpb246IHdpZHRoIDFzIGVhc2UtaW4tb3V0O1xufVxuXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jb250YWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogODUlO1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG5cbiAgLnRpdGxlLXByaW5jaXBhbCB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICB9XG5cbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuaW5wdXQge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMTAwO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogIzI3MjQyZjtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG5cbi8qIENoYW5nZSBBdXRvY29tcGxldGUgc3R5bGVzIGluIENocm9tZSovXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxuaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbDpob3ZlcixcbnRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXG5zZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbCxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMge1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDBweCAxMDAwcHggcmdiYSgwLCAwLCAwLCAwKSBpbnNldDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciA1MDAwcyBlYXNlLWluLW91dCAwcztcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiAjOTk5O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGxlZnQ6IDVweDtcbiAgdG9wOiAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbn1cblxuaW5wdXQ6Zm9jdXMgfiBsYWJlbCxcbi5pbnB1dC1maWxsZWQgfiBsYWJlbCB7XG4gIHRvcDogLTIwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsZWZ0OiAwO1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5iYXI6YmVmb3JlLFxuLmJhcjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMnB4O1xuICB3aWR0aDogMDtcbiAgYm90dG9tOiAxcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmYWYyOTtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlIGFsbDtcbiAgLW1vei10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG59XG5cbi5iYXI6YmVmb3JlIHtcbiAgbGVmdDogNTAlO1xufVxuXG4uYmFyOmFmdGVyIHtcbiAgcmlnaHQ6IDUwJTtcbn1cblxuLyogYWN0aXZlIHN0YXRlICovXG5pbnB1dDpmb2N1cyB+IC5iYXI6YmVmb3JlLFxuaW5wdXQ6Zm9jdXMgfiAuYmFyOmFmdGVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLyogSElHSExJR0hURVIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuLmhpZ2hsaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA2MCU7XG4gIHdpZHRoOiA1MCU7XG4gIHRvcDogMjUlO1xuICBsZWZ0OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4vKiBhY3RpdmUgc3RhdGUgKi9cbmlucHV0OmZvY3VzIH4gLmhpZ2hsaWdodCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBpbnB1dEhpZ2hsaWdodGVyIDAuM3MgZWFzZTtcbiAgLW1vei1hbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xuICBhbmltYXRpb246IGlucHV0SGlnaGxpZ2h0ZXIgMC4zcyBlYXNlO1xufVxuXG4vKiBBTklNQVRJT05TID09PT09PT09PT09PT09PT0gKi9cbkAtd2Via2l0LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZDogIzBiNGNiYztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBpbnB1dEhpZ2hsaWdodGVyIHtcbiAgZnJvbSB7XG4gICAgYmFja2dyb3VuZDogIzBiNGNiYztcbiAgfVxuICB0byB7XG4gICAgd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaW5wdXRIaWdobGlnaHRlciB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQ6ICMwYjRjYmM7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAwO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG59XG4uc2VuZC1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyN3B4O1xufVxuXG4uZ3JvdXAubWVzc2FnZSBpbnB1dCB7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmVycm9yLWxhYmVsIHtcbiAgY29sb3I6ICNiNDNhM2E7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5lcnJvci1pbnB1dCB7XG4gIGJvcmRlcjogc29saWQgMXB4ICNiNDNhM2E7XG59XG5cbi5lcnJvci1lbXB0eSB7XG4gIGhlaWdodDogMjRweDtcbn1cblxuLmVycm9yLWlucHV0IH4gLmVycm9yLWVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNlbmQtYnV0dG9uIC5idXR0b24tc2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmMyNWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnNlbmQtYnV0dG9uIC5idXR0b24tc2VuZDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zZW5kLWJ1dHRvbiAuYnV0dG9uLXNlbmQgc3ZnIHtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VuZC1idXR0b24gLmJ1dHRvbi1zZW5kIHJlY3Qge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNmZmMyNWM7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDIyLCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xufVxuLnNlbmQtYnV0dG9uIC5idXR0b24tc2VuZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNzUsIDQxLCAwKTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cbi5zZW5kLWJ1dHRvbiAuYnV0dG9uLXNlbmQ6aG92ZXIgcmVjdCB7XG4gIHN0cm9rZTogI2ZmYWYyOTtcbiAgc3Ryb2tlLXdpZHRoOiA1O1xuICBzdHJva2UtZGFzaGFycmF5OiAxNSwgMzEwO1xuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gIHRyYW5zaXRpb246IGFsbCAxLjM1cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG59IiwiJG1haW4tY29sb3I6ICNmZmFmMjk7XHJcbiRzZWN1bmRhcnktY29sb3I6ICNmZmMyNWM7XHJcbiRjb21wbGVudGFyeS1jb2xvcjE6ICNmZmNkMjk7XHJcbiRjb21wbGVudGFyeS1jb2xvcjI6ICNmZjI5Mjk7XHJcblxyXG4kYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yOiAjMTAwZTE3O1xyXG4kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMyNzI0MmY7XHJcblxyXG5cclxuXHJcbi8vb3RoZXIgcGFsbGV0IGNvbG9yIFxyXG4vLyRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjogIzE3MTUxZTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
    getCV() {
        window.open('/assets/CV-Fernando-Arriagada.pdf', '_blank');
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 23, vars: 0, consts: [[1, "home-content"], [2, "width", "max-content"], [1, "title-principal", 2, "margin", "0"], [2, "font-size", "50px", "margin", "0"], [1, "name-home"], [1, "profession-home"], ["routerLink", "/about"], [1, "buttons"], ["routerLink", "/contact", 1, "button-send"], ["x", "0", "y", "0", "fill", "none", "width", "100%", "height", "100%"], ["href", "/assets/CV-Fernando-Arriagada.pdf", "target", "_blank", 1, "button-send", "button-download"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Hola!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bienvenid@ a mi Portafolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fernando Arriagada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "FullStack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " / ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Frontend Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " CONTACTO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "rect", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Descargar CV ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".home-content[_ngcontent-%COMP%] {\n  margin: auto;\n  color: #fff;\n  max-width: 1000px;\n  padding: 20px;\n  padding-top: 150px;\n}\n\n@media only screen and (min-width: 768px) {\n  .home-content[_ngcontent-%COMP%] {\n    padding: 150px;\n  }\n}\n\n.title-principal[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  white-space: no-wrap;\n  display: block;\n  border-right: 3px solid #f9d566;\n  -webkit-animation: typewriter 5s steps(6) infinite, blinking-cursor 0.8s infinite;\n          animation: typewriter 5s steps(6) infinite, blinking-cursor 0.8s infinite;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n@-webkit-keyframes typewriter {\n  0% {\n    width: 0;\n  }\n  25% {\n    width: 100%;\n  }\n  48% {\n    width: 100%;\n  }\n  50% {\n    width: 100%;\n  }\n  55% {\n    width: 100%;\n  }\n  75% {\n    width: 70%;\n  }\n  85% {\n    width: 30%;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@keyframes typewriter {\n  0% {\n    width: 0;\n  }\n  25% {\n    width: 100%;\n  }\n  48% {\n    width: 100%;\n  }\n  50% {\n    width: 100%;\n  }\n  55% {\n    width: 100%;\n  }\n  75% {\n    width: 70%;\n  }\n  85% {\n    width: 30%;\n  }\n  100% {\n    width: 0;\n  }\n}\n\n@-webkit-keyframes blinking-cursor {\n  from {\n    border-color: transparent;\n  }\n  to {\n    border-color: #ffc25c;\n  }\n}\n\n@keyframes blinking-cursor {\n  from {\n    border-color: transparent;\n  }\n  to {\n    border-color: #ffc25c;\n  }\n}\n\n.name-home[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 30px;\n}\n\n.name-home[_ngcontent-%COMP%]:after {\n  background-color: #ffaf29;\n  height: 2px;\n  width: 10px;\n  display: flex;\n}\n\n.name-home[_ngcontent-%COMP%]::after {\n  background-color: #ffc25c;\n  height: 4px;\n  width: 100px;\n  margin-top: 2px;\n  content: \"\";\n}\n\n.profession-home[_ngcontent-%COMP%] {\n  font-weight: 200;\n  font-size: 25px;\n  transition: all 4s;\n  color: #fff;\n  margin-bottom: 50px;\n}\n\n.profession-home[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n\n.profession-home[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffaf29;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child, .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child {\n  margin-right: 15px;\n}\n\n.button-send[_ngcontent-%COMP%] {\n  font-weight: 900;\n  text-align: center;\n  color: #ffc25c;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n\n.button-send[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.button-send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 45px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.button-send[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ffc25c;\n  stroke-width: 5;\n  stroke-dasharray: 422, 0;\n  transition: all 0.35s linear;\n}\n\n.button-send[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 175, 41, 0);\n  font-weight: 900;\n}\n\n.button-send[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  stroke: #ffaf29;\n  stroke-width: 5;\n  stroke-dasharray: 15, 310;\n  stroke-dashoffset: 48;\n  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n.button-send.button-download[_ngcontent-%COMP%] {\n  background: #ffc25c;\n  color: #100e17;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0M6XFxVc2Vyc1xcRmVybmFuZG9cXERvY3VtZW50c1xccmVwb3NpdG9yeVxccG9ydGZvbGlvLXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRTtJQUNFLGNBQUE7RUNKRjtBQUNGOztBRFNBO0VBRUUsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxpRkFBQTtVQUFBLHlFQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtBQ1JGOztBRFdBO0VBQ0U7SUFDRSxRQUFBO0VDUkY7RURXQTtJQUNFLFdBQUE7RUNURjtFRFlBO0lBQ0UsV0FBQTtFQ1ZGO0VEYUE7SUFDRSxXQUFBO0VDWEY7RURjQTtJQUNFLFdBQUE7RUNaRjtFRGVBO0lBQ0UsVUFBQTtFQ2JGO0VEZ0JBO0lBQ0UsVUFBQTtFQ2RGO0VEaUJBO0lBQ0UsUUFBQTtFQ2ZGO0FBQ0Y7O0FEaEJBO0VBQ0U7SUFDRSxRQUFBO0VDUkY7RURXQTtJQUNFLFdBQUE7RUNURjtFRFlBO0lBQ0UsV0FBQTtFQ1ZGO0VEYUE7SUFDRSxXQUFBO0VDWEY7RURjQTtJQUNFLFdBQUE7RUNaRjtFRGVBO0lBQ0UsVUFBQTtFQ2JGO0VEZ0JBO0lBQ0UsVUFBQTtFQ2RGO0VEaUJBO0lBQ0UsUUFBQTtFQ2ZGO0FBQ0Y7O0FEa0JBO0VBQ0U7SUFDRSx5QkFBQTtFQ2hCRjtFRG1CQTtJQUNFLHFCQXJFYztFQ29EaEI7QUFDRjs7QURVQTtFQUNFO0lBQ0UseUJBQUE7RUNoQkY7RURtQkE7SUFDRSxxQkFyRWM7RUNvRGhCO0FBQ0Y7O0FEb0JBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDbEJGOztBRG9CRTtFQUNFLHlCQS9FUztFQWdGVCxXQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNsQko7O0FEc0JBO0VBQ0UseUJBdEZnQjtFQXVGaEIsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ25CRjs7QUR1QkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ3BCRjs7QURzQkU7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUNwQko7O0FEc0JJO0VBQ0UsY0EzR087QUN1RmI7O0FEeUJBO0VBQ0UsYUFBQTtBQ3RCRjs7QUR5Qkk7RUFDRSxrQkFBQTtBQ3ZCTjs7QUQ2QkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0E3SGdCO0VBOEhoQixlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQzFCRjs7QUQ0QkU7RUFDRSxxQkFBQTtBQzFCSjs7QUQ4QkU7RUFDRSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUM1Qko7O0FEK0JFO0VBQ0UsVUFBQTtFQUNBLGVBekpjO0VBMEpkLGVBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDN0JKOztBRGlDQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUM5QkY7O0FEaUNFO0VBQ0UsZUF2S1M7RUF3S1QsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxvREFBQTtBQy9CSjs7QURtQ0E7RUFDRSxtQkEvS2dCO0VBZ0xoQixjQUFBO0FDaENGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7fVxyXG5cclxuJG1haW4tY29sb3I6ICNmZmFmMjk7XHJcbiRzZWN1bmRhcnktY29sb3I6ICNmZmMyNWM7XHJcblxyXG4uaG9tZS1jb250ZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuaG9tZS1jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDE1MHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4udGl0bGUtcHJpbmNpcGFsIHtcclxuXHJcbiAgd2lkdGg6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm8td3JhcDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAjZjlkNTY2O1xyXG4gIGFuaW1hdGlvbjogdHlwZXdyaXRlciA1cyBzdGVwcyg2KSBpbmZpbml0ZSwgYmxpbmtpbmctY3Vyc29yIDAuOHMgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHNcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBld3JpdGVyIHtcclxuICAwJSB7XHJcbiAgICB3aWR0aDogMFxyXG4gIH1cclxuXHJcbiAgMjUlIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG5cclxuICA0OCUge1xyXG4gICAgd2lkdGg6IDEwMCVcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG4gIH1cclxuXHJcbiAgNTUlIHtcclxuICAgIHdpZHRoOiAxMDAlXHJcbiAgfVxyXG5cclxuICA3NSUge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICB9XHJcblxyXG4gIDg1JSB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmxpbmtpbmctY3Vyc29yIHtcclxuICBmcm9tIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnRcclxuICB9XHJcblxyXG4gIHRvIHtcclxuICAgIGJvcmRlci1jb2xvcjogJHNlY3VuZGFyeS1jb2xvclxyXG4gIH1cclxufVxyXG5cclxuLm5hbWUtaG9tZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tY29sb3I7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi5uYW1lLWhvbWU6OmFmdGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2VjdW5kYXJ5LWNvbG9yO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgY29udGVudDogJyc7XHJcblxyXG59XHJcblxyXG4ucHJvZmVzc2lvbi1ob21lIHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgNHM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBhLGJ1dHRvbiB7XHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5idXR0b24tc2VuZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICRzZWN1bmRhcnktY29sb3I7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbjogMCAwIDJlbTtcclxuICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgc3ZnIHtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIHJlY3Qge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogJHNlY3VuZGFyeS1jb2xvcjtcclxuICAgIHN0cm9rZS13aWR0aDogNTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDQyMiwgMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBsaW5lYXI7XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uLXNlbmQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJG1haW4tY29sb3IsIDApO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgLy9jb2xvcjogJG1haW4tY29sb3I7XHJcblxyXG4gIHJlY3Qge1xyXG4gICAgc3Ryb2tlOiAkbWFpbi1jb2xvcjtcclxuICAgIHN0cm9rZS13aWR0aDogNTtcclxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDE1LCAzMTA7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogNDg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMS4zNXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1zZW5kLmJ1dHRvbi1kb3dubG9hZCB7XHJcbiAgYmFja2dyb3VuZDogJHNlY3VuZGFyeS1jb2xvcjtcclxuICBjb2xvcjogIzEwMGUxNztcclxufVxyXG4iLCIuaG9tZS1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaG9tZS1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAxNTBweDtcbiAgfVxufVxuLnRpdGxlLXByaW5jaXBhbCB7XG4gIHdpZHRoOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm8td3JhcDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkICNmOWQ1NjY7XG4gIGFuaW1hdGlvbjogdHlwZXdyaXRlciA1cyBzdGVwcyg2KSBpbmZpbml0ZSwgYmxpbmtpbmctY3Vyc29yIDAuOHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHR5cGV3cml0ZXIge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMjUlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICA0OCUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIDUwJSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgNTUlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICA3NSUge1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbiAgODUlIHtcbiAgICB3aWR0aDogMzAlO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJsaW5raW5nLWN1cnNvciB7XG4gIGZyb20ge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgdG8ge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmYzI1YztcbiAgfVxufVxuLm5hbWUtaG9tZSB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5uYW1lLWhvbWU6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhZjI5O1xuICBoZWlnaHQ6IDJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5uYW1lLWhvbWU6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYzI1YztcbiAgaGVpZ2h0OiA0cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4ucHJvZmVzc2lvbi1ob21lIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgNHM7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLnByb2Zlc3Npb24taG9tZSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4ucHJvZmVzc2lvbi1ob21lIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmYWYyOTtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmJ1dHRvbnMgYTpmaXJzdC1jaGlsZCwgLmJ1dHRvbnMgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYnV0dG9uLXNlbmQge1xuICBmb250LXdlaWdodDogOTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZjMjVjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW46IDAgMCAyZW07XG4gIG1heC13aWR0aDogMTYwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b24tc2VuZDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5idXR0b24tc2VuZCBzdmcge1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b24tc2VuZCByZWN0IHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiAjZmZjMjVjO1xuICBzdHJva2Utd2lkdGg6IDU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDQyMiwgMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGxpbmVhcjtcbn1cblxuLmJ1dHRvbi1zZW5kOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE3NSwgNDEsIDApO1xuICBmb250LXdlaWdodDogOTAwO1xufVxuLmJ1dHRvbi1zZW5kOmhvdmVyIHJlY3Qge1xuICBzdHJva2U6ICNmZmFmMjk7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMTUsIDMxMDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xuICB0cmFuc2l0aW9uOiBhbGwgMS4zNXMgY3ViaWMtYmV6aWVyKDAuMTksIDEsIDAuMjIsIDEpO1xufVxuXG4uYnV0dG9uLXNlbmQuYnV0dG9uLWRvd25sb2FkIHtcbiAgYmFja2dyb3VuZDogI2ZmYzI1YztcbiAgY29sb3I6ICMxMDBlMTc7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/page404/page404.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/page404/page404.component.ts ***!
  \*********************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 35, vars: 0, consts: [[1, "wrapper"], [1, "container"], ["id", "scene", "data-hover-only", "false", 1, "scene"], ["data-depth", "1.2", 1, "circle"], ["data-depth", "0.9", 1, "one"], [1, "content"], [1, "piece"], ["data-depth", "0.60", 1, "two"], ["data-depth", "0.40", 1, "three"], ["data-depth", "0.50", 1, "p404"], ["data-depth", "0.10", 1, "p404"], [1, "text"], [2, "font-size", "30px"], ["routerLink", "/", 1, "button-send"], ["x", "0", "y", "0", "fill", "none", "width", "100%", "height", "100%"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ups!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Al parecer te has perdido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "svg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "rect", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Volver a inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], button[_ngcontent-%COMP%], a[_ngcontent-%COMP%], i[_ngcontent-%COMP%], input[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  border: 0;\n  -webkit-tap-highlight-color: transparent;\n  text-decoration: none;\n  color: inherit;\n}\nh1[_ngcontent-%COMP%]:focus, h2[_ngcontent-%COMP%]:focus, h3[_ngcontent-%COMP%]:focus, h4[_ngcontent-%COMP%]:focus, h5[_ngcontent-%COMP%]:focus, h6[_ngcontent-%COMP%]:focus, p[_ngcontent-%COMP%]:focus, ul[_ngcontent-%COMP%]:focus, li[_ngcontent-%COMP%]:focus, button[_ngcontent-%COMP%]:focus, a[_ngcontent-%COMP%]:focus, i[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus, body[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  overflow: hidden;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  transition: all 0.4s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .scene[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  vertical-align: middle;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 60%;\n  top: 20% !important;\n  left: 20% !important;\n  min-width: 400px;\n  min-height: 400px;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 600px;\n  height: 600px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  -webkit-animation: content 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n          animation: content 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n}\n@-webkit-keyframes content {\n  0% {\n    width: 0;\n  }\n}\n@keyframes content {\n  0% {\n    width: 0;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 80px;\n  display: flex;\n  position: absolute;\n  border-radius: 80px;\n  z-index: 1;\n  -webkit-animation: pieceLeft 8s cubic-bezier(1, 0.06, 0.25, 1) infinite both;\n          animation: pieceLeft 8s cubic-bezier(1, 0.06, 0.25, 1) infinite both;\n}\n@-webkit-keyframes pieceLeft {\n  50% {\n    left: 80%;\n    width: 10%;\n  }\n}\n@keyframes pieceLeft {\n  50% {\n    left: 80%;\n    width: 10%;\n  }\n}\n@-webkit-keyframes pieceRight {\n  50% {\n    right: 80%;\n    width: 10%;\n  }\n}\n@keyframes pieceRight {\n  50% {\n    right: 80%;\n    width: 10%;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 90%;\n    top: 5% !important;\n    left: 5% !important;\n    min-width: 280px;\n    min-height: 280px;\n  }\n}\n@media screen and (max-height: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%] {\n    min-width: 280px;\n    min-height: 280px;\n    width: 60%;\n    height: 60%;\n    top: 20% !important;\n    left: 20% !important;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 40%;\n  min-width: 400px;\n  min-height: 500px;\n  position: absolute;\n  margin: 40px 0;\n  -webkit-animation: text 0.6s 1.8s ease backwards;\n          animation: text 0.6s 1.8s ease backwards;\n}\n@-webkit-keyframes text {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n}\n@keyframes text {\n  0% {\n    opacity: 0;\n    transform: translateY(40px);\n  }\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    min-height: 400px;\n    height: 80%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  width: 400px;\n  position: absolute;\n  bottom: 0;\n  z-index: 4;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 18px;\n  letter-spacing: 0.6px;\n  margin-bottom: 40px;\n  text-shadow: 6px 6px 10px #27242f;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 40px;\n  padding: 0 30px;\n  border-radius: 50px;\n  cursor: pointer;\n  box-shadow: 0px 15px 20px rgba(39, 36, 47, 0.5);\n  z-index: 3;\n  color: #27242f;\n  background-color: white;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 12px;\n  transition: all 0.3s ease;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 10px 10px -10px rgba(39, 36, 47, 0.5);\n  transform: translateY(5px);\n  background: #ff2929;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%] {\n  font-size: 200px;\n  font-weight: 700;\n  letter-spacing: 4px;\n  color: white;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  z-index: 2;\n  -webkit-animation: anime404 0.6s cubic-bezier(0.3, 0.8, 1, 1.05) both;\n          animation: anime404 0.6s cubic-bezier(0.3, 0.8, 1, 1.05) both;\n  -webkit-animation-delay: 1.2s;\n          animation-delay: 1.2s;\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%] {\n    font-size: 100px;\n  }\n}\n@-webkit-keyframes anime404 {\n  0% {\n    opacity: 0;\n    transform: scale(10) skew(20deg, 20deg);\n  }\n}\n@keyframes anime404 {\n  0% {\n    opacity: 0;\n    transform: scale(10) skew(20deg, 20deg);\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .p404[_ngcontent-%COMP%]:nth-of-type(2) {\n  color: #27242f;\n  z-index: 1;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-filter: blur(10px);\n          filter: blur(10px);\n  opacity: 0.8;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 800px;\n  height: 800px;\n  background-color: rgba(39, 36, 47, 0.2);\n  border-radius: 100%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  box-shadow: inset 5px 20px 40px rgba(39, 36, 47, 0.25), inset 5px 0px 5px rgba(39, 36, 47, 0.3), inset 5px 5px 20px rgba(39, 36, 47, 0.25), 2px 2px 5px rgba(255, 255, 255, 0.2);\n  -webkit-animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n          animation: circle 0.8s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n}\n@-webkit-keyframes circle {\n  0% {\n    width: 0;\n    height: 0;\n  }\n}\n@keyframes circle {\n  0% {\n    width: 0;\n    height: 0;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%]:before {\n    width: 400px;\n    height: 400px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 600px;\n  height: 600px;\n  background-color: rgba(39, 36, 47, 0.3);\n  border-radius: 100%;\n  box-shadow: inset 5px 20px 40px rgba(39, 36, 47, 0.25), inset 5px 0px 5px rgba(39, 36, 47, 0.3), inset 5px 5px 20px rgba(39, 36, 47, 0.25), 2px 2px 5px rgba(255, 255, 255, 0.2);\n  -webkit-animation: circle 0.8s 0.4s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n          animation: circle 0.8s 0.4s cubic-bezier(1, 0.06, 0.25, 1) backwards;\n}\n@media screen and (max-width: 1000px) {\n  .wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:before {\n    width: 300px;\n    height: 300px;\n  }\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #ffaf29 13.7%, #ffc25c 94.65%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(1) {\n  right: 15%;\n  top: 18%;\n  height: 30px;\n  width: 120px;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n  -webkit-animation-name: pieceRight;\n          animation-name: pieceRight;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(2) {\n  left: 15%;\n  top: 45%;\n  width: 150px;\n  height: 50px;\n  -webkit-animation-delay: 1s;\n          animation-delay: 1s;\n  -webkit-animation-name: pieceLeft;\n          animation-name: pieceLeft;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .one[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(3) {\n  left: 10%;\n  top: 75%;\n  height: 20px;\n  width: 70px;\n  -webkit-animation-delay: 1.5s;\n          animation-delay: 1.5s;\n  -webkit-animation-name: pieceLeft;\n          animation-name: pieceLeft;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #ffcd29 0%, #ff2929 100%);\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(1) {\n  left: 0%;\n  top: 25%;\n  height: 40px;\n  width: 120px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-name: pieceLeft;\n          animation-name: pieceLeft;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(2) {\n  right: 15%;\n  top: 35%;\n  width: 180px;\n  height: 50px;\n  -webkit-animation-delay: 2.5s;\n          animation-delay: 2.5s;\n  -webkit-animation-name: pieceRight;\n          animation-name: pieceRight;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .two[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(3) {\n  right: 10%;\n  top: 80%;\n  height: 20px;\n  width: 160px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  -webkit-animation-name: pieceRight;\n          animation-name: pieceRight;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%] {\n  background: #ff2929;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(1) {\n  left: 25%;\n  top: 35%;\n  height: 20px;\n  width: 80px;\n  -webkit-animation-name: pieceLeft;\n          animation-name: pieceLeft;\n  -webkit-animation-delay: 3.5s;\n          animation-delay: 3.5s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(2) {\n  right: 10%;\n  top: 55%;\n  width: 140px;\n  height: 40px;\n  -webkit-animation-name: pieceRight;\n          animation-name: pieceRight;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n}\n.wrapper[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .three[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .piece[_ngcontent-%COMP%]:nth-child(3) {\n  left: 40%;\n  top: 68%;\n  height: 20px;\n  width: 80px;\n  -webkit-animation-name: pieceLeft;\n          animation-name: pieceLeft;\n  -webkit-animation-delay: 4.5s;\n          animation-delay: 4.5s;\n}\n.button-send[_ngcontent-%COMP%] {\n  font-weight: 900;\n  text-align: center;\n  color: #ffc25c;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  margin: 0 0 2em;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n}\n.button-send[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n.button-send[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 45px;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.button-send[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: #ffc25c;\n  stroke-width: 5;\n  stroke-dasharray: 422, 0;\n  transition: all 0.35s linear;\n}\n.button-send[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 175, 41, 0);\n  font-weight: 900;\n}\n.button-send[_ngcontent-%COMP%]:hover   rect[_ngcontent-%COMP%] {\n  stroke: #ffaf29;\n  stroke-width: 5;\n  stroke-dasharray: 15, 310;\n  stroke-dashoffset: 48;\n  transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L0M6XFxVc2Vyc1xcRmVybmFuZG9cXERvY3VtZW50c1xccmVwb3NpdG9yeVxccG9ydGZvbGlvLXdlYi9zcmNcXGFwcFxcY29tcG9uZW50c1xccGFnZTQwNFxccGFnZTQwNC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQTs7Ozs7Ozs7Ozs7Ozs7RUFjRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FDaENGO0FEa0NFOzs7Ozs7Ozs7Ozs7OztFQUNFLFVBQUE7QUNuQko7QUQwQkE7RUFDRSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDdkJGO0FEeUJFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ3ZCSjtBRDBCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ3hCTjtBRDRCSTs7Ozs7RUFLRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDMUJOO0FENEJNOzs7OztFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3RUFBQTtVQUFBLGdFQUFBO0FDdEJSO0FEd0JRO0VBQ0U7SUFDRSxRQUFBO0VDdEJWO0FBQ0Y7QURtQlE7RUFDRTtJQUNFLFFBQUE7RUN0QlY7QUFDRjtBRDBCUTs7Ozs7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUVBLDRFQUFBO1VBQUEsb0VBQUE7QUNyQlY7QUR3QlU7RUFHRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDeEJaO0FBQ0Y7QURrQlU7RUFHRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VDeEJaO0FBQ0Y7QUQ4QlU7RUFHRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VDOUJaO0FBQ0Y7QUR3QlU7RUFHRTtJQUNFLFVBQUE7SUFDQSxVQUFBO0VDOUJaO0FBQ0Y7QURoR0U7RUFrRUU7Ozs7O0lBc0VJLFVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7RUNoQ047QUFDRjtBRHhHRTtFQTRERTs7Ozs7SUErRUksZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxvQkFBQTtFQzNCTjtBQUNGO0FEK0JJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQzdCTjtBRCtCTTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VDN0JSO0FBQ0Y7QUR5Qk07RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQzdCUjtBQUNGO0FEM0lFO0VBMkpFO0lBaUJJLGlCQUFBO0lBQ0EsV0FBQTtFQzdCTjtBQUNGO0FEK0JNO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FDN0JSO0FEL0pFO0VBZ0xJO0lBZ0JJLFdBQUE7RUM3QlI7QUFDRjtBRCtCUTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0FDN0JWO0FEZ0NRO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLFVBQUE7RUFDQSxjRWxPbUI7RUZtT25CLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQzlCVjtBRGlDVTtFQUNFLHFEQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkVoUFM7RUZpUFQsWUFBQTtBQy9CWjtBRHNDSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxxRUFBQTtVQUFBLDZEQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtBQ3BDTjtBRDVNRTtFQXFPRTtJQWNJLGdCQUFBO0VDbkNOO0FBQ0Y7QURxQ007RUFDRTtJQUNFLFVBQUE7SUFDQSx1Q0FBQTtFQ25DUjtBQUNGO0FEK0JNO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUNuQ1I7QUFDRjtBRHNDTTtFQUNFLGNFOVFxQjtFRitRckIsVUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwwQkFBQTtVQUFBLGtCQUFBO0VBQ0EsWUFBQTtBQ3BDUjtBRDJDSTtFQUNFLGtCQUFBO0FDekNOO0FEMkNNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGdMQTdSTztFQThSUCx1RUFBQTtVQUFBLCtEQUFBO0FDekNSO0FENENRO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsU0FBQTtFQzFDVjtBQUNGO0FEc0NRO0VBQ0U7SUFDRSxRQUFBO0lBQ0EsU0FBQTtFQzFDVjtBQUNGO0FEcFBFO0VBNFFJO0lBc0JJLFlBQUE7SUFDQSxhQUFBO0VDMUNSO0FBQ0Y7QURtRFE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnTEEzVEs7RUE0VEwsNEVBQUE7VUFBQSxvRUFBQTtBQ2pEVjtBRHBRRTtFQTZTTTtJQVdJLFlBQUE7SUFDQSxhQUFBO0VDaERWO0FBQ0Y7QURtRFE7RUFDRSxpRUExVUg7QUN5UlA7QURtRFU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUNqRFo7QURvRFU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNsRFo7QURxRFU7RUFDRSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNuRFo7QUQrRFE7RUFDRSw0REFsWEg7QUNxVFA7QUQrRFU7RUFDRSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUM3RFo7QURnRVU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUM5RFo7QURpRVU7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUMvRFo7QUR5RVE7RUFDRSxtQkU3Wlc7QURzVnJCO0FEeUVVO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDdkVaO0FEMEVVO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FDeEVaO0FEMkVVO0VBQ0UsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDekVaO0FEc0ZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNFemNnQjtFRjBjaEIsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUNuRkY7QURxRkU7RUFDRSxxQkFBQTtBQ25GSjtBRHVGRTtFQUNFLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQ3JGSjtBRHdGRTtFQUNFLFVBQUE7RUFDQSxlRXJlYztFRnNlZCxlQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQ3RGSjtBRDBGQTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUN2RkY7QUQwRkU7RUFDRSxlRW5mUztFRm9mVCxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9EQUFBO0FDeEZKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wYWdlNDA0L3BhZ2U0MDQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbiRtLTAxOiAkY29tcGxlbnRhcnktY29sb3IyO1xyXG4kbS0wMjogJGNvbXBsZW50YXJ5LWNvbG9yMjtcclxuXHJcbiRiZy0wMTogJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yO1xyXG4kYmctMDI6ICRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjtcclxuJGJnLTAzOiAkYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I7XHJcblxyXG4kZy0wMTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkY29tcGxlbnRhcnktY29sb3IxIDAlLCAkY29tcGxlbnRhcnktY29sb3IyIDEwMCUpO1xyXG4kZy0wMjogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAkbWFpbi1jb2xvciAxMy43JSwgJHNlY3VuZGFyeS1jb2xvciA5NC42NSUpO1xyXG5cclxuJGN1YmljOiBjdWJpYy1iZXppZXIoMC40LCAwLjM1LCAwLCAxLjUzKTtcclxuJGN1YmljMjogY3ViaWMtYmV6aWVyKDAuMTgsIDAuODksIDAuMzIsIDEuMTUpO1xyXG5cclxuJGNpcmNsZVNoYWRvdzogaW5zZXQgNXB4IDIwcHggNDBweCByZ2JhKCRiZy0wMiwgMC4yNSksXHJcbmluc2V0IDVweCAwcHggNXB4IHJnYmEoJGJnLTAzLCAwLjMpLFxyXG5pbnNldCA1cHggNXB4IDIwcHggcmdiYSgkYmctMDMsIDAuMjUpLFxyXG4ycHggMnB4IDVweCByZ2JhKHdoaXRlLCAwLjIpO1xyXG5cclxuXHJcbkBtaXhpbiBzbSB7XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBoZWlnaHQge1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OjEwMDBweCkge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzLFxyXG5oNCxcclxuaDUsXHJcbmg2LFxyXG5wLFxyXG51bCxcclxubGksXHJcbmJ1dHRvbixcclxuYSxcclxuaSxcclxuaW5wdXQsXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG5cclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC8vIFNjZW5lIGZvciB0aGUgUGFyYWxsYXggRWZmZWN0XHJcbiAgICAuc2NlbmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGwgZWxlbWVudHMnIGNvbnRhaW5lcnNcclxuICAgIC5vbmUsXHJcbiAgICAudHdvLFxyXG4gICAgLnRocmVlLFxyXG4gICAgLmNpcmNsZSxcclxuICAgIC5wNDA0IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgaGVpZ2h0OiA2MCU7XHJcbiAgICAgIHRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxlZnQ6IDIwJSAhaW1wb3J0YW50O1xyXG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuXHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBhbmltYXRpb246IGNvbnRlbnQgMC44cyBjdWJpYy1iZXppZXIoMSwgMC4wNiwgMC4yNSwgMSkgYmFja3dhcmRzO1xyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGNvbnRlbnQge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBpZWNlc1xyXG4gICAgICAgIC5waWVjZSB7XHJcbiAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogODBweDtcclxuICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgYW5pbWF0aW9uOiBwaWVjZUxlZnQgOHMgY3ViaWMtYmV6aWVyKDEsIDAuMDYsIDAuMjUsIDEpIGluZmluaXRlIGJvdGg7XHJcblxyXG5cclxuICAgICAgICAgIEBrZXlmcmFtZXMgcGllY2VMZWZ0IHtcclxuICAgICAgICAgICAgMCUge31cclxuXHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgbGVmdDogODAlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIDEwMCUge31cclxuXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQGtleWZyYW1lcyBwaWVjZVJpZ2h0IHtcclxuICAgICAgICAgICAgMCUge31cclxuXHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgcmlnaHQ6IDgwJTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAxMDAlIHt9XHJcblxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIHNtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgIHRvcDogNSUgIWltcG9ydGFudDtcclxuICAgICAgICBsZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMjgwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIGhlaWdodCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIHRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGVmdDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUZXh0IGFuZCBCdXR0b24gY29udGFpbmVyXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBtYXJnaW46IDQwcHggMDtcclxuICAgICAgYW5pbWF0aW9uOiB0ZXh0IDAuNnMgMS44cyBlYXNlIGJhY2t3YXJkcztcclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgdGV4dCB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIEBpbmNsdWRlIHNtIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYXJ0aWNsZSB7XHJcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcblxyXG5cclxuICAgICAgICBAaW5jbHVkZSBzbSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgIHRleHQtc2hhZG93OiA2cHggNnB4IDEwcHggJGJnLTAzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgMzBweDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoJGJnLTAyLCAwLjUpO1xyXG4gICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgIGNvbG9yOiAkYmctMDE7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuXHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTEwcHggcmdiYSgkYmctMDIsIDAuNSk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkbS0wMTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFRoZSA0MDQgTnVtYmVyXHJcbiAgICAucDQwNCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBhbmltYXRpb246IGFuaW1lNDA0IDAuNnMgY3ViaWMtYmV6aWVyKDAuMywgMC44LCAxLCAxLjA1KSBib3RoO1xyXG4gICAgICBhbmltYXRpb24tZGVsYXk6IDEuMnM7XHJcblxyXG4gICAgICBAaW5jbHVkZSBzbSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBhbmltZTQwNCB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMTApIHNrZXcoMjBkZWcsIDIwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIGNvbG9yOiAkYmctMDI7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cigxMHB4KTtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEJpZ2dlciBDaXJjbGVcclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGJnLTAyLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICRjaXJjbGVTaGFkb3c7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBjaXJjbGUgMC44cyBjdWJpYy1iZXppZXIoMSwgMC4wNiwgMC4yNSwgMSkgYmFja3dhcmRzO1xyXG5cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBjaXJjbGUge1xyXG4gICAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250YWluZXIgMVxyXG4gICAgLm9uZSB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuXHJcbiAgICAgICAgLy8gU21hbGxlciBDaXJjbGVcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiA2MDBweDtcclxuICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRiZy0wMiwgMC4zKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAkY2lyY2xlU2hhZG93O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBjaXJjbGUgMC44cyAwLjRzIGN1YmljLWJlemllcigxLCAwLjA2LCAwLjI1LCAxKSBiYWNrd2FyZHM7XHJcblxyXG4gICAgICAgICAgQGluY2x1ZGUgc20ge1xyXG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGllY2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGctMDI7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICByaWdodDogMTUlO1xyXG4gICAgICAgICAgICB0b3A6IDE4JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlUmlnaHQ7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICBsZWZ0OiAxNSU7XHJcbiAgICAgICAgICAgIHRvcDogNDUlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlTGVmdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICAgICAgdG9wOiA3NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMS41cztcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlTGVmdDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb250YWluZXIgMlxyXG4gICAgLnR3byB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAucGllY2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJGctMDE7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBsZWZ0OiAwJTtcclxuICAgICAgICAgICAgdG9wOiAyNSU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcGllY2VMZWZ0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDE1JTtcclxuICAgICAgICAgICAgdG9wOiAzNSU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwaWVjZVJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwJTtcclxuICAgICAgICAgICAgdG9wOiA4MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDNzO1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcGllY2VSaWdodDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29udGFpbmVyIDNcclxuICAgIC50aHJlZSB7XHJcbiAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAucGllY2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogJG0tMDE7XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMSkge1xyXG4gICAgICAgICAgICBsZWZ0OiAyNSU7XHJcbiAgICAgICAgICAgIHRvcDogMzUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tbmFtZTogcGllY2VMZWZ0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDMuNXM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICByaWdodDogMTAlO1xyXG4gICAgICAgICAgICB0b3A6IDU1JTtcclxuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBwaWVjZVJpZ2h0O1xyXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICAgICAgbGVmdDogNDAlO1xyXG4gICAgICAgICAgICB0b3A6IDY4JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlTGVmdDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiA0LjVzO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uLXNlbmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAkc2VjdW5kYXJ5LWNvbG9yO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBtYXJnaW46IDAgMCAyZW07XHJcbiAgbWF4LXdpZHRoOiAxNjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICByZWN0IHtcclxuICAgIGZpbGw6IG5vbmU7XHJcbiAgICBzdHJva2U6ICRzZWN1bmRhcnktY29sb3I7XHJcbiAgICBzdHJva2Utd2lkdGg6IDU7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiA0MjIsIDA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1zZW5kOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRtYWluLWNvbG9yLCAwKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIC8vY29sb3I6ICRtYWluLWNvbG9yO1xyXG5cclxuICByZWN0IHtcclxuICAgIHN0cm9rZTogJG1haW4tY29sb3I7XHJcbiAgICBzdHJva2Utd2lkdGg6IDU7XHJcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxNSwgMzEwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDQ4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEuMzVzIGN1YmljLWJlemllcigwLjE5LCAxLCAwLjIyLCAxKTtcclxuICB9XHJcbn1cclxuIiwiaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbnVsLFxubGksXG5idXR0b24sXG5hLFxuaSxcbmlucHV0LFxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuaDE6Zm9jdXMsXG5oMjpmb2N1cyxcbmgzOmZvY3VzLFxuaDQ6Zm9jdXMsXG5oNTpmb2N1cyxcbmg2OmZvY3VzLFxucDpmb2N1cyxcbnVsOmZvY3VzLFxubGk6Zm9jdXMsXG5idXR0b246Zm9jdXMsXG5hOmZvY3VzLFxuaTpmb2N1cyxcbmlucHV0OmZvY3VzLFxuYm9keTpmb2N1cyB7XG4gIG91dGxpbmU6IDA7XG59XG5cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuc2NlbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm9uZSxcbi53cmFwcGVyIC5jb250YWluZXIgLnR3byxcbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAucDQwNCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjAlO1xuICB0b3A6IDIwJSAhaW1wb3J0YW50O1xuICBsZWZ0OiAyMCUgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWluLWhlaWdodDogNDAwcHg7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5vbmUgLmNvbnRlbnQsXG4ud3JhcHBlciAuY29udGFpbmVyIC50d28gLmNvbnRlbnQsXG4ud3JhcHBlciAuY29udGFpbmVyIC50aHJlZSAuY29udGVudCxcbi53cmFwcGVyIC5jb250YWluZXIgLmNpcmNsZSAuY29udGVudCxcbi53cmFwcGVyIC5jb250YWluZXIgLnA0MDQgLmNvbnRlbnQge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBhbmltYXRpb246IGNvbnRlbnQgMC44cyBjdWJpYy1iZXppZXIoMSwgMC4wNiwgMC4yNSwgMSkgYmFja3dhcmRzO1xufVxuQGtleWZyYW1lcyBjb250ZW50IHtcbiAgMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5vbmUgLmNvbnRlbnQgLnBpZWNlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAudHdvIC5jb250ZW50IC5waWVjZSxcbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlIC5jb250ZW50IC5waWVjZSxcbi53cmFwcGVyIC5jb250YWluZXIgLmNpcmNsZSAuY29udGVudCAucGllY2UsXG4ud3JhcHBlciAuY29udGFpbmVyIC5wNDA0IC5jb250ZW50IC5waWVjZSB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDgwcHg7XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbjogcGllY2VMZWZ0IDhzIGN1YmljLWJlemllcigxLCAwLjA2LCAwLjI1LCAxKSBpbmZpbml0ZSBib3RoO1xufVxuQGtleWZyYW1lcyBwaWVjZUxlZnQge1xuICA1MCUge1xuICAgIGxlZnQ6IDgwJTtcbiAgICB3aWR0aDogMTAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHBpZWNlUmlnaHQge1xuICA1MCUge1xuICAgIHJpZ2h0OiA4MCU7XG4gICAgd2lkdGg6IDEwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gIC53cmFwcGVyIC5jb250YWluZXIgLm9uZSxcbi53cmFwcGVyIC5jb250YWluZXIgLnR3byxcbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAucDQwNCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICB0b3A6IDUlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogNSUgIWltcG9ydGFudDtcbiAgICBtaW4td2lkdGg6IDI4MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMTAwMHB4KSB7XG4gIC53cmFwcGVyIC5jb250YWluZXIgLm9uZSxcbi53cmFwcGVyIC5jb250YWluZXIgLnR3byxcbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlLFxuLndyYXBwZXIgLmNvbnRhaW5lciAucDQwNCB7XG4gICAgbWluLXdpZHRoOiAyODBweDtcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIHRvcDogMjAlICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMjAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRleHQge1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDQwJTtcbiAgbWluLXdpZHRoOiA0MDBweDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiA0MHB4IDA7XG4gIGFuaW1hdGlvbjogdGV4dCAwLjZzIDEuOHMgZWFzZSBiYWNrd2FyZHM7XG59XG5Aa2V5ZnJhbWVzIHRleHQge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAud3JhcHBlciAuY29udGFpbmVyIC50ZXh0IHtcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgfVxufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudGV4dCBhcnRpY2xlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogNDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAud3JhcHBlciAuY29udGFpbmVyIC50ZXh0IGFydGljbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC50ZXh0IGFydGljbGUgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIHRleHQtc2hhZG93OiA2cHggNnB4IDEwcHggIzI3MjQyZjtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRleHQgYXJ0aWNsZSBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3gtc2hhZG93OiAwcHggMTVweCAyMHB4IHJnYmEoMzksIDM2LCA0NywgMC41KTtcbiAgei1pbmRleDogMztcbiAgY29sb3I6ICMyNzI0MmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC50ZXh0IGFydGljbGUgYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtMTBweCByZ2JhKDM5LCAzNiwgNDcsIDAuNSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICBiYWNrZ3JvdW5kOiAjZmYyOTI5O1xuICBjb2xvcjogd2hpdGU7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5wNDA0IHtcbiAgZm9udC1zaXplOiAyMDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDI7XG4gIGFuaW1hdGlvbjogYW5pbWU0MDQgMC42cyBjdWJpYy1iZXppZXIoMC4zLCAwLjgsIDEsIDEuMDUpIGJvdGg7XG4gIGFuaW1hdGlvbi1kZWxheTogMS4ycztcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAud3JhcHBlciAuY29udGFpbmVyIC5wNDA0IHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICB9XG59XG5Aa2V5ZnJhbWVzIGFuaW1lNDA0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxMCkgc2tldygyMGRlZywgMjBkZWcpO1xuICB9XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC5wNDA0Om50aC1vZi10eXBlKDIpIHtcbiAgY29sb3I6ICMyNzI0MmY7XG4gIHotaW5kZXg6IDE7XG4gIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIGZpbHRlcjogYmx1cigxMHB4KTtcbiAgb3BhY2l0eTogMC44O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDgwMHB4O1xuICBoZWlnaHQ6IDgwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM5LCAzNiwgNDcsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBib3gtc2hhZG93OiBpbnNldCA1cHggMjBweCA0MHB4IHJnYmEoMzksIDM2LCA0NywgMC4yNSksIGluc2V0IDVweCAwcHggNXB4IHJnYmEoMzksIDM2LCA0NywgMC4zKSwgaW5zZXQgNXB4IDVweCAyMHB4IHJnYmEoMzksIDM2LCA0NywgMC4yNSksIDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYW5pbWF0aW9uOiBjaXJjbGUgMC44cyBjdWJpYy1iZXppZXIoMSwgMC4wNiwgMC4yNSwgMSkgYmFja3dhcmRzO1xufVxuQGtleWZyYW1lcyBjaXJjbGUge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLndyYXBwZXIgLmNvbnRhaW5lciAuY2lyY2xlOmJlZm9yZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gIH1cbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm9uZSAuY29udGVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOSwgMzYsIDQ3LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiBpbnNldCA1cHggMjBweCA0MHB4IHJnYmEoMzksIDM2LCA0NywgMC4yNSksIGluc2V0IDVweCAwcHggNXB4IHJnYmEoMzksIDM2LCA0NywgMC4zKSwgaW5zZXQgNXB4IDVweCAyMHB4IHJnYmEoMzksIDM2LCA0NywgMC4yNSksIDJweCAycHggNXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgYW5pbWF0aW9uOiBjaXJjbGUgMC44cyAwLjRzIGN1YmljLWJlemllcigxLCAwLjA2LCAwLjI1LCAxKSBiYWNrd2FyZHM7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLndyYXBwZXIgLmNvbnRhaW5lciAub25lIC5jb250ZW50OmJlZm9yZSB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gIH1cbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm9uZSAuY29udGVudCAucGllY2Uge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmFmMjkgMTMuNyUsICNmZmMyNWMgOTQuNjUlKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm9uZSAuY29udGVudCAucGllY2U6bnRoLWNoaWxkKDEpIHtcbiAgcmlnaHQ6IDE1JTtcbiAgdG9wOiAxOCU7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBwaWVjZVJpZ2h0O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAub25lIC5jb250ZW50IC5waWVjZTpudGgtY2hpbGQoMikge1xuICBsZWZ0OiAxNSU7XG4gIHRvcDogNDUlO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlTGVmdDtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLm9uZSAuY29udGVudCAucGllY2U6bnRoLWNoaWxkKDMpIHtcbiAgbGVmdDogMTAlO1xuICB0b3A6IDc1JTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogNzBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAxLjVzO1xuICBhbmltYXRpb24tbmFtZTogcGllY2VMZWZ0O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudHdvIC5jb250ZW50IC5waWVjZSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmY2QyOSAwJSwgI2ZmMjkyOSAxMDAlKTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnR3byAuY29udGVudCAucGllY2U6bnRoLWNoaWxkKDEpIHtcbiAgbGVmdDogMCU7XG4gIHRvcDogMjUlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgYW5pbWF0aW9uLWRlbGF5OiAycztcbiAgYW5pbWF0aW9uLW5hbWU6IHBpZWNlTGVmdDtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnR3byAuY29udGVudCAucGllY2U6bnRoLWNoaWxkKDIpIHtcbiAgcmlnaHQ6IDE1JTtcbiAgdG9wOiAzNSU7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBhbmltYXRpb24tZGVsYXk6IDIuNXM7XG4gIGFuaW1hdGlvbi1uYW1lOiBwaWVjZVJpZ2h0O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudHdvIC5jb250ZW50IC5waWVjZTpudGgtY2hpbGQoMykge1xuICByaWdodDogMTAlO1xuICB0b3A6IDgwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTYwcHg7XG4gIGFuaW1hdGlvbi1kZWxheTogM3M7XG4gIGFuaW1hdGlvbi1uYW1lOiBwaWVjZVJpZ2h0O1xufVxuLndyYXBwZXIgLmNvbnRhaW5lciAudGhyZWUgLmNvbnRlbnQgLnBpZWNlIHtcbiAgYmFja2dyb3VuZDogI2ZmMjkyOTtcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlIC5jb250ZW50IC5waWVjZTpudGgtY2hpbGQoMSkge1xuICBsZWZ0OiAyNSU7XG4gIHRvcDogMzUlO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBhbmltYXRpb24tbmFtZTogcGllY2VMZWZ0O1xuICBhbmltYXRpb24tZGVsYXk6IDMuNXM7XG59XG4ud3JhcHBlciAuY29udGFpbmVyIC50aHJlZSAuY29udGVudCAucGllY2U6bnRoLWNoaWxkKDIpIHtcbiAgcmlnaHQ6IDEwJTtcbiAgdG9wOiA1NSU7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBhbmltYXRpb24tbmFtZTogcGllY2VSaWdodDtcbiAgYW5pbWF0aW9uLWRlbGF5OiA0cztcbn1cbi53cmFwcGVyIC5jb250YWluZXIgLnRocmVlIC5jb250ZW50IC5waWVjZTpudGgtY2hpbGQoMykge1xuICBsZWZ0OiA0MCU7XG4gIHRvcDogNjglO1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBhbmltYXRpb24tbmFtZTogcGllY2VMZWZ0O1xuICBhbmltYXRpb24tZGVsYXk6IDQuNXM7XG59XG5cbi5idXR0b24tc2VuZCB7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmMyNWM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbjogMCAwIDJlbTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbi1zZW5kOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmJ1dHRvbi1zZW5kIHN2ZyB7XG4gIGhlaWdodDogNDVweDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbi1zZW5kIHJlY3Qge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6ICNmZmMyNWM7XG4gIHN0cm9rZS13aWR0aDogNTtcbiAgc3Ryb2tlLWRhc2hhcnJheTogNDIyLCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zNXMgbGluZWFyO1xufVxuXG4uYnV0dG9uLXNlbmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTc1LCA0MSwgMCk7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uYnV0dG9uLXNlbmQ6aG92ZXIgcmVjdCB7XG4gIHN0cm9rZTogI2ZmYWYyOTtcbiAgc3Ryb2tlLXdpZHRoOiA1O1xuICBzdHJva2UtZGFzaGFycmF5OiAxNSwgMzEwO1xuICBzdHJva2UtZGFzaG9mZnNldDogNDg7XG4gIHRyYW5zaXRpb246IGFsbCAxLjM1cyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XG59IiwiJG1haW4tY29sb3I6ICNmZmFmMjk7XHJcbiRzZWN1bmRhcnktY29sb3I6ICNmZmMyNWM7XHJcbiRjb21wbGVudGFyeS1jb2xvcjE6ICNmZmNkMjk7XHJcbiRjb21wbGVudGFyeS1jb2xvcjI6ICNmZjI5Mjk7XHJcblxyXG4kYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yOiAjMTAwZTE3O1xyXG4kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMyNzI0MmY7XHJcblxyXG5cclxuXHJcbi8vb3RoZXIgcGFsbGV0IGNvbG9yIFxyXG4vLyRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjogIzE3MTUxZTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Page404Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page404',
                templateUrl: './page404.component.html',
                styleUrls: ['./page404.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/projects/projects.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/projects/projects.component.ts ***!
  \***********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["app-projects"]], decls: 116, vars: 0, consts: [[1, "project-content"], [1, "title-principal"], [1, "list-container"], [1, "project-card"], [1, "img-container"], ["src", "assets/projects/planify.png"], [1, "text-container"], [1, "project-description"], ["src", "assets/projects/totem.png"], ["src", "assets/projects/safecheck.jpg"], ["src", "assets/projects/siscom.png"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mi Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Planify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Plataforma para managment de proyectos de construcci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Mi Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Revisor de merges request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Selecci\u00F3n de frameworks y librerias principales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Desarroll\u00E9 la estructura principal de modulos, rutas y componentes de forma escalable y carga Lazy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Mensajer\u00EDa push con Web-Sockets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Desarroll\u00E9 los servicios de auntentificaci\u00F3n y permisos para roles de usuarios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Pruebas unitarias con Karma de componentes de Angular 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Colabor\u00E9 en desarrollo de endpoints y Pruebas de integraci\u00F3n Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Espacios .CO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Plataforma para gesti\u00F3n de eventos con lector NFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mi Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Planificaci\u00F3n y mockup de vistas de app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Scrum Master para cordinaci\u00F3n de equipos en desarrollo de softwares \u00E1giles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Desarrollo de arquitectura frontend de app en Angular 8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Desarrollo backend en python 3.7 con framework Django. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Revisor de merges en Gitlab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Pruebas unitarias con Karma de componentes de Angular 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Colabor\u00E9 en desarrollo de endpoints y Pruebas de integraci\u00F3n Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "SafeCheck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Plataforma de busqueda de antecedentes penales");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Mi Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Planificaci\u00F3n y mockup de vistas de app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Scrum Master para cordinaci\u00F3n de equipos en desarrollo de softwares \u00E1giles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Desarrollo de arquitectura frontend de app en Angular 8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Desarrollo backend en python 3.7 con framework Django. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Revisor de merges en Gitlab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Pruebas unitarias con Karma de componentes de Angular 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Colabor\u00E9 en desarrollo de endpoints y Pruebas de integraci\u00F3n Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Siscom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Sistema de c\u00E1lculo de comisiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odio, quasi hic. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Mi Trabajo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Planificaci\u00F3n y mockup de vistas de app. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Scrum Master para cordinaci\u00F3n de equipos en desarrollo de softwares \u00E1giles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Desarrollo de arquitectura frontend de app en Angular 8.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Desarrollo backend en python 3.7 con framework Django. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Revisor de merges en Gitlab.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Pruebas unitarias con Karma de componentes de Angular 9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Colabor\u00E9 en desarrollo de endpoints y Pruebas de integraci\u00F3n Django");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".project-content[_ngcontent-%COMP%] {\n  margin: auto;\n  width: 98%;\n  color: #fff;\n  margin: auto;\n  max-width: 1000px;\n  padding-top: 80px;\n}\n\n.project-card[_ngcontent-%COMP%] {\n  display: flex;\n  background: #27242f;\n  padding: 20px;\n  margin-bottom: 30px;\n  box-shadow: 9px 11px 18px -3px rgba(0, 0, 0, 0.68);\n}\n\n.project-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 15px;\n  display: block;\n}\n\n.project-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  box-shadow: 9px 11px 18px -3px rgba(0, 0, 0, 0.55);\n}\n\n.project-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.project-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  opacity: 0.7;\n}\n\n.project-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 15px;\n  display: flex;\n  align-items: flex-end;\n}\n\n.project-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   .project-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.85;\n  line-height: 30px;\n}\n\n.project-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0px;\n}\n\n.project-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 18px;\n  opacity: 0.7;\n}\n\n@media only screen and (max-width: 768px) {\n  .project-description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n.title-principal[_ngcontent-%COMP%]::after {\n  background-color: #ffc25c;\n  height: 5px;\n  width: 200px;\n  margin-top: 2px;\n  content: \"\";\n  display: flex;\n  -webkit-animation: width 1s ease-in-out;\n          animation: width 1s ease-in-out;\n}\n\n@-webkit-keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n\n@keyframes width {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 200px;\n  }\n}\n\n.techs-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-self: center;\n}\n\n.techs-row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  margin: 5px 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .project-content[_ngcontent-%COMP%] {\n    padding: 0px;\n    width: 90%;\n    padding-top: 80px;\n  }\n\n  .project-card[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .project-card[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%], .project-card[_ngcontent-%COMP%]   .text-container[_ngcontent-%COMP%] {\n    width: initial;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByb2plY3RzXFxwcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxzdHlsZXNcXGNvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURPQTtFQUNJLGFBQUE7RUFDQSxtQkVWeUI7RUZXekIsYUFBQTtFQUNBLG1CQUFBO0VBR0Esa0RBQUE7QUNKSjs7QURNSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0pSOztBRE9RO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBR0Esa0RBQUE7QUNMWjs7QURRUTtFQUNJLFdBQUE7QUNOWjs7QURTUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNQWjs7QURXSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBR0EsYUFBQTtFQUlBLHFCQUFBO0FDVFI7O0FEWVk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FDVmhCOztBRGNRO0VBQ0ksV0FBQTtBQ1paOztBRG1CUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNqQlo7O0FEdUJBO0VBRVE7SUFDSSxVQUFBO0VDckJWO0FBQ0Y7O0FENEJJO0VBQ0UseUJFL0ZZO0VGZ0daLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQzFCTjs7QUQ4QkE7RUFDQTtJQUNJLFFBQUE7RUMzQkY7RUQ4QkY7SUFDSSxZQUFBO0VDNUJGO0FBQ0Y7O0FEcUJBO0VBQ0E7SUFDSSxRQUFBO0VDM0JGO0VEOEJGO0lBQ0ksWUFBQTtFQzVCRjtBQUNGOztBRCtCQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtBQzdCSjs7QUQrQkk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUM3QlI7O0FEaUNBO0VBRUk7SUFDSSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VDL0JOOztFRGtDRTtJQUNJLGNBQUE7RUMvQk47RURpQ007SUFDSSxjQUFBO0VDL0JWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG46aG9zdCB7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDk4JTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogODBweDtcclxufVxyXG5cclxuLnByb2plY3QtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsMCwwLDAuNjgpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiA5cHggMTFweCAxOHB4IC0zcHggcmdiYSgwLDAsMCwwLjY4KTtcclxuICAgIGJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsMCwwLDAuNjgpO1xyXG5cclxuICAgIC5pbWctY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIG1hcmdpbjogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiA5cHggMTFweCAxOHB4IC0zcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiA5cHggMTFweCAxOHB4IC0zcHggcmdiYSgwLDAsMCwwLjU1KTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogOXB4IDExcHggMThweCAtM3B4IHJnYmEoMCwwLDAsMC41NSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBtYXJnaW46IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLW1zLWZsZXgtYWxpZ246IGZsZXgtZW5kO1xyXG4gICAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44NTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLnRpdGxlLXByaW5jaXBhbCB7XHJcbiAgXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWN1bmRhcnktY29sb3I7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYW5pbWF0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICAgIH1cclxufVxyXG4gIFxyXG5Aa2V5ZnJhbWVzIHdpZHRoIHtcclxuMCUge1xyXG4gICAgd2lkdGg6IDBcclxufVxyXG5cclxuMTAwJSB7XHJcbiAgICB3aWR0aDogMjAwcHhcclxufVxyXG59XHJcblxyXG4udGVjaHMtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuXHJcbiAgICAucHJvamVjdC1jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcclxuICAgICAgfVxyXG5cclxuICAgIC5wcm9qZWN0LWNhcmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAuaW1nLWNvbnRhaW5lciwgLnRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCIucHJvamVjdC1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogOTglO1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjMjcyNDJmO1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNjgpO1xuICAtbW96LWJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNjgpO1xuICBib3gtc2hhZG93OiA5cHggMTFweCAxOHB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjY4KTtcbn1cbi5wcm9qZWN0LWNhcmQgLmltZy1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnByb2plY3QtY2FyZCAuaW1nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICAtbW96LWJveC1zaGFkb3c6IDlweCAxMXB4IDE4cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuNTUpO1xuICBib3gtc2hhZG93OiA5cHggMTFweCAxOHB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjU1KTtcbn1cbi5wcm9qZWN0LWNhcmQgLmltZy1jb250YWluZXIgaDIge1xuICBtYXJnaW46IDBweDtcbn1cbi5wcm9qZWN0LWNhcmQgLmltZy1jb250YWluZXIgcCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgb3BhY2l0eTogMC43O1xufVxuLnByb2plY3QtY2FyZCAudGV4dC1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDE1cHg7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBmbGV4LWVuZDtcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIC13ZWJraXQtYm94LWFsaWduOiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLnByb2plY3QtY2FyZCAudGV4dC1jb250YWluZXIgLnByb2plY3QtZGVzY3JpcHRpb24gdWwge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG9wYWNpdHk6IDAuODU7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLnByb2plY3QtY2FyZCAudGV4dC1jb250YWluZXIgaDIge1xuICBtYXJnaW46IDBweDtcbn1cbi5wcm9qZWN0LWNhcmQgLnRleHQtY29udGFpbmVyIHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG9wYWNpdHk6IDAuNztcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucHJvamVjdC1kZXNjcmlwdGlvbiB1bCB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuLnRpdGxlLXByaW5jaXBhbDo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMjVjO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFuaW1hdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgd2lkdGgge1xuICAwJSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4udGVjaHMtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG4udGVjaHMtcm93IGltZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDVweCAxMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9qZWN0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICB9XG5cbiAgLnByb2plY3QtY2FyZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnByb2plY3QtY2FyZCAuaW1nLWNvbnRhaW5lciwgLnByb2plY3QtY2FyZCAudGV4dC1jb250YWluZXIge1xuICAgIHdpZHRoOiBpbml0aWFsO1xuICB9XG59IiwiJG1haW4tY29sb3I6ICNmZmFmMjk7XHJcbiRzZWN1bmRhcnktY29sb3I6ICNmZmMyNWM7XHJcbiRjb21wbGVudGFyeS1jb2xvcjE6ICNmZmNkMjk7XHJcbiRjb21wbGVudGFyeS1jb2xvcjI6ICNmZjI5Mjk7XHJcblxyXG4kYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yOiAjMTAwZTE3O1xyXG4kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMyNzI0MmY7XHJcblxyXG5cclxuXHJcbi8vb3RoZXIgcGFsbGV0IGNvbG9yIFxyXG4vLyRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjogIzE3MTUxZTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/skills/skills.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/skills/skills.component.ts ***!
  \*******************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SkillsComponent {
    constructor() { }
    ngOnInit() {
    }
}
SkillsComponent.ɵfac = function SkillsComponent_Factory(t) { return new (t || SkillsComponent)(); };
SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkillsComponent, selectors: [["app-skills"]], decls: 26, vars: 0, consts: [[1, "skills-content"], [1, "title-principal"], [1, "section-skills"], [1, "row-skills"], ["src", "assets/skills/angular.png"], ["src", "assets/skills/javascript.png"], ["src", "assets/skills/jquery.svg"], ["src", "assets/skills/css3.svg"], ["src", "assets/skills/typescript.png"], ["src", "assets/skills/python.png"], ["src", "assets/skills/node-js.png"], ["src", "assets/skills/docker.png"], ["src", "assets/skills/adobe-illustrator.svg"], ["src", "assets/skills/adobe-xd.svg"], ["src", "assets/skills/invision.svg"]], template: function SkillsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Frontend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Backend & DevOps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n.skills-content[_ngcontent-%COMP%] {\n  margin: auto;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: #fff;\n  padding: 50px;\n}\n.section-skills[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n.section-skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n}\n.section-skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  content: \"\u00B7\";\n  font-size: 40px;\n  padding: 10px;\n}\n.section-skills[_ngcontent-%COMP%]   .row-skills[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.section-skills[_ngcontent-%COMP%]   .row-skills[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNraWxsc1xcc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0toQjtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBREhKO0FDT0E7RUFDSSxvQkFBQTtBREpKO0FDTUk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QURKUjtBQ01RO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FESlY7QUNRSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBRE5SO0FDUVE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBRE5aIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLnNraWxscy1jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uc2VjdGlvbi1za2lsbHMge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbi5zZWN0aW9uLXNraWxscyBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuLnNlY3Rpb24tc2tpbGxzIGgyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiwrdcIjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLnNlY3Rpb24tc2tpbGxzIC5yb3ctc2tpbGxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uc2VjdGlvbi1za2lsbHMgLnJvdy1za2lsbHMgaW1nIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAxMHB4O1xufSIsIjpob3N0IHtcclxufVxyXG5cclxuXHJcblxyXG4uc2tpbGxzLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLnNlY3Rpb24tc2tpbGxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG5cclxuICAgIGgyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG5cclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiBcIlxcMDBCN1wiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnJvdy1za2lsbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skills',
                templateUrl: './skills.component.html',
                styleUrls: ['./skills.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    constructor(contact = null) {
        if (contact) {
            this.name = contact.name;
            this.phone = contact.phone;
            this.email = contact.email;
            this.message = contact.message;
        }
    }
    toJSON() {
        return {
            name: this.name,
            phone: this.phone,
            email: this.email,
            message: this.message,
        };
    }
}


/***/ }),

/***/ "./src/app/shared/animation/transition.ts":
/*!************************************************!*\
  !*** ./src/app/shared/animation/transition.ts ***!
  \************************************************/
/*! exports provided: slideInAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideInAnimation", function() { return slideInAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideInAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    //IZQ -> DER
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':increment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                transform: 'translateX(0%)',
                width: '100%',
                opacity: 0.1,
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)', opacity: 0 }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
    //DER -> IZQ
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':decrement', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                transform: 'translateX(0%)',
                width: '100%',
                opacity: 0.1,
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)', opacity: 0 }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', opacity: 1 }))
            ])
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()),
    ]),
]);


/***/ }),

/***/ "./src/app/shared/menu/menu-mobile/menu-mobile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/menu/menu-mobile/menu-mobile.component.ts ***!
  \******************************************************************/
/*! exports provided: MenuMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuMobileComponent", function() { return MenuMobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0) { return { "open": a0 }; };
class MenuMobileComponent {
    constructor(router) {
        this.router = router;
        this.is_side_bar_show = false;
    }
    ngOnInit() {
    }
    setRoute(url) {
        this.router.navigate([`${url}`]);
        window.scrollTo(0, 0);
        this.is_side_bar_show = false;
    }
}
MenuMobileComponent.ɵfac = function MenuMobileComponent_Factory(t) { return new (t || MenuMobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuMobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuMobileComponent, selectors: [["app-menu-mobile"]], decls: 17, vars: 6, consts: [["id", "nav-bar", 1, "nav-ontop"], ["id", "toggle", 1, "button_container", 3, "ngClass", "click"], [1, "top"], [1, "middle"], [1, "bottom"], ["id", "overlay", 1, "overlay", 3, "ngClass"], [1, "overlay-menu"], [1, "button-menu", "button-text", 3, "click"]], template: function MenuMobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuMobileComponent_Template_div_click_1_listener() { return ctx.is_side_bar_show = !ctx.is_side_bar_show; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuMobileComponent_Template_button_click_9_listener() { return ctx.setRoute(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuMobileComponent_Template_button_click_12_listener() { return ctx.setRoute("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuMobileComponent_Template_button_click_15_listener() { return ctx.setRoute("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.is_side_bar_show));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.is_side_bar_show));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 2vw;\n  margin-top: 2vh;\n  width: 200px;\n  padding-bottom: 10px;\n}\n\n.button_container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 5%;\n  right: 2%;\n  height: 27px;\n  width: 35px;\n  cursor: pointer;\n  z-index: 100;\n  transition: opacity 0.25s ease;\n  z-index: 9999;\n}\n\n.button_container[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n\n.button_container.active[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  transform: translateY(11px) translateX(0) rotate(45deg);\n  background: #FFF;\n}\n\n.button_container.active[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  opacity: 0;\n  background: #FFF;\n}\n\n.button_container.active[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  transform: translateY(-11px) translateX(0) rotate(-45deg);\n  background: #FFF;\n}\n\n.button_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: #fff;\n  border: none;\n  height: 6px;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: all 0.35s ease;\n  cursor: pointer;\n}\n\n.button_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2) {\n  top: 11px;\n}\n\n.button_container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3) {\n  top: 22px;\n}\n\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  background: #100e17;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 0%;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 0.35s, visibility 0.35s, height 0.35s;\n  overflow: hidden;\n}\n\n.overlay.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n  height: 100%;\n  z-index: 999;\n}\n\n.overlay.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -webkit-animation: fadeInRight 0.5s ease forwards;\n          animation: fadeInRight 0.5s ease forwards;\n  -webkit-animation-delay: 0.35s;\n          animation-delay: 0.35s;\n}\n\n.overlay.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(2) {\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n}\n\n.overlay.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(3) {\n  -webkit-animation-delay: 0.45s;\n          animation-delay: 0.45s;\n}\n\n.overlay.open[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-of-type(4) {\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s;\n}\n\n.overlay[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  position: relative;\n  height: 70%;\n  top: 50%;\n  transform: translateY(-50%);\n  font-size: 50px;\n  font-weight: 400;\n  text-align: center;\n}\n\n.overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 auto;\n  display: inline-block;\n  position: relative;\n  height: 100%;\n  width: 80%;\n}\n\n.overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  height: 25%;\n  height: calc(100% / 4);\n  min-height: 50px;\n  position: relative;\n  opacity: 0;\n}\n\n.overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  color: #FFF;\n  text-decoration: none;\n  overflow: hidden;\n}\n\n.overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after, .overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus:after, .overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active:after {\n  width: 100%;\n}\n\n.overlay[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  width: 0%;\n  transform: translateX(-50%);\n  height: 3px;\n  background: #FFF;\n  transition: 0.35s;\n}\n\n@-webkit-keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    left: 20%;\n  }\n  100% {\n    opacity: 1;\n    left: 0;\n  }\n}\n\n@keyframes fadeInRight {\n  0% {\n    opacity: 0;\n    left: 20%;\n  }\n  100% {\n    opacity: 1;\n    left: 0;\n  }\n}\n\n#toggle[_ngcontent-%COMP%] {\n  display: block;\n  top: 20px !important;\n  right: 20px !important;\n  opacity: 1;\n}\n\n.button_container[_ngcontent-%COMP%]   .middle[_ngcontent-%COMP%] {\n  width: 70% !important;\n  margin-left: 30%;\n}\n\n.nav-ontop[_ngcontent-%COMP%] {\n  background: initial !important;\n  box-shadow: initial !important;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 2.5rem !important;\n}\n\n.logo-animation[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -18px;\n  right: -50px;\n  width: 200px;\n  opacity: 0.1;\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n\n.button-menu[_ngcontent-%COMP%] {\n  border: none;\n  font-family: inherit;\n  font-size: 30px;\n  color: inherit;\n  background: none;\n  cursor: pointer;\n  padding: 25px 0px;\n  display: inline-block;\n  margin: 5px 0px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n  outline: none;\n  position: relative;\n  transition: all 0.3s;\n  color: #fff;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  margin: 0px;\n  overflow: hidden;\n  width: 100%;\n}\n\n.button-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  transition: all 0.3s;\n  width: 100%;\n  height: 0;\n  top: 30%;\n  left: 50%;\n  background: #fff;\n  opacity: 0;\n  transform: translateX(-50%) translateY(-50%) rotate(110deg);\n}\n\n.button-menu[_ngcontent-%COMP%]:hover, .button-menu[_ngcontent-%COMP%]:active {\n  color: #222222;\n}\n\n.button-menu[_ngcontent-%COMP%]:hover:after {\n  height: 260%;\n  opacity: 1;\n}\n\n.button-menu[_ngcontent-%COMP%]:active:after {\n  height: 0%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS1tb2JpbGUvQzpcXFVzZXJzXFxGZXJuYW5kb1xcRG9jdW1lbnRzXFxyZXBvc2l0b3J5XFxwb3J0Zm9saW8td2ViL3NyY1xcYXBwXFxzaGFyZWRcXG1lbnVcXG1lbnUtbW9iaWxlXFxtZW51LW1vYmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tZW51L21lbnUtbW9iaWxlL0M6XFxVc2Vyc1xcRmVybmFuZG9cXERvY3VtZW50c1xccmVwb3NpdG9yeVxccG9ydGZvbGlvLXdlYi9zcmNcXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNGSjs7QURXQTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFlBUGM7RUFRZCxXQVBhO0VBUWIsZUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNSRjs7QURVRTtFQUNFLFlBQUE7QUNSSjs7QURZSTtFQUNFLHVEQUFBO0VBQ0EsZ0JBdkJTO0FDYWY7O0FEYUk7RUFDRSxVQUFBO0VBQ0EsZ0JBNUJTO0FDaUJmOztBRGNJO0VBQ0UseURBQUE7RUFDQSxnQkFqQ1M7QUNxQmY7O0FEZ0JFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDZEo7O0FEZ0JJO0VBQ0UsU0FBQTtBQ2ROOztBRGlCSTtFQUNFLFNBQUE7QUNmTjs7QURvQkE7RUFDRSxlQUFBO0VBQ0EsbUJFbEV5QjtFRm1FekIsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlEQUFBO0VBQ0EsZ0JBQUE7QUNqQkY7O0FEbUJFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNqQko7O0FEbUJJO0VBQ0UsaURBQUE7VUFBQSx5Q0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNqQk47O0FEbUJNO0VBQ0UsNkJBQUE7VUFBQSxxQkFBQTtBQ2pCUjs7QURvQk07RUFDRSw4QkFBQTtVQUFBLHNCQUFBO0FDbEJSOztBRHFCTTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7QUNuQlI7O0FEd0JFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUN0Qko7O0FEeUJFO0VBQ0UsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ3ZCSjs7QUR5Qkk7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUN2Qk47O0FEeUJNO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0EzSEs7RUE0SEwscUJBQUE7RUFDQSxnQkFBQTtBQ3ZCUjs7QUR5QlE7RUFHRSxXQUFBO0FDekJWOztBRDRCUTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQTdJRztFQThJSCxpQkFBQTtBQzFCVjs7QURpQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0VDOUJGO0VEaUNBO0lBQ0UsVUFBQTtJQUNBLE9BQUE7RUMvQkY7QUFDRjs7QURzQkE7RUFDRTtJQUNFLFVBQUE7SUFDQSxTQUFBO0VDOUJGO0VEaUNBO0lBQ0UsVUFBQTtJQUNBLE9BQUE7RUMvQkY7QUFDRjs7QURrQ0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNoQ0Y7O0FEbUNBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQ2hDRjs7QURtQ0E7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0FDaENGOztBRHNDSTtFQUNFLDRCQUFBO0FDbkNOOztBRHdDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUNyQ0Y7O0FEd0NBO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNyQ0Y7O0FEd0NBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUlBLDJEQUFBO0FDckNGOztBRHdDQTs7RUFFRSxjQUFBO0FDckNGOztBRHlDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDdENGOztBRHlDQTtFQUNFLFVBQUE7RUFDQSxVQUFBO0FDdENGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS1tb2JpbGUvbWVudS1tb2JpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbi5sb2dvIHtcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJ2dztcclxuICAgIG1hcmdpbi10b3A6IDJ2aDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuJGNvbG9yLWFjdGl2ZTogI0ZGRjtcclxuJGNvbG9yLWxpbms6ICNGRkY7XHJcbiRidXR0b24taGVpZ2h0OiAyN3B4O1xyXG4kYnV0dG9uLXdpZHRoOiAzNXB4O1xyXG5cclxuLmJ1dHRvbl9jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OiAyJTtcclxuICBoZWlnaHQ6ICRidXR0b24taGVpZ2h0O1xyXG4gIHdpZHRoOiAkYnV0dG9uLXdpZHRoO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMjVzIGVhc2U7XHJcbiAgei1pbmRleDogOTk5OTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICB9XHJcblxyXG4gICYuYWN0aXZlIHtcclxuICAgIC50b3Age1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTFweCkgdHJhbnNsYXRlWCgwKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5taWRkbGUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAkY29sb3ItYWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ib3R0b20ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTExcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKC00NWRlZyk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1hY3RpdmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgdG9wOiAyMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMCU7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMzVzLCB2aXNpYmlsaXR5IC4zNXMsIGhlaWdodCAuMzVzO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICYub3BlbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluUmlnaHQgLjVzIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogLjM1cztcclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1vZi10eXBlKDMpIHtcclxuICAgICAgICBhbmltYXRpb24tZGVsYXk6IC40NXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bnRoLW9mLXR5cGUoNCkge1xyXG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjUwcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC8gNCk7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLWxpbms7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICY6aG92ZXI6YWZ0ZXIsXHJcbiAgICAgICAgJjpmb2N1czphZnRlcixcclxuICAgICAgICAmOmFjdGl2ZTphZnRlciB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvci1saW5rO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogLjM1cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluUmlnaHQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5cclxuI3RvZ2dsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYnV0dG9uX2NvbnRhaW5lciAubWlkZGxlIHtcclxuICB3aWR0aDogNzAlICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG5cclxuLm5hdi1vbnRvcCB7XHJcbiAgYmFja2dyb3VuZDogaW5pdGlhbCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IGluaXRpYWwgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbnVsIHtcclxuICBsaSB7XHJcbiAgICBhIHtcclxuICAgICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dvLWFuaW1hdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTE4cHg7XHJcbiAgcmlnaHQ6IC01MHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBvcGFjaXR5OiAwLjE7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMSk7XHJcbn1cclxuXHJcbi5idXR0b24tbWVudSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAyNXB4IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLW1lbnU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxufVxyXG5cclxuLmJ1dHRvbi1tZW51OmhvdmVyLFxyXG4uYnV0dG9uLW1lbnU6YWN0aXZlIHtcclxuICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbWVudTpob3ZlcjphZnRlciB7XHJcbiAgaGVpZ2h0OiAyNjAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idXR0b24tbWVudTphY3RpdmU6YWZ0ZXIge1xyXG4gIGhlaWdodDogMCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIubG9nbyBpbWcge1xuICBtYXJnaW4tbGVmdDogMnZ3O1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5idXR0b25fY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDUlO1xuICByaWdodDogMiU7XG4gIGhlaWdodDogMjdweDtcbiAgd2lkdGg6IDM1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMjVzIGVhc2U7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4uYnV0dG9uX2NvbnRhaW5lcjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNztcbn1cbi5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAudG9wIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDExcHgpIHRyYW5zbGF0ZVgoMCkgcm90YXRlKDQ1ZGVnKTtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAubWlkZGxlIHtcbiAgb3BhY2l0eTogMDtcbiAgYmFja2dyb3VuZDogI0ZGRjtcbn1cbi5idXR0b25fY29udGFpbmVyLmFjdGl2ZSAuYm90dG9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMXB4KSB0cmFuc2xhdGVYKDApIHJvdGF0ZSgtNDVkZWcpO1xuICBiYWNrZ3JvdW5kOiAjRkZGO1xufVxuLmJ1dHRvbl9jb250YWluZXIgc3BhbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiA2cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5idXR0b25fY29udGFpbmVyIHNwYW46bnRoLW9mLXR5cGUoMikge1xuICB0b3A6IDExcHg7XG59XG4uYnV0dG9uX2NvbnRhaW5lciBzcGFuOm50aC1vZi10eXBlKDMpIHtcbiAgdG9wOiAyMnB4O1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzEwMGUxNztcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwJTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMzVzLCB2aXNpYmlsaXR5IDAuMzVzLCBoZWlnaHQgMC4zNXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ub3ZlcmxheS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiA5OTk7XG59XG4ub3ZlcmxheS5vcGVuIGxpIHtcbiAgYW5pbWF0aW9uOiBmYWRlSW5SaWdodCAwLjVzIGVhc2UgZm9yd2FyZHM7XG4gIGFuaW1hdGlvbi1kZWxheTogMC4zNXM7XG59XG4ub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xufVxuLm92ZXJsYXkub3BlbiBsaTpudGgtb2YtdHlwZSgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogMC40NXM7XG59XG4ub3ZlcmxheS5vcGVuIGxpOm50aC1vZi10eXBlKDQpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xufVxuLm92ZXJsYXkgbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDcwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ub3ZlcmxheSB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogODAlO1xufVxuLm92ZXJsYXkgdWwgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyNSU7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gNCk7XG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3BhY2l0eTogMDtcbn1cbi5vdmVybGF5IHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogI0ZGRjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm92ZXJsYXkgdWwgbGkgYTpob3ZlcjphZnRlciwgLm92ZXJsYXkgdWwgbGkgYTpmb2N1czphZnRlciwgLm92ZXJsYXkgdWwgbGkgYTphY3RpdmU6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5vdmVybGF5IHVsIGxpIGE6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICB3aWR0aDogMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6ICNGRkY7XG4gIHRyYW5zaXRpb246IDAuMzVzO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblJpZ2h0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgbGVmdDogMjAlO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuI3RvZ2dsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDIwcHggIWltcG9ydGFudDtcbiAgcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJ1dHRvbl9jb250YWluZXIgLm1pZGRsZSB7XG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbn1cblxuLm5hdi1vbnRvcCB7XG4gIGJhY2tncm91bmQ6IGluaXRpYWwgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG51bCBsaSBhIHtcbiAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcbn1cblxuLmxvZ28tYW5pbWF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xOHB4O1xuICByaWdodDogLTUwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgb3BhY2l0eTogMC4xO1xuICBmaWx0ZXI6IGludmVydCgxKTtcbn1cblxuLmJ1dHRvbi1tZW51IHtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAyNXB4IDBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDVweCAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXItbGVmdDogbm9uZTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBtYXJnaW46IDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24tbWVudTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAwO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlKDExMGRlZyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xufVxuXG4uYnV0dG9uLW1lbnU6aG92ZXIsXG4uYnV0dG9uLW1lbnU6YWN0aXZlIHtcbiAgY29sb3I6ICMyMjIyMjI7XG59XG5cbi5idXR0b24tbWVudTpob3ZlcjphZnRlciB7XG4gIGhlaWdodDogMjYwJTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmJ1dHRvbi1tZW51OmFjdGl2ZTphZnRlciB7XG4gIGhlaWdodDogMCU7XG4gIG9wYWNpdHk6IDE7XG59IiwiJG1haW4tY29sb3I6ICNmZmFmMjk7XHJcbiRzZWN1bmRhcnktY29sb3I6ICNmZmMyNWM7XHJcbiRjb21wbGVudGFyeS1jb2xvcjE6ICNmZmNkMjk7XHJcbiRjb21wbGVudGFyeS1jb2xvcjI6ICNmZjI5Mjk7XHJcblxyXG4kYmFja2dyb3VuZC1wcmltYXJ5LWNvbG9yOiAjMTAwZTE3O1xyXG4kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMyNzI0MmY7XHJcblxyXG5cclxuXHJcbi8vb3RoZXIgcGFsbGV0IGNvbG9yIFxyXG4vLyRiYWNrZ3JvdW5kLXNlY3VuZGFyeS1jb2xvcjogIzE3MTUxZTsiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuMobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-mobile',
                templateUrl: './menu-mobile.component.html',
                styleUrls: ['./menu-mobile.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/menu/menu-pc/menu-pc.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/menu/menu-pc/menu-pc.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuPcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPcComponent", function() { return MenuPcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "side-bar-hide": a0 }; };
class MenuPcComponent {
    constructor(router) {
        this.router = router;
        this.is_side_bar_hide = true;
    }
    ngOnInit() {
    }
    setRoute(url) {
        this.router.navigate([`${url}`]);
        window.scrollTo(0, 0);
    }
}
MenuPcComponent.ɵfac = function MenuPcComponent_Factory(t) { return new (t || MenuPcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuPcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuPcComponent, selectors: [["app-menu-pc"]], decls: 28, vars: 3, consts: [["id", "side-bar-pc", 3, "ngClass"], [2, "padding", "20px"], ["id", "icon-menu-contain"], ["id", "icon-menu", 3, "click"], [1, "button-box"], [1, "button-icon-row"], ["routerLink", "/", 1, "icon-contain"], [1, "icon", "icon-home"], [1, "button-menu", "button-text", 3, "click"], ["routerLink", "about", 1, "icon-contain"], [1, "icon", "icon-about"], ["routerLink", "contact", 1, "icon-contain"], [1, "icon", "icon-contact"]], template: function MenuPcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuPcComponent_Template_div_click_3_listener() { return ctx.is_side_bar_hide = !ctx.is_side_bar_hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuPcComponent_Template_button_click_13_listener() { return ctx.setRoute(""); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Inicio ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuPcComponent_Template_button_click_19_listener() { return ctx.setRoute("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " About me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuPcComponent_Template_button_click_25_listener() { return ctx.setRoute("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Contacto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.is_side_bar_hide));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: ["#side-bar-pc[_ngcontent-%COMP%] {\n  display: block;\n  width: 250px;\n  height: 100vh;\n  transition: width 1s;\n}\n#side-bar-pc[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  visibility: visible;\n  width: 100%;\n  transition: visibility 1s, opacity 1s linear;\n}\n#side-bar-pc.side-bar-hide[_ngcontent-%COMP%] {\n  width: 100px;\n}\n#side-bar-pc.side-bar-hide[_ngcontent-%COMP%]   .button-text[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n  width: 0px;\n  height: 0px;\n}\n#side-bar-pc.side-bar-hide[_ngcontent-%COMP%]   #icon-menu-contain[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n#side-bar-pc.side-bar-hide[_ngcontent-%COMP%]   .icon-contain[_ngcontent-%COMP%] {\n  visibility: visible;\n  opacity: 1;\n  width: initial;\n  padding: 12px;\n  transition: visibility 1s, opacity 1s linear;\n}\n#side-bar-pc[_ngcontent-%COMP%]   #icon-menu-contain[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  transition: transform 1s;\n  background: #27242f;\n  padding: 5px;\n  border-radius: 3px;\n  cursor: pointer;\n}\n#side-bar-pc[_ngcontent-%COMP%]   #icon-menu[_ngcontent-%COMP%] {\n  transition: transform 1s;\n  background-image: url('menu-icon-expand-filled.svg');\n  height: 50px;\n  width: 50px;\n  margin: 5px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n.button-icon-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.icon-contain[_ngcontent-%COMP%] {\n  width: -webkit-min-content;\n  width: -moz-min-content;\n  width: min-content;\n  transition: transform 1s;\n  background: #27242f;\n  border-radius: 3px;\n  visibility: hidden;\n  opacity: 0;\n  width: 0px;\n  padding: 0px;\n  cursor: pointer;\n}\n.icon-contain[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 35px;\n  width: 35px;\n  margin: 5px;\n  background-size: 35px;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n.icon-contain[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]::after {\n  position: absolute;\n  margin-left: 80px;\n  background: #0000000f;\n  padding: 10px 30px;\n  font-size: 18px;\n  font-weight: 600;\n  border-radius: 3px;\n  transition: all 0.5s;\n  visibility: hidden;\n  opacity: 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n}\n.icon-contain[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover::after {\n  visibility: visible;\n  width: initial;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  height: initial;\n  opacity: 1;\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-home[_ngcontent-%COMP%] {\n  background-image: url('home-run.svg');\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-home[_ngcontent-%COMP%]::after {\n  content: \"Inicio\";\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-about[_ngcontent-%COMP%] {\n  background-image: url('male-user.svg');\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-about[_ngcontent-%COMP%]::after {\n  content: \"About me\";\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-projects[_ngcontent-%COMP%] {\n  background-image: url('project-filled.svg');\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-projects[_ngcontent-%COMP%]::after {\n  content: \"Mi Trabajo\";\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-contact[_ngcontent-%COMP%] {\n  background-image: url('send.svg');\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-contact[_ngcontent-%COMP%]::after {\n  content: \"Contacto\";\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-skills[_ngcontent-%COMP%] {\n  background-image: url('list.svg');\n}\n.icon-contain[_ngcontent-%COMP%]   .icon-skills[_ngcontent-%COMP%]::after {\n  content: \"Skills\";\n}\n.button-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  margin: 0;\n  z-index: 1;\n}\n.button-box[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%] {\n  width: 70%;\n  border: 0px;\n  background-color: #555;\n  height: 1px;\n}\n.button-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: none;\n  width: 40px;\n  -webkit-filter: brightness(0) invert(1);\n          filter: brightness(0) invert(1);\n}\n.button-menu[_ngcontent-%COMP%] {\n  border: none;\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  background: none;\n  cursor: pointer;\n  padding: 25px 0px;\n  display: inline-block;\n  margin: 5px 0px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-weight: 700;\n  outline: none;\n  position: relative;\n  transition: all 0.3s;\n  color: #fff;\n  border-left: none;\n  border-right: none;\n  border-bottom: none;\n  margin: 0px;\n  overflow: hidden;\n  width: 100%;\n}\n.button-menu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -1;\n  transition: all 0.3s;\n  width: 100%;\n  height: 0;\n  top: 30%;\n  left: 50%;\n  background: #fff;\n  opacity: 0;\n  transform: translateX(-50%) translateY(-50%) rotate(110deg);\n}\n.button-menu[_ngcontent-%COMP%]:hover, .button-menu[_ngcontent-%COMP%]:active {\n  color: #222222;\n}\n.button-menu[_ngcontent-%COMP%]:hover:after {\n  height: 260%;\n  opacity: 1;\n}\n.button-menu[_ngcontent-%COMP%]:active:after {\n  height: 0%;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS1wYy9DOlxcVXNlcnNcXEZlcm5hbmRvXFxEb2N1bWVudHNcXHJlcG9zaXRvcnlcXHBvcnRmb2xpby13ZWIvc3JjXFxhcHBcXHNoYXJlZFxcbWVudVxcbWVudS1wY1xcbWVudS1wYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21lbnUvbWVudS1wYy9tZW51LXBjLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbWVudS9tZW51LXBjL0M6XFxVc2Vyc1xcRmVybmFuZG9cXERvY3VtZW50c1xccmVwb3NpdG9yeVxccG9ydGZvbGlvLXdlYi9zcmNcXHN0eWxlc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxjQUFBO0VBRUEsWUFBQTtFQUNBLGFBQUE7RUFHQSxvQkFBQTtBQ0pGO0FETUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtBQ0pKO0FET0U7RUFDRSxZQUFBO0FDTEo7QURPSTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTE47QURRSTtFQUNFLHdCQUFBO0FDTk47QURTSTtFQUNFLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNENBQUE7QUNQTjtBRFdFO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkVyQ3lCO0VGc0N6QixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDVEo7QURZRTtFQUNFLHdCQUFBO0VBQ0Esb0RBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtBQ1ZKO0FEZUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNaRjtBRGVBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkVoRTJCO0VGaUUzQixrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ1pGO0FEY0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUNaSjtBRGNJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FDWk47QURlSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDYk47QURrQkU7RUFDRSxxQ0FBQTtBQ2hCSjtBRGtCSTtFQUNFLGlCQUFBO0FDaEJOO0FEb0JFO0VBQ0Usc0NBQUE7QUNsQko7QURvQkk7RUFDRSxtQkFBQTtBQ2xCTjtBRHNCRTtFQUNFLDJDQUFBO0FDcEJKO0FEc0JJO0VBQ0UscUJBQUE7QUNwQk47QUR3QkU7RUFDRSxpQ0FBQTtBQ3RCSjtBRHdCSTtFQUNFLG1CQUFBO0FDdEJOO0FEMEJFO0VBQ0UsaUNBQUE7QUN4Qko7QUQwQkk7RUFDRSxpQkFBQTtBQ3hCTjtBRDhCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDM0JGO0FENkJFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUMzQko7QUQ4QkU7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHVDQUFBO1VBQUEsK0JBQUE7QUM1Qko7QURnQ0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUdBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUM3QkY7QURnQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBR0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBSUEsMkRBQUE7QUM3QkY7QURnQ0E7O0VBRUUsY0FBQTtBQzdCRjtBRGlDQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0FDOUJGO0FEaUNBO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUM5QkYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWVudS9tZW51LXBjL21lbnUtcGMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzcmMvc3R5bGVzL2NvbG9ycy5zY3NzJztcclxuXHJcbiNzaWRlLWJhci1wYyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMjIyMjIyO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIC8vIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgLy8gb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IHdpZHRoIDFzO1xyXG5cclxuICAuYnV0dG9uLXRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcywgb3BhY2l0eSAxcyBsaW5lYXI7XHJcbiAgfVxyXG5cclxuICAmLnNpZGUtYmFyLWhpZGUge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgIC5idXR0b24tdGV4dCB7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2ljb24tbWVudS1jb250YWluIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIC5pY29uLWNvbnRhaW4ge1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB3aWR0aDogaW5pdGlhbDtcclxuICAgICAgcGFkZGluZzogMTJweDtcclxuICAgICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcywgb3BhY2l0eSAxcyBsaW5lYXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjaWNvbi1tZW51LWNvbnRhaW4ge1xyXG4gICAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgI2ljb24tbWVudSB7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9tZW51LWljb24tZXhwYW5kLWZpbGxlZC5zdmcnKTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxuICAgIFxyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1pY29uLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24tY29udGFpbiB7XHJcbiAgd2lkdGg6IG1pbi1jb250ZW50O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcclxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmljb24ge1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzVweDtcclxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwMGY7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyOjphZnRlciB7XHJcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICAgIGhlaWdodDogaW5pdGlhbDtcclxuICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbi1ob21lIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2hvbWUtcnVuLnN2ZycpO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJJbmljaW9cIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pY29uLWFib3V0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL21hbGUtdXNlci5zdmcnKTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiQWJvdXQgbWVcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pY29uLXByb2plY3RzIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3Byb2plY3QtZmlsbGVkLnN2ZycpO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJNaSBUcmFiYWpvXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbi1jb250YWN0IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL3NlbmQuc3ZnJyk7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIkNvbnRhY3RvXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaWNvbi1za2lsbHMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvbGlzdC5zdmcnKTtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiU2tpbGxzXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmJ1dHRvbi1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIG1hcmdpbjogMDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICBociB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b24tbWVudSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAyNXB4IDBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luOiA1cHggMHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBtYXJnaW46IDBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9uLW1lbnU6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAtMTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIHRvcDogMzAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcclxufVxyXG5cclxuLmJ1dHRvbi1tZW51OmhvdmVyLFxyXG4uYnV0dG9uLW1lbnU6YWN0aXZlIHtcclxuICBjb2xvcjogIzIyMjIyMjtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbWVudTpob3ZlcjphZnRlciB7XHJcbiAgaGVpZ2h0OiAyNjAlO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5idXR0b24tbWVudTphY3RpdmU6YWZ0ZXIge1xyXG4gIGhlaWdodDogMCU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCIjc2lkZS1iYXItcGMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAxcztcbn1cbiNzaWRlLWJhci1wYyAuYnV0dG9uLXRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxcywgb3BhY2l0eSAxcyBsaW5lYXI7XG59XG4jc2lkZS1iYXItcGMuc2lkZS1iYXItaGlkZSB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiNzaWRlLWJhci1wYy5zaWRlLWJhci1oaWRlIC5idXR0b24tdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAwcHg7XG59XG4jc2lkZS1iYXItcGMuc2lkZS1iYXItaGlkZSAjaWNvbi1tZW51LWNvbnRhaW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4jc2lkZS1iYXItcGMuc2lkZS1iYXItaGlkZSAuaWNvbi1jb250YWluIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgd2lkdGg6IGluaXRpYWw7XG4gIHBhZGRpbmc6IDEycHg7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMXMsIG9wYWNpdHkgMXMgbGluZWFyO1xufVxuI3NpZGUtYmFyLXBjICNpY29uLW1lbnUtY29udGFpbiB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICBiYWNrZ3JvdW5kOiAjMjcyNDJmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NpZGUtYmFyLXBjICNpY29uLW1lbnUge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9tZW51LWljb24tZXhwYW5kLWZpbGxlZC5zdmdcIik7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi5idXR0b24taWNvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmljb24tY29udGFpbiB7XG4gIHdpZHRoOiBtaW4tY29udGVudDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICBiYWNrZ3JvdW5kOiAjMjcyNDJmO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaWNvbi1jb250YWluIC5pY29uIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogMzVweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDApIGludmVydCgxKTtcbn1cbi5pY29uLWNvbnRhaW4gLmljb246OmFmdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogODBweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDBmO1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG4uaWNvbi1jb250YWluIC5pY29uOmhvdmVyOjphZnRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIHdpZHRoOiBpbml0aWFsO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogaW5pdGlhbDtcbiAgb3BhY2l0eTogMTtcbn1cbi5pY29uLWNvbnRhaW4gLmljb24taG9tZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9ob21lLXJ1bi5zdmdcIik7XG59XG4uaWNvbi1jb250YWluIC5pY29uLWhvbWU6OmFmdGVyIHtcbiAgY29udGVudDogXCJJbmljaW9cIjtcbn1cbi5pY29uLWNvbnRhaW4gLmljb24tYWJvdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvbWFsZS11c2VyLnN2Z1wiKTtcbn1cbi5pY29uLWNvbnRhaW4gLmljb24tYWJvdXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJBYm91dCBtZVwiO1xufVxuLmljb24tY29udGFpbiAuaWNvbi1wcm9qZWN0cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9wcm9qZWN0LWZpbGxlZC5zdmdcIik7XG59XG4uaWNvbi1jb250YWluIC5pY29uLXByb2plY3RzOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiTWkgVHJhYmFqb1wiO1xufVxuLmljb24tY29udGFpbiAuaWNvbi1jb250YWN0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3NlbmQuc3ZnXCIpO1xufVxuLmljb24tY29udGFpbiAuaWNvbi1jb250YWN0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQ29udGFjdG9cIjtcbn1cbi5pY29uLWNvbnRhaW4gLmljb24tc2tpbGxzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2xpc3Quc3ZnXCIpO1xufVxuLmljb24tY29udGFpbiAuaWNvbi1za2lsbHM6OmFmdGVyIHtcbiAgY29udGVudDogXCJTa2lsbHNcIjtcbn1cblxuLmJ1dHRvbi1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMDtcbiAgei1pbmRleDogMTtcbn1cbi5idXR0b24tYm94IGhyIHtcbiAgd2lkdGg6IDcwJTtcbiAgYm9yZGVyOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gIGhlaWdodDogMXB4O1xufVxuLmJ1dHRvbi1ib3ggaW1nIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygwKSBpbnZlcnQoMSk7XG59XG5cbi5idXR0b24tbWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMjVweCAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1cHggMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBvdXRsaW5lOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uLW1lbnU6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMDtcbiAgdG9wOiAzMCU7XG4gIGxlZnQ6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgb3BhY2l0eTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpIHJvdGF0ZSgxMTBkZWcpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTEwZGVnKTtcbn1cblxuLmJ1dHRvbi1tZW51OmhvdmVyLFxuLmJ1dHRvbi1tZW51OmFjdGl2ZSB7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4uYnV0dG9uLW1lbnU6aG92ZXI6YWZ0ZXIge1xuICBoZWlnaHQ6IDI2MCU7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5idXR0b24tbWVudTphY3RpdmU6YWZ0ZXIge1xuICBoZWlnaHQ6IDAlO1xuICBvcGFjaXR5OiAxO1xufSIsIiRtYWluLWNvbG9yOiAjZmZhZjI5O1xyXG4kc2VjdW5kYXJ5LWNvbG9yOiAjZmZjMjVjO1xyXG4kY29tcGxlbnRhcnktY29sb3IxOiAjZmZjZDI5O1xyXG4kY29tcGxlbnRhcnktY29sb3IyOiAjZmYyOTI5O1xyXG5cclxuJGJhY2tncm91bmQtcHJpbWFyeS1jb2xvcjogIzEwMGUxNztcclxuJGJhY2tncm91bmQtc2VjdW5kYXJ5LWNvbG9yOiAjMjcyNDJmO1xyXG5cclxuXHJcblxyXG4vL290aGVyIHBhbGxldCBjb2xvciBcclxuLy8kYmFja2dyb3VuZC1zZWN1bmRhcnktY29sb3I6ICMxNzE1MWU7Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuPcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-pc',
                templateUrl: './menu-pc.component.html',
                styleUrls: ['./menu-pc.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-mobile/menu-mobile.component */ "./src/app/shared/menu/menu-mobile/menu-mobile.component.ts");
/* harmony import */ var _menu_pc_menu_pc_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-pc/menu-pc.component */ "./src/app/shared/menu/menu-pc/menu-pc.component.ts");




class MenuComponent {
    constructor() {
        this.is_side_bar_hide = false;
    }
    ngOnInit() {
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 2, vars: 0, template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-menu-mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu-pc");
    } }, directives: [_menu_mobile_menu_mobile_component__WEBPACK_IMPORTED_MODULE_1__["MenuMobileComponent"], _menu_pc_menu_pc_component__WEBPACK_IMPORTED_MODULE_2__["MenuPcComponent"]], styles: ["app-menu-pc[_ngcontent-%COMP%] {\n  display: block;\n}\n\napp-menu-mobile[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media only screen and (max-width: 768px) {\n  app-menu-pc[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  app-menu-mobile[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21lbnUvQzpcXFVzZXJzXFxGZXJuYW5kb1xcRG9jdW1lbnRzXFxyZXBvc2l0b3J5XFxwb3J0Zm9saW8td2ViL3NyY1xcYXBwXFxzaGFyZWRcXG1lbnVcXG1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FER0E7RUFDRTtJQUNFLHdCQUFBO0VDQUY7O0VER0E7SUFDRSx3QkFBQTtFQ0FGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLW1lbnUtcGMge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5hcHAtbWVudS1tb2JpbGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgYXBwLW1lbnUtcGMge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgYXBwLW1lbnUtbW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbiIsImFwcC1tZW51LXBjIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmFwcC1tZW51LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYXBwLW1lbnUtcGMge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIGFwcC1tZW51LW1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return []; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Documents\repository\portfolio-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map