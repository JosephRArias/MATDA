(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\e0547470\Documents\MATDA\Matda\src\main.ts */"zUnb");


/***/ }),

/***/ "7NGu":
/*!**********************************************************************!*\
  !*** ./src/app/match-configuration/match-configuration.component.ts ***!
  \**********************************************************************/
/*! exports provided: MatchConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchConfigurationComponent", function() { return MatchConfigurationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/timer.service */ "8hpD");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










const _c0 = function (a0) { return { "clicked": a0 }; };
class MatchConfigurationComponent {
    constructor(router, timer, zone) {
        this.router = router;
        this.timer = timer;
        this.zone = zone;
    }
    ngOnInit() {
        this.size = 14;
        this.selected = 'easy';
        this.time = 25;
    }
    changeDifficulty(difficulty) {
        this.selected = difficulty;
    }
    modifyTimer(operation) {
        if (operation == 'add') {
            this.time += 5;
        }
        else {
            this.time -= 5;
        }
    }
    onStart() {
        this.router.navigateByUrl('/match-process');
        this.timer.setTimer(this.time);
    }
}
MatchConfigurationComponent.ɵfac = function MatchConfigurationComponent_Factory(t) { return new (t || MatchConfigurationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
MatchConfigurationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchConfigurationComponent, selectors: [["app-match-configuration"]], decls: 34, vars: 12, consts: [["src", "../../assets/QuestionMark.png", "id", "question"], ["src", "../../assets/MatdaLogo.png", "id", "Logo"], ["for", "Difficulty"], ["nzDirection", "horizontal", 3, "nzSize"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "easy", 3, "ngClass", "click"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "medium", 3, "ngClass", "click"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "difficult", 3, "ngClass", "click"], ["for", "Time"], ["nzDirection", "horizontal", "id", "time", 3, "nzSize"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "add", 3, "click"], ["src", "../../assets/VectorAddSign.png", "id", "addSign"], ["for", "Timer"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "sustract", 3, "click"], ["src", "../../assets/VectorSustractSign.png", "id", "sustractSign"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "start", 3, "click"]], template: function MatchConfigurationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dificultad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nz-space", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_11_listener() { return ctx.changeDifficulty("easy"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Facil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_14_listener() { return ctx.changeDifficulty("medium"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Medio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_17_listener() { return ctx.changeDifficulty("difficult"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dificil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Tiempo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "nz-space", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_24_listener() { return ctx.modifyTimer("add"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_29_listener() { return ctx.modifyTimer("sus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchConfigurationComponent_Template_button_click_32_listener() { return ctx.onStart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "INICIAR PARTIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.selected == "easy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.selected == "medium"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.selected == "difficult"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.time, " seg");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  min-height: 50px;\n  line-height: 50px;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  color: #fff;\n  min-height: 120px;\n}\n\n#Logo[_ngcontent-%COMP%] {\n  width: 260.5px;\n  height: 100.1px;\n  margin-bottom: 30px;\n}\n\n#question[_ngcontent-%COMP%] {\n  width: 51.4px;\n  height: 51.4px;\n  margin-left: 731px;\n  display: inline-block;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 156px;\n  height: 44px;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 35px;\n  line-height: 48px;\n  margin-right: 5%;\n  color: #000000;\n}\n\nbutton[_ngcontent-%COMP%] {\n  background-color: #999999;\n  border: 0px;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 27px;\n  height: 50px;\n  width: 150px;\n  \n  text-align: center;\n  color: #FFFFFF;\n}\n\n.clicked[_ngcontent-%COMP%] {\n  background-color: #3ABEBC;\n}\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\n\n#add[_ngcontent-%COMP%], #sustract[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n#addSign[_ngcontent-%COMP%], #sustractSign[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n#time[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n#start[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  width: 207px;\n  height: 36px;\n  background-color: #98C93D;\n  border: none;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 20px;\n  font-weight: 400;\n  margin-left: 140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtY29uZmlndXJhdGlvbi9tYXRjaC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBREE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUlBOztBQURBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUYsNEJBQUE7RUFFRSxrQkFBQTtFQUVBLGNBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBQUE7RUFDRSxrQkFBQTtBQUdGOztBQURBO0VBQ0UsWUFBQTtBQUlGOztBQUZBO0VBQ0UsdUJBQUE7QUFLRjs7QUFIQTtFQUNFLGdCQUFBO0FBTUY7O0FBSkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU9GIiwiZmlsZSI6InNyYy9hcHAvbWF0Y2gtY29uZmlndXJhdGlvbi9tYXRjaC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG5uei1oZWFkZXJ7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxufVxyXG5uei1jb250ZW50IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtaW4taGVpZ2h0OiAxMjBweDtcclxufVxyXG5cclxuI0xvZ297XHJcbiAgd2lkdGg6IDI2MC41cHg7XHJcbiAgaGVpZ2h0OiAxMDAuMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI3F1ZXN0aW9ue1xyXG4gIHdpZHRoOiA1MS40cHg7XHJcbiAgaGVpZ2h0OiA1MS40cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDczMXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5sYWJlbHtcclxud2lkdGg6IDE1NnB4O1xyXG5oZWlnaHQ6IDQ0cHg7XHJcbmZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNzAwO1xyXG5mb250LXNpemU6IDM1cHg7XHJcbmxpbmUtaGVpZ2h0OiA0OHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDUlO1xyXG5jb2xvcjogIzAwMDAwMDtcclxuXHJcbn1cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk5OTk7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG5cclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG4uY2xpY2tlZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0FCRUJDO1xyXG59XHJcbjpob3N0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2FkZCwgI3N1c3RyYWN0e1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4jYWRkU2lnbiwgI3N1c3RyYWN0U2lnbntcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG4jdGltZXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbiNzdGFydHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAyMDdweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk4QzkzRDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchConfigurationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-match-configuration',
                templateUrl: './match-configuration.component.html',
                styleUrls: ['./match-configuration.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "8hpD":
/*!*******************************************!*\
  !*** ./src/app/services/timer.service.ts ***!
  \*******************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TimerService {
    constructor() { }
    startTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
        }, 1000);
    }
    setTimer(time) {
        this.timeLeft = time;
    }
}
TimerService.ɵfac = function TimerService_Factory(t) { return new (t || TimerService)(); };
TimerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TimerService, factory: TimerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/match.service */ "VfKn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");









class HomeComponent {
    constructor(matchService, router) {
        this.matchService = matchService;
        this.router = router;
    }
    ngOnInit() {
        this.size = 8;
    }
    onStart(state) {
        this.matchService.setMatchState(state);
        this.router.navigate(['/match-configuration']);
    }
    onSettings() {
        this.router.navigate(['/layout']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_match_service__WEBPACK_IMPORTED_MODULE_1__["MatchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 15, vars: 1, consts: [["nzDirection", "vertical", 3, "nzSize"], ["src", "../../assets/QuestionMark.png", "id", "question"], ["src", "../../assets/MatdaLogo.png", "id", "Logo"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "start", 3, "click"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "settings", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-space", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_9_listener() { return ctx.onStart(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "INICIAR PARTIDA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_13_listener() { return ctx.onSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "AJUSTES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", ctx.size);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_4__["NzSpaceItemComponent"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_5__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_6__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"]], styles: ["*[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\n\n\n#Logo[_ngcontent-%COMP%] {\n  width: 313.5px;\n  height: 122.3px;\n}\n\n#start[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 59.4px;\n  background-color: #98C93D;\n  border: none;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n}\n\n#settings[_ngcontent-%COMP%] {\n  background-color: #EA3C53;\n  font-family: \"Nunito\", sans-serif;\n  font-size: 32px;\n  font-weight: 800;\n  width: 200.8px;\n  height: 53.4px;\n  border: none;\n}\n\n#question[_ngcontent-%COMP%] {\n  width: 51.4px;\n  height: 51.4px;\n  margin-left: 731px;\n  display: inline-block;\n}\n\n#question[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nnz-layout[_ngcontent-%COMP%]:last-child {\n  margin: 0;\n}\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  color: #fff;\n  min-height: 120px;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTs7Ozs7RUFBQTs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBR0Y7O0FBREE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFJRjs7QUFGQTtFQUNFLGVBQUE7QUFLRjs7QUFIQTtFQUNFLFNBQUE7QUFNRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBRkE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFLRjs7QUFGQTtFQUNFLG1CQUFBO0FBS0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi8qbnotY29udGVudCB7XHJcbiAgcGFkZGluZzogMCA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMCU7XHJcbn0qL1xyXG4jTG9nb3tcclxuICB3aWR0aDogMzEzLjVweDtcclxuICBoZWlnaHQ6IDEyMi4zcHg7XHJcbn1cclxuI3N0YXJ0e1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDU5LjRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOThDOTNEO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuI3NldHRpbmdze1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQTNDNTM7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHdpZHRoOiAyMDAuOHB4O1xyXG4gIGhlaWdodDogNTMuNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4jcXVlc3Rpb257XHJcbiAgd2lkdGg6IDUxLjRweDtcclxuICBoZWlnaHQ6IDUxLjRweDtcclxuICBtYXJnaW4tbGVmdDogNzMxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNxdWVzdGlvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubnotbGF5b3V0Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbm56LWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _services_match_service__WEBPACK_IMPORTED_MODULE_1__["MatchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDl1JzN4b09bJtDPDiYuw7B-W8QdOhOzm8",
        authDomain: "gomath-eb07a.firebaseapp.com",
        databaseURL: "https://gomath-eb07a.firebaseio.com",
        projectId: "gomath-eb07a",
        storageBucket: "gomath-eb07a.appspot.com",
        messagingSenderId: "620474313337",
        appId: "1:620474313337:web:687c84643ef02f2f6842a8"
    }
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

/***/ "DCk1":
/*!****************************************************************!*\
  !*** ./src/app/operation-screen/operation-screen.component.ts ***!
  \****************************************************************/
/*! exports provided: OperationScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationScreenComponent", function() { return OperationScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/timer.service */ "8hpD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd/core/wave */ "RwU8");
/* harmony import */ var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-zorro-antd/core/transition-patch */ "C2AL");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");












const _c0 = ["numberDiv"];
function OperationScreenComponent_label_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SUMA O RESTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OperationScreenComponent_label_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MULTIPLICACI\u00D3N O DIVISI\u00D3N");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OperationScreenComponent_label_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "MIXTA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OperationScreenComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "LIBRE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OperationScreenComponent_label_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "RETO");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OperationScreenComponent_div_20_nz_space_item_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-input-number", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function OperationScreenComponent_div_20_nz_space_item_2_div_1_Template_nz_input_number_change_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.getResult($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzStep", 1);
} }
function OperationScreenComponent_div_20_nz_space_item_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r7);
} }
function OperationScreenComponent_div_20_nz_space_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-space-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OperationScreenComponent_div_20_nz_space_item_2_div_1_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OperationScreenComponent_div_20_nz_space_item_2_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r7 == "_");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r7 != "_");
} }
function OperationScreenComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-space", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OperationScreenComponent_div_20_nz_space_item_2_Template, 3, 2, "nz-space-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.separated);
} }
const _c1 = function (a0, a1, a2, a3, a4) { return { add: a0, multiply: a1, mix: a2, lib: a3, reto: a4 }; };
class OperationScreenComponent {
    constructor(timer, route, fb) {
        this.timer = timer;
        this.route = route;
        this.fb = fb;
        this.selected = this.route.snapshot.params.op;
        this.resultado2 = 0;
        this.arrayLength = 0;
        this.counter = 0;
        this.resultado = 0;
    }
    ngOnInit() {
        this.timer.startTimer();
        this.fb.getExercisesLength(this.fb.sign);
        this.refreshInterval = setInterval(() => {
            if (this.exercise == undefined) {
                this.fb.getExercise().subscribe(res => {
                    this.exercise = res;
                    this.ReplaceStrings();
                });
            }
            else {
                this.arrayLength = this.numberDiv.toArray().length;
                clearInterval(this.refreshInterval);
            }
        }, 1000);
        /*.subscribe(res=>{
          console.log(res);
        });*/
        console.log(+(this.timer.timeLeft.toString() + '000'));
        this.TimeOutInterval = setInterval(() => {
            document.getElementById("overlay2").style.display = "block";
        }, +(this.timer.timeLeft.toString() + '000'));
    }
    ReplaceStrings() {
        if (this.fb.sign != 'reto') {
            this.separated = this.exercise.split(' ');
            console.log(this.separated);
            this.sign = this.separated[1];
            if (this.separated[2] != '_') {
                if (this.sign == '+') {
                    this.resultado = +this.separated[2];
                    console.log(typeof (this.resultado));
                }
                else if (this.sign == '-') {
                    this.resultado = +(-this.separated[2]);
                    console.log(typeof (this.resultado));
                }
            }
            else {
                this.resultado2 = +this.separated[4];
                console.log(this.resultado2);
            }
            console.log(this.sign);
        }
        else {
            this.dare = this.exercise;
        }
    }
    getResult(event) {
        console.log(this.counter);
        console.log(this.resultado);
        if (this.sign == '+' && this.counter == 0) {
            if (this.resultado == 0) {
                this.resultado = +event.target.value;
            }
            else {
                this.resultado += +event.target.value;
            } /*
            console.log('Suma');
            console.log(typeof (event.target.value));
            /*console.log(this.resultado);
            this.resultado += event.target.value;*/
            console.log(this.resultado);
        }
        else if (this.sign == '-' && this.counter == 0) {
            console.log(this.resultado);
            if (this.resultado == 0) {
                this.resultado = +event.target.value;
            }
            else {
                this.resultado += +event.target.value;
            } /*
            console.log('Resta');
            // console.log(-event.target.value);
            console.log(typeof (event.target.value));
            //this.resultado += event.target.value;
            console.log(this.resultado);*/
        }
        this.counter++;
        console.log(this.counter);
        console.log(this.resultado);
        if (this.counter == this.arrayLength) {
            console.log(+event.target.value);
            if (this.resultado2 == 0) {
                this.resultado2 = +event.target.value;
            }
            else {
                this.resultado += +event.target.value;
            }
            console.log(this.resultado);
            console.log(this.resultado2);
            if (this.resultado == this.resultado2) {
                document.getElementById("overlay1").style.display = "block";
            }
            else {
                document.getElementById("overlay2").style.display = "block";
            }
            /*if (this.resultado === +event.target.value) {
              console.log('Resultado Correcto');
              console.log(this.resultado);
              this.correct = true;
              document.getElementById("overlay1").style.display = "block";
              console.log(this.correct);
            }
            else {
              console.log(this.resultado);
              this.correct = false;
              document.getElementById("overlay2").style.display = "block";
              console.log("Resultado Incorrecto");
            }*/
        }
    }
}
OperationScreenComponent.ɵfac = function OperationScreenComponent_Factory(t) { return new (t || OperationScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"])); };
OperationScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OperationScreenComponent, selectors: [["app-operation-screen"]], viewQuery: function OperationScreenComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.numberDiv = _t);
    } }, decls: 24, vars: 15, consts: [[3, "ngClass"], ["id", "overlay1"], ["src", "../../assets/Group 3CorrectAnswer.png"], ["id", "overlay2"], ["src", "../../assets/Group 4IncorrectAnswer.png"], ["id", "label"], ["for", "Type", 4, "ngIf"], [1, "card"], ["src", "../../assets/GroupClock.png"], ["for", "Time", "id", "timer"], ["id", "reto"], ["id", "exercise", 4, "ngIf"], ["nz-button", "", "nzType", "primary", "nzShape", "round", "id", "learn"], ["for", "Type"], ["id", "exercise"], ["nzAlign", "center", 3, "nzSize"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["numberDiv", ""], [3, "nzStep", "change"]], template: function OperationScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, OperationScreenComponent_label_7_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, OperationScreenComponent_label_8_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OperationScreenComponent_label_9_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OperationScreenComponent_label_10_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, OperationScreenComponent_label_11_Template, 2, 0, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OperationScreenComponent_div_20_Template, 3, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Aprende a resolver");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](9, _c1, ctx.selected == "sumaresta", ctx.selected == "multidivi", ctx.selected == "mix", ctx.selected == "lib", ctx.selected == "reto"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected == "sumaresta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected == "multidivi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected == "mix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected == "lib");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected == "reto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.timer.timeLeft);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dare);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exercise != "reto");
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_4__["NzContentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_6__["NzButtonComponent"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_7__["NzWaveDirective"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_8__["ɵNzTransitionPatchDirective"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_9__["NzSpaceItemComponent"], ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_10__["NzInputNumberComponent"]], styles: ["nz-content[_ngcontent-%COMP%] {\n  min-height: 488px;\n}\n\n.add[_ngcontent-%COMP%] {\n  background-color: #98C93D;\n}\n\n.multiply[_ngcontent-%COMP%] {\n  background-color: #FAB217;\n}\n\n.mix[_ngcontent-%COMP%] {\n  background-color: #EA3C53;\n}\n\n.lib[_ngcontent-%COMP%] {\n  background-color: #3ABEBC;\n}\n\n.reto[_ngcontent-%COMP%] {\n  background-color: #832676;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  height: 304.700012207px;\n  width: 767.1999511719px;\n  background: #FFFFFF;\n  margin-left: 120px;\n  margin-top: 3%;\n}\n\nlabel[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 70px;\n  color: #FFFFFF;\n}\n\n#label[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n#exercise[_ngcontent-%COMP%], #reto[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n  line-height: 70px;\n  color: #000000;\n  margin: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-left: 2.38%;\n  margin-bottom: 10px;\n}\n\n#timer[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 30px;\n  margin-left: 10px;\n}\n\nnz-input-number[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  \n  text-align: center;\n  background-color: transparent;\n  border-radius: 2px;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 40px;\n}\n\n#learn[_ngcontent-%COMP%] {\n  left: 71.04%;\n  right: 3.78%;\n  top: 5%;\n  bottom: 5.72%;\n  width: 201.5px;\n  height: 46px;\n  background: #1D2D5A;\n}\n\n#overlay1[_ngcontent-%COMP%], #overlay2[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  display: none;\n  \n  width: 100%;\n  \n  height: 100%;\n  \n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  \n  z-index: 2;\n  \n  cursor: pointer;\n  \n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3BlcmF0aW9uLXNjcmVlbi9vcGVyYXRpb24tc2NyZWVuLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLHlCQ1BnQjtBRE1sQjs7QUFHQTtFQUNFLHlCQ1RvQjtBRFN0Qjs7QUFFQTtFQUNFLHlCQ1hlO0FEWWpCOztBQUNBO0VBQ0UseUJDYmU7QURlakI7O0FBQUE7RUFDRSx5QkNmZ0I7QURrQmxCOztBQURBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJRjs7QUFGQTtFQUNFLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBUUY7O0FBTkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBU0Y7O0FBUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFXRjs7QUFUQTtFQUNFLGVBQUE7RUFBaUIsbUNBQUE7RUFDakIsYUFBQTtFQUFlLHNCQUFBO0VBQ2YsV0FBQTtFQUFhLHNDQUFBO0VBQ2IsWUFBQTtFQUFjLHVDQUFBO0VBQ2QsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQW1DLGtDQUFBO0VBQ25DLFVBQUE7RUFBWSxvRkFBQTtFQUNaLGVBQUE7RUFBaUIsMkJBQUE7RUFDakIsa0JBQUE7QUFtQkYiLCJmaWxlIjoic3JjL2FwcC9vcGVyYXRpb24tc2NyZWVuL29wZXJhdGlvbi1zY3JlZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vdmFyaWFibGVzXCI7XHJcblxyXG5uei1jb250ZW50IHtcclxuICBtaW4taGVpZ2h0OiA0ODhweDtcclxufVxyXG5cclxuLmFkZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1zdW1hO1xyXG59XHJcbi5tdWx0aXBseXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1tdWx0aXBseTtcclxufVxyXG4ubWl4e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLW1peDtcclxufVxyXG4ubGlie1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWxpYjtcclxufVxyXG4ucmV0b3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1kYXJlO1xyXG59XHJcbi5jYXJke1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzMDQuNzAwMDEyMjA3MDMxMjVweDtcclxuICB3aWR0aDogNzY3LjE5OTk1MTE3MTg3NXB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG59XHJcbmxhYmVse1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbiNsYWJlbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2V4ZXJjaXNlLCAjcmV0b3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuaW1ne1xyXG4gIG1hcmdpbi1sZWZ0OiAyLjM4JTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiN0aW1lcntcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxubnotaW5wdXQtbnVtYmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNjBweDtcclxuICAvKiBwYWRkaW5nOiAwIDExcHg7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG4jbGVhcm57XHJcbiAgbGVmdDogNzEuMDQlO1xyXG4gIHJpZ2h0OiAzLjc4JTtcclxuICB0b3A6IDUlO1xyXG4gIGJvdHRvbTogNS43MiU7XHJcbiAgd2lkdGg6IDIwMS41cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGJhY2tncm91bmQ6ICMxRDJENUE7XHJcbn1cclxuI292ZXJsYXkxLCAjb3ZlcmxheTIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU2l0IG9uIHRvcCBvZiB0aGUgcGFnZSBjb250ZW50ICovXHJcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAoY292ZXIgdGhlIHdob2xlIHBhZ2UpICovXHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgLyogQmxhY2sgYmFja2dyb3VuZCB3aXRoIG9wYWNpdHkgKi9cclxuICB6LWluZGV4OiAyOyAvKiBTcGVjaWZ5IGEgc3RhY2sgb3JkZXIgaW4gY2FzZSB5b3UncmUgdXNpbmcgYSBkaWZmZXJlbnQgb3JkZXIgZm9yIG90aGVyIGVsZW1lbnRzICovXHJcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgYSBwb2ludGVyIG9uIGhvdmVyICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiIsIiRiYWNrZ3JvdW5kLXN1bWE6ICM5OEM5M0Q7XHJcbiRiYWNrZ3JvdW5kLW11bHRpcGx5OiAjRkFCMjE3O1xyXG4kYmFja2dyb3VuZC1taXg6ICNFQTNDNTM7XHJcbiRiYWNrZ3JvdW5kLWxpYjogIzNBQkVCQztcclxuJGJhY2tncm91bmQtZGFyZTogIzgzMjY3NjtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OperationScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-operation-screen',
                templateUrl: './operation-screen.component.html',
                styleUrls: ['./operation-screen.component.scss']
            }]
    }], function () { return [{ type: _services_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"] }]; }, { numberDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['numberDiv']
        }] }); })();


/***/ }),

/***/ "P8P4":
/*!***************************************!*\
  !*** ./src/app/guards/match.guard.ts ***!
  \***************************************/
/*! exports provided: MatchGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchGuard", function() { return MatchGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_match_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/match.service */ "VfKn");




class MatchGuard {
    constructor(router, matchService) {
        this.router = router;
        this.matchService = matchService;
    }
    canActivate(route, state) {
        if (this.matchService.state) {
            console.log('Here');
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }
}
MatchGuard.ɵfac = function MatchGuard_Factory(t) { return new (t || MatchGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"])); };
MatchGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchGuard, factory: MatchGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_match_service__WEBPACK_IMPORTED_MODULE_2__["MatchService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Matda';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VfKn":
/*!*******************************************!*\
  !*** ./src/app/services/match.service.ts ***!
  \*******************************************/
/*! exports provided: MatchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchService", function() { return MatchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MatchService {
    constructor() {
        this.state = false;
    }
    setMatchState(state) {
        this.state = state;
    }
}
MatchService.ɵfac = function MatchService_Factory(t) { return new (t || MatchService)(); };
MatchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MatchService, factory: MatchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Z2Br":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class FirebaseService {
    constructor(http) {
        this.http = http;
        this.url = "https://gomath-eb07a.firebaseio.com";
    }
    getOperation() {
        this.http.get(`${this.url}/modo.json`).subscribe(res => {
            this.sign = res;
            this.getExercisesLength(this.sign);
        });
        return this.http.get(`${this.url}/modo.json`);
        //return this.http.get(`${this.url}/modo`);
    }
    getExercisesLength(type) {
        this.http.get(`${this.url}/Ejercicios/${type}.json`).subscribe(error => {
            this.RandomNum = Math.floor(Math.random() * (Object.keys(error).length) - 0);
            /*this.http.get(`${this.url}/Ejercicios/${type}/${this.RandomNum}.json`).subscribe(res=>{
              console.log(res);
            });*/
        });
        /*console.log(this.data);
        return this.data;*/
    }
    getExercise() {
        return this.http.get(`${this.url}/Ejercicios/${this.sign}/${this.RandomNum}.json`);
    }
}
FirebaseService.ɵfac = function FirebaseService_Factory(t) { return new (t || FirebaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FirebaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FirebaseService, factory: FirebaseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirebaseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _match_configuration_match_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./match-configuration/match-configuration.component */ "7NGu");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-zorro-antd/i18n */ "Rm4T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/locales/en */ "tAZD");
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-zorro-antd/button */ "OzZK");
/* harmony import */ var _guards_match_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/match.guard */ "P8P4");
/* harmony import */ var ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/breadcrumb */ "yNE/");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");
/* harmony import */ var ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-zorro-antd/radio */ "bE2y");
/* harmony import */ var _match_in_process_match_in_process_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./match-in-process/match-in-process.component */ "tLI2");
/* harmony import */ var _terminate_match_terminate_match_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./terminate-match/terminate-match.component */ "rH1B");
/* harmony import */ var _operation_screen_operation_screen_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./operation-screen/operation-screen.component */ "DCk1");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng-zorro-antd/input-number */ "z4wI");
/* harmony import */ var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-zorro-antd/input */ "PTRe");





























Object(_angular_common__WEBPACK_IMPORTED_MODULE_11__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_12___default.a);
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] }, _guards_match_guard__WEBPACK_IMPORTED_MODULE_14__["MatchGuard"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
            ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
            ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
            ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["NzBreadCrumbModule"],
            ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
            ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__["NzRadioModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
            ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__["NzInputNumberModule"],
            ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__["NzInputModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _match_configuration_match_configuration_component__WEBPACK_IMPORTED_MODULE_6__["MatchConfigurationComponent"],
        _match_in_process_match_in_process_component__WEBPACK_IMPORTED_MODULE_18__["MatchInProcessComponent"],
        _terminate_match_terminate_match_component__WEBPACK_IMPORTED_MODULE_19__["TerminateMatchComponent"],
        _operation_screen_operation_screen_component__WEBPACK_IMPORTED_MODULE_20__["OperationScreenComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
        ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
        ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
        ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["NzBreadCrumbModule"],
        ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
        ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__["NzRadioModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
        ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__["NzInputNumberModule"],
        ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__["NzInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _match_configuration_match_configuration_component__WEBPACK_IMPORTED_MODULE_6__["MatchConfigurationComponent"],
                    _match_in_process_match_in_process_component__WEBPACK_IMPORTED_MODULE_18__["MatchInProcessComponent"],
                    _terminate_match_terminate_match_component__WEBPACK_IMPORTED_MODULE_19__["TerminateMatchComponent"],
                    _operation_screen_operation_screen_component__WEBPACK_IMPORTED_MODULE_20__["OperationScreenComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                    ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutModule"],
                    ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonModule"],
                    ng_zorro_antd_breadcrumb__WEBPACK_IMPORTED_MODULE_15__["NzBreadCrumbModule"],
                    ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_16__["NzSpaceModule"],
                    ng_zorro_antd_radio__WEBPACK_IMPORTED_MODULE_17__["NzRadioModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_22__["environment"].firebaseConfig),
                    _angular_fire_database__WEBPACK_IMPORTED_MODULE_23__["AngularFireDatabaseModule"],
                    ng_zorro_antd_input_number__WEBPACK_IMPORTED_MODULE_24__["NzInputNumberModule"],
                    ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_25__["NzInputModule"]
                ],
                providers: [{ provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["NZ_I18N"], useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_10__["en_US"] }, _guards_match_guard__WEBPACK_IMPORTED_MODULE_14__["MatchGuard"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "rH1B":
/*!**************************************************************!*\
  !*** ./src/app/terminate-match/terminate-match.component.ts ***!
  \**************************************************************/
/*! exports provided: TerminateMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TerminateMatchComponent", function() { return TerminateMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");
/* harmony import */ var ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/space */ "4xsP");





class TerminateMatchComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToPage(route) {
        if (route == 'process') {
            this.router.navigate(['/match-process']);
        }
        else {
            this.router.navigate(['/']);
        }
    }
}
TerminateMatchComponent.ɵfac = function TerminateMatchComponent_Factory(t) { return new (t || TerminateMatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TerminateMatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TerminateMatchComponent, selectors: [["app-terminate-match"]], decls: 12, vars: 1, consts: [["src", "../../assets/MatdaLogo.png", "id", "Logo"], ["for", "Process"], ["id", "icons", 3, "nzSize"], ["src", "../../assets/FrameCross.png", "id", "Cross", 3, "click"], ["src", "../../assets/Check.png", "id", "Check", 3, "click"]], template: function TerminateMatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFDesea terminar la partida?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nz-space", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminateMatchComponent_Template_img_click_9_listener() { return ctx.goToPage("process"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nz-space-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TerminateMatchComponent_Template_img_click_11_listener() { return ctx.goToPage("/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("nzSize", 60);
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzHeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_2__["NzContentComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceComponent"], ng_zorro_antd_space__WEBPACK_IMPORTED_MODULE_3__["NzSpaceItemComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\nnz-header[_ngcontent-%COMP%], nz-footer[_ngcontent-%COMP%] {\n  color: #fff;\n  text-align: center;\n}\n\nnz-footer[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  min-height: 160px;\n  line-height: 100px;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  min-height: 120px;\n}\n\n#icons[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-top: 30px;\n}\n\n#Cross[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n#Cross[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n#Check[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n#Check[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 156px;\n  height: 44px;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 35px;\n  line-height: 48px;\n  color: #000000;\n}\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\n\n#Logo[_ngcontent-%COMP%] {\n  width: 313.5px;\n  height: 122.3px;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVybWluYXRlLW1hdGNoL3Rlcm1pbmF0ZS1tYXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtBQUtGOztBQUhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFNRjs7QUFKQTtFQUNFLGVBQUE7QUFPRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQVFGOztBQU5BO0VBQ0Usa0JBQUE7QUFTRjs7QUFQQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFVRiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1pbmF0ZS1tYXRjaC90ZXJtaW5hdGUtbWF0Y2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbm56LWhlYWRlcixcclxubnotZm9vdGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm56LWZvb3RlciB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxubnotaGVhZGVye1xyXG4gIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDBweDtcclxufVxyXG5uei1jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgbWluLWhlaWdodDogMTIwcHg7XHJcbn1cclxuI2ljb25ze1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbiNDcm9zc3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuI0Nyb3NzOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4jQ2hlY2t7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiNDaGVjazpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDE1NnB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjpob3N0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI0xvZ297XHJcbiAgd2lkdGg6IDMxMy41cHg7XHJcbiAgaGVpZ2h0OiAxMjIuM3B4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TerminateMatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terminate-match',
                templateUrl: './terminate-match.component.html',
                styleUrls: ['./terminate-match.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "tLI2":
/*!****************************************************************!*\
  !*** ./src/app/match-in-process/match-in-process.component.ts ***!
  \****************************************************************/
/*! exports provided: MatchInProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchInProcessComponent", function() { return MatchInProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "Z2Br");
/* harmony import */ var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd/layout */ "yW9e");





class MatchInProcessComponent {
    constructor(router, fb, _changeDetectionRef) {
        this.router = router;
        this.fb = fb;
        this._changeDetectionRef = _changeDetectionRef;
    }
    ngOnInit() {
        if (this.sign == undefined) {
            console.log(this.sign);
            setInterval(() => {
                this.fb.getOperation().subscribe(res => {
                    if (this.sign == undefined) {
                        console.log('Estoy en el if');
                        this.sign = res;
                        this.router.navigate(['/operation', this.sign]);
                    }
                });
            }, 5000);
        }
    }
    onLeave() {
        this.router.navigate(['/terminate-match']);
    }
}
MatchInProcessComponent.ɵfac = function MatchInProcessComponent_Factory(t) { return new (t || MatchInProcessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MatchInProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatchInProcessComponent, selectors: [["app-match-in-process"]], decls: 11, vars: 0, consts: [["src", "../../assets/FrameCross.png", "id", "Cross", 3, "click"], ["src", "../../assets/MatdaLogo.png", "id", "Logo"], ["for", "Process"], ["src", "../../assets/FrameCircles.png", "id", "circles"]], template: function MatchInProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nz-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nz-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatchInProcessComponent_Template_img_click_3_listener() { return ctx.onLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nz-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Partida en curso...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"]], styles: ["*[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n}\n\nnz-footer[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\nnz-header[_ngcontent-%COMP%] {\n  min-height: 50px;\n  line-height: 50px;\n}\n\nnz-content[_ngcontent-%COMP%] {\n  color: #fff;\n  min-height: 120px;\n}\n\nnz-layout[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n}\n\n#Logo[_ngcontent-%COMP%] {\n  width: 313.5px;\n  height: 122.3px;\n  margin-bottom: 30px;\n}\n\n#Cross[_ngcontent-%COMP%] {\n  width: 51.4px;\n  height: 51.4px;\n  margin-left: 731px;\n  display: inline-block;\n}\n\n#Cross[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 156px;\n  height: 44px;\n  font-family: \"Nunito\", sans-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 40px;\n  line-height: 54.56px;\n  color: #000000;\n}\n\n[_nghost-%COMP%] {\n  text-align: center;\n}\n\n#circles[_ngcontent-%COMP%] {\n  width: 538.7px;\n  height: 59.7px;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0Y2gtaW4tcHJvY2Vzcy9tYXRjaC1pbi1wcm9jZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFHRjs7QUFBQTtFQUNFLG1CQUFBO0FBR0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRjs7QUFKQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFPRiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLWluLXByb2Nlc3MvbWF0Y2gtaW4tcHJvY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxubnotZm9vdGVyIHtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbm56LWhlYWRlcntcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcbm56LWNvbnRlbnQge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG5uei1sYXlvdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XHJcbn1cclxuXHJcblxyXG4jTG9nb3tcclxuICB3aWR0aDogMzEzLjVweDtcclxuICBoZWlnaHQ6IDEyMi4zcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4jQ3Jvc3N7XHJcbiAgd2lkdGg6IDUxLjRweDtcclxuICBoZWlnaHQ6IDUxLjRweDtcclxuICBtYXJnaW4tbGVmdDogNzMxcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiNDcm9zczpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxubGFiZWx7XHJcbiAgd2lkdGg6IDE1NnB4O1xyXG4gIGhlaWdodDogNDRweDtcclxuICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NC41NnB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbjpob3N0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2NpcmNsZXN7XHJcbiAgd2lkdGg6IDUzOC43cHg7XHJcbiAgaGVpZ2h0OiA1OS43cHg7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchInProcessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-match-in-process',
                templateUrl: './match-in-process.component.html',
                styleUrls: ['./match-in-process.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _match_configuration_match_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./match-configuration/match-configuration.component */ "7NGu");
/* harmony import */ var _guards_match_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/match.guard */ "P8P4");
/* harmony import */ var _match_in_process_match_in_process_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./match-in-process/match-in-process.component */ "tLI2");
/* harmony import */ var _terminate_match_terminate_match_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terminate-match/terminate-match.component */ "rH1B");
/* harmony import */ var _operation_screen_operation_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operation-screen/operation-screen.component */ "DCk1");










const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'match-configuration', component: _match_configuration_match_configuration_component__WEBPACK_IMPORTED_MODULE_3__["MatchConfigurationComponent"], canActivate: [_guards_match_guard__WEBPACK_IMPORTED_MODULE_4__["MatchGuard"]] },
    { path: 'match-process', component: _match_in_process_match_in_process_component__WEBPACK_IMPORTED_MODULE_5__["MatchInProcessComponent"], canActivate: [_guards_match_guard__WEBPACK_IMPORTED_MODULE_4__["MatchGuard"]] },
    { path: 'terminate-match', component: _terminate_match_terminate_match_component__WEBPACK_IMPORTED_MODULE_6__["TerminateMatchComponent"], canActivate: [_guards_match_guard__WEBPACK_IMPORTED_MODULE_4__["MatchGuard"]] },
    { path: 'operation/:op', component: _operation_screen_operation_screen_component__WEBPACK_IMPORTED_MODULE_7__["OperationScreenComponent"], canActivate: [_guards_match_guard__WEBPACK_IMPORTED_MODULE_4__["MatchGuard"]] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map