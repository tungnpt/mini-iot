webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_data_device_data_component__ = __webpack_require__("../../../../../src/app/device-data/device-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_device_new_device_component__ = __webpack_require__("../../../../../src/app/new-device/new-device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_pi_data_device_pi_data_component__ = __webpack_require__("../../../../../src/app/device-pi-data/device-pi-data.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'device/edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__device_data_device_data_component__["a" /* DeviceDataComponent */] },
    { path: 'device/add', component: __WEBPACK_IMPORTED_MODULE_4__new_device_new_device_component__["a" /* NewDeviceComponent */] },
    { path: 'device/view/:id', component: __WEBPACK_IMPORTED_MODULE_5__device_pi_data_device_pi_data_component__["a" /* DevicePiDataComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"container pt-60px pb-40px\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // observer: Observer<any>;
    function AppComponent() {
        var _this = this;
        this.getDatas = function () {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
                console.log('something wrong');
                _this.socket.on('data-mockup', function (data) {
                    console.log(data);
                    observer.next(data);
                });
            });
        };
        this.datas = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.socket = socketIo.connect('http://localhost:6969');
        // this.socket.on('data-mockup', (data: any) => {
        //   console.log(data);
        // });
        // this.getDatas().subscribe((data: any) => {
        //   this.datas.push(data);
        //   console.log(this.datas)
        // });;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_service__ = __webpack_require__("../../../../../src/app/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pi_data_service__ = __webpack_require__("../../../../../src/app/pi-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__device_data_device_data_component__ = __webpack_require__("../../../../../src/app/device-data/device-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__new_device_new_device_component__ = __webpack_require__("../../../../../src/app/new-device/new-device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__device_pi_data_device_pi_data_component__ = __webpack_require__("../../../../../src/app/device-pi-data/device-pi-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__ = __webpack_require__("../../../../ng2-charts/ng2-charts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__device_pi_data_line_chart_line_chart_component__ = __webpack_require__("../../../../../src/app/device-pi-data/line-chart/line-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_ui_switch__ = __webpack_require__("../../../../ngx-ui-switch/ui-switch.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__device_data_device_data_component__["a" /* DeviceDataComponent */],
            __WEBPACK_IMPORTED_MODULE_12__new_device_new_device_component__["a" /* NewDeviceComponent */],
            __WEBPACK_IMPORTED_MODULE_13__device_pi_data_device_pi_data_component__["a" /* DevicePiDataComponent */],
            __WEBPACK_IMPORTED_MODULE_15__device_pi_data_line_chart_line_chart_component__["a" /* LineChartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_14_ng2_charts_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_16_ngx_ui_switch__["a" /* UiSwitchModule */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyAt1DtWCT6XzKgrE5Xs2iPuLniYjzh92GE'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__device_service__["a" /* DeviceService */],
            __WEBPACK_IMPORTED_MODULE_9__pi_data_service__["a" /* PiDataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/device-data/device-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device-data/device-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div>Device update</div>\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"InputDeviceName\">Device Name</label>\r\n      <input [(ngModel)]=\"device.deviceName\" name=\"deviceName\" type=\"text\" class=\"form-control\" id=\"InputDeviceName\"\r\n        placeholder=\"Tên thiết bị\" autocomplete=\"off\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"InputDeviceDescription\">Device Description</label>\r\n      <input [(ngModel)]=\"device.deviceDescription\" name=\"deviceDescription\" type=\"text\" class=\"form-control\"\r\n        id=\"InputDeviceDescription\" placeholder=\"Mô tả\" autocomplete=\"off\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"InputLocation\">Location</label>\r\n      <input [(ngModel)]=\"device.location\" name=\"location\" type=\"text\" class=\"form-control\" id=\"InputLocation\"\r\n        placeholder=\"Vị trí\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"InputLatitude\">Latitude</label>\r\n      <input [(ngModel)]=\"device.latitude\" name=\"latitude\" type=\"number\" class=\"form-control\" id=\"InputLatitude\"\r\n        placeholder=\"Vĩ độ\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"InputLongitude\">Longitude</label>\r\n      <input [(ngModel)]=\"device.longitude\" name=\"longitude\" type=\"number\" class=\"form-control\" id=\"InputLongitude\"\r\n        placeholder=\"Kinh độ\">\r\n    </div>\r\n\r\n    <agm-map\r\n      [latitude]=\"device.latitude\"\r\n      [longitude]=\"device.longitude\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\"\r\n      (mapClick)=\"mapClicked($event)\">\r\n\r\n      <agm-marker\r\n          [latitude]=\"device.latitude\"\r\n          [longitude]=\"device.longitude\"\r\n          [markerDraggable]=\"true\"\r\n          (dragEnd)=\"markerDragEnd($event)\">\r\n      </agm-marker>\r\n\r\n    </agm-map>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onUpdate()\">Update</button>\r\n    <button type=\"submit\" class=\"btn btn-secondary\" (click)=\"location.back()\">Cancel</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/device-data/device-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__("../../../../../src/app/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DeviceDataComponent = (function () {
    function DeviceDataComponent(_DeviceService, route, location) {
        this._DeviceService = _DeviceService;
        this.route = route;
        this.location = location;
        this.id = null;
        this.zoom = 16;
        this.device = {
            deviceName: null,
            deviceDescription: null,
            location: null,
            latitude: null,
            longitude: null
        };
    }
    DeviceDataComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = this.route.snapshot.url[2].path;
                        _a = this;
                        return [4 /*yield*/, this._DeviceService.getDevice(this.id)];
                    case 1:
                        _a.device = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceDataComponent.prototype.onUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._DeviceService.updateDevice(this.id, this.device)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._DeviceService.getDevices()];
                    case 2:
                        _a.sent();
                        this.location.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    // initial center position for the map
    DeviceDataComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    DeviceDataComponent.prototype.mapClicked = function ($event) {
        this.device.latitude = $event.coords.lat;
        this.device.longitude = $event.coords.lng;
    };
    DeviceDataComponent.prototype.markerDragEnd = function ($event) {
        this.device.latitude = $event.coords.lat;
        this.device.longitude = $event.coords.lng;
    };
    return DeviceDataComponent;
}());
DeviceDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-data',
        template: __webpack_require__("../../../../../src/app/device-data/device-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/device-data/device-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _c || Object])
], DeviceDataComponent);

var _a, _b, _c;
//# sourceMappingURL=device-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/device-pi-data/device-pi-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device-pi-data/device-pi-data.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\r\n  <ul *ngFor=\"let piData of piDatas\">\r\n    <li>{{piData.created_at}}</li>\r\n    <li>{{piData.device}}</li>\r\n    <li>{{piData.humidity}}</li>\r\n    <li>{{piData.temperature}}</li>\r\n    <li>{{piData._id}}</li>\r\n  </ul>\r\n</div> -->\r\n\r\n<agm-map\r\n  [latitude]=\"device.latitude\"\r\n  [longitude]=\"device.longitude\"\r\n  [zoom]=\"zoom\"\r\n  [disableDefaultUI]=\"false\"\r\n  [zoomControl]=\"false\">\r\n\r\n  <agm-marker\r\n      [latitude]=\"device.latitude\"\r\n      [longitude]=\"device.longitude\"\r\n      [markerDraggable]=\"false\">\r\n  </agm-marker>\r\n\r\n</agm-map>\r\n\r\n<div style=\"flex: auto; margin-top: 20px\" class=\"row\">\r\n  <div class=\"col\">\r\n    <span style=\"padding: 0px 40px\">Latitude</span><input type=\"number\" [(ngModel)]=\"device.latitude\" readonly>\r\n  </div>\r\n  <div class=\"col\">\r\n    <span style=\"padding: 0px 40px\">Longitude</span><input type=\"number\" [(ngModel)]=\"device.longitude\" readonly>\r\n  </div>\r\n</div>\r\n\r\n<div style=\"margin-top: 50px\">\r\n    <app-line-chart [chart]=\"chart\"></app-line-chart>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/device-pi-data/device-pi-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePiDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pi_data_service__ = __webpack_require__("../../../../../src/app/pi-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_service__ = __webpack_require__("../../../../../src/app/device.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DevicePiDataComponent = (function () {
    function DevicePiDataComponent(_PiDataService, route, _DeviceService) {
        this._PiDataService = _PiDataService;
        this.route = route;
        this._DeviceService = _DeviceService;
        this.zoom = 16;
        this.id = null;
        this.temperatures = Array();
        this.humidities = Array();
        this.labels = Array();
        this.chart = {
            labels: [],
            chartsData: [{
                    label: '',
                    data: []
                }]
        };
        this.device = {
            latitude: null,
            longitude: null
        };
    }
    DevicePiDataComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.id = this.route.snapshot.url[2].path;
                        _a = this;
                        return [4 /*yield*/, this._DeviceService.getDevice(this.id)];
                    case 1:
                        _a.device = _b.sent();
                        id = this.route.snapshot.url[2].path;
                        return [4 /*yield*/, this._PiDataService.getDevicePiData(id).then(function (piData) {
                                _this.piDatas = piData;
                            })];
                    case 2:
                        _b.sent();
                        console.log(this.piDatas);
                        return [4 /*yield*/, this.piDatas.forEach(function (data) {
                                _this.temperatures.push(data.temperature);
                                _this.humidities.push(data.humidity);
                                _this.labels.push(data.created_at);
                            })];
                    case 3:
                        _b.sent();
                        // console.log(this.labels)
                        this.chart = {
                            labels: this.labels,
                            chartsData: [
                                {
                                    label: 'temperature',
                                    data: this.temperatures
                                }, {
                                    label: 'humidity',
                                    data: this.humidities
                                }
                            ]
                        };
                        return [2 /*return*/];
                }
            });
        });
    };
    // initial center position for the map
    DevicePiDataComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    return DevicePiDataComponent;
}());
DevicePiDataComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-device-pi-data',
        template: __webpack_require__("../../../../../src/app/device-pi-data/device-pi-data.component.html"),
        styles: [__webpack_require__("../../../../../src/app/device-pi-data/device-pi-data.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pi_data_service__["a" /* PiDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pi_data_service__["a" /* PiDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__device_service__["a" /* DeviceService */]) === "function" && _c || Object])
], DevicePiDataComponent);

var _a, _b, _c;
//# sourceMappingURL=device-pi-data.component.js.map

/***/ }),

/***/ "../../../../../src/app/device-pi-data/line-chart/line-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device-pi-data/line-chart/line-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <canvas\r\n      baseChart\r\n      [chartType]=\"'line'\"\r\n      [datasets]=\"CHART.chartsData\"\r\n      [labels]=\"CHART.labels\"\r\n      [options]=\"chartOptions\"\r\n      [legend]=\"true\"\r\n      [colors]=\"colors\"\r\n      (chartClick)=\"onChartClick($event)\">\r\n  </canvas>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/device-pi-data/line-chart/line-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__device__ = __webpack_require__("../../../../../src/app/device.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineChartComponent = (function () {
    function LineChartComponent() {
        this.chartOptions = {
            responsive: true // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
        };
        // MOCKUP DATA
        // labels: string[] =  ['2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z', '2019-05-29T02:43:32.739Z'];
        // // STATIC DATA FOR THE CHART IN JSON FORMAT.
        // chartData: ChartData[] = [
        //   {
        //     label: 'temperature',
        //     data: [3.9, 3.9, 3.3, 3.9, 2, 2, 1.4, 3.9, 4.3, 4.3]
        //   },
        //   {
        //     label: 'humidity',
        //     data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        //   }
        // ];
        // CHART COLOR.
        this.colors = [
            {
                backgroundColor: 'rgba(24, 77, 192, 0.2)'
            },
            {
                backgroundColor: 'rgba(235, 72, 72, 0.212)'
            }
        ];
        this.Chart = {
            labels: [],
            chartsData: [{
                    label: '',
                    data: []
                }]
        };
        this.CHART = {
            labels: [],
            chartsData: [{
                    label: '',
                    data: []
                }]
        };
    }
    LineChartComponent.prototype.ngOnChanges = function (changes) {
        // console.log('changes', changes);
        // this.chart = changes.chart.currentValue;
        var _this = this;
        // Chart error when receive data
        this.Chart.labels = changes.chart.currentValue.labels;
        this.Chart.chartsData = changes.chart.currentValue.chartsData;
        // Chart success when receive data
        for (var index = 0; index < this.CHART.chartsData.length; index++) {
            this.CHART.chartsData.pop();
        }
        this.CHART.labels = changes.chart.currentValue.labels;
        changes.chart.currentValue.chartsData.forEach(function (element) {
            _this.CHART.chartsData.push(element);
        });
    };
    LineChartComponent.prototype.ngOnInit = function () {
    };
    // CHART CLICK EVENT.
    LineChartComponent.prototype.onChartClick = function (event) {
        console.log(event);
    };
    return LineChartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__device__["a" /* Chart */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__device__["a" /* Chart */]) === "function" && _a || Object)
], LineChartComponent.prototype, "chart", void 0);
LineChartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-line-chart',
        template: __webpack_require__("../../../../../src/app/device-pi-data/line-chart/line-chart.component.html"),
        styles: [__webpack_require__("../../../../../src/app/device-pi-data/line-chart/line-chart.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LineChartComponent);

var _a;
//# sourceMappingURL=line-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
        this.API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'device/';
    }
    DeviceService.prototype.getDevices = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL)
                .toPromise()
                .then(function (res) {
                resolve(res.json());
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    DeviceService.prototype.createDevice = function (device) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.API_URL, device)
                .subscribe(function (res) {
                resolve(true);
            }, function (err) { return reject(err); });
        });
    };
    DeviceService.prototype.getDevice = function (deviceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + deviceId)
                .toPromise()
                .then(function (res) {
                resolve(res.json());
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    DeviceService.prototype.updateDevice = function (deviceId, device) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.API_URL + deviceId, device)
                .subscribe(function (res) {
                resolve(true);
            }, function (err) { return reject(err); });
        });
    };
    DeviceService.prototype.deleteDevice = function (deviceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.delete(_this.API_URL + deviceId)
                .subscribe(function (res) { return null; }, function (err) { return reject(err); });
        });
    };
    return DeviceService;
}());
DeviceService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DeviceService);

var _a;
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ "../../../../../src/app/device.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Device */
/* unused harmony export ChartData */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chart; });
/* unused harmony export marker */
var Device = (function () {
    function Device() {
    }
    return Device;
}());

var ChartData = (function () {
    function ChartData() {
    }
    return ChartData;
}());

var Chart = (function () {
    function Chart() {
    }
    return Chart;
}());

var marker = (function () {
    function marker() {
    }
    return marker;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <button class=\"pull-right\" type=\"button\" class=\"btn btn-primary\" style=\"margin: 20px 0\" routerLink=\"/device/add\">Thêm thiết bị</button>\r\n  <div style=\"margin-bottom: 10px\">Danh sách thiết bị</div>\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">STT</th>\r\n        <th scope=\"col\">Device Name</th>\r\n        <th scope=\"col\">Description</th>\r\n        <th scope=\"col\">Operation</th>\r\n        <th scope=\"col\">Option</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let device of devices; let i = index\">\r\n      <tr>\r\n        <th scope=\"row\">{{i+1}}</th>\r\n        <td>{{device.deviceName}}</td>\r\n        <td>{{device.deviceDescription}}</td>\r\n        <td></td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/device/view/{{device._id}}\">View</button>\r\n          <button type=\"button\" class=\"btn btn-info\" routerLink=\"/device/edit/{{device._id}}\">Edit</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#deleteModal\">Delete</button>\r\n\r\n          <div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalLabel\" aria-hidden=\"true\">\r\n              <div class=\"modal-dialog\" role=\"document\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"deleteModalLabel\">Delete this device?</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    Are you sure?\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\r\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleteDevice(device)\">Confirm</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <agm-map\r\n    [latitude]=\"lat\"\r\n    [longitude]=\"lng\"\r\n    [zoom]=\"zoom\"\r\n    [disableDefaultUI]=\"false\"\r\n    [zoomControl]=\"false\"\r\n    (mapClick)=\"mapClicked($event)\">\r\n\r\n    <agm-marker\r\n        [latitude]=\"lat\"\r\n        [longitude]=\"lng\"\r\n        [markerDraggable]=\"true\">\r\n    </agm-marker>\r\n\r\n    <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\"\r\n        [radius]=\"5000\"\r\n        [fillColor]=\"'red'\"\r\n        [circleDraggable]=\"true\"\r\n        [editable]=\"true\">\r\n    </agm-circle>\r\n\r\n  </agm-map>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__("../../../../../src/app/device.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomeComponent = (function () {
    function HomeComponent(_DeviceService) {
        this._DeviceService = _DeviceService;
        this.lat = 20.976044;
        this.lng = 105.815666;
        this.zoom = 16;
        this.markers = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._DeviceService.getDevices()];
                    case 1:
                        _a.devices = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.deleteDevice = function (device) {
        console.log(device);
        this.devices = this.devices.filter(function (d) { return d !== device; });
        this._DeviceService.deleteDevice(device._id);
    };
    // initial center position for the map
    HomeComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    HomeComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" routerLink = \"/\">Mini IOT</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink = \"/\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\">Link</a>\n      </li>\n      <ui-switch (change)=\"onLight($event)\" defaultBgColor=\"red\"></ui-switch>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" (input) = \"onSearch($event)\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavBarComponent = (function () {
    function NavBarComponent() {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://localhost:6969");
    }
    NavBarComponent.prototype.ngOnInit = function () {
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__("http://localhost:6969");
    };
    NavBarComponent.prototype.onSearch = function (e) {
        console.log(e);
    };
    NavBarComponent.prototype.onLight = function (e) {
        console.log(e);
        if (e) {
            this.socket.emit('ledOn', "True");
        }
        else {
            this.socket.emit('ledOn', "False");
        }
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav-bar/nav-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavBarComponent);

//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-device/new-device.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-device/new-device.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputName\">Device Name</label>\r\n      <input [(ngModel)]=\"device.deviceName\" name=\"deviceName\" type=\"text\" class=\"form-control\" id=\"inputName\" placeholder=\"Tên gì, viết vào đây\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputDescription\">Device Description</label>\r\n      <input [(ngModel)]=\"device.deviceDescription\" name=\"deviceDescription\" type=\"text\" class=\"form-control\" id=\"inputDescription\" placeholder=\"Một vài cái mô tả\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"inputLocation\">Location</label>\r\n      <input [(ngModel)]=\"device.location\" name=\"location\" type=\"text\" class=\"form-control\" id=\"inputLocation\" placeholder=\"Địa điểm nè\">\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"inputLatitude\">Latitude</label>\r\n        <input [(ngModel)]=\"device.latitude\" name=\"latitude\" type=\"number\" class=\"form-control\" id=\"inputLatitude\" placeholder=\"Vĩ độ nè\">\r\n      </div>\r\n      <div class=\"form-group col-md-6\">\r\n        <label for=\"inputLongitude\">Longitude</label>\r\n        <input [(ngModel)]=\"device.longitude\" name=\"longitude\" type=\"number\" class=\"form-control\" id=\"inputLongitude\" placeholder=\"Kinh độ nè\">\r\n      </div>\r\n    </div>\r\n\r\n    <agm-map\r\n      [latitude]=\"device.latitude\"\r\n      [longitude]=\"device.longitude\"\r\n      [zoom]=\"zoom\"\r\n      [disableDefaultUI]=\"false\"\r\n      [zoomControl]=\"false\"\r\n      (mapClick)=\"mapClicked($event)\">\r\n\r\n      <agm-marker\r\n          [latitude]=\"device.latitude\"\r\n          [longitude]=\"device.longitude\"\r\n          [markerDraggable]=\"true\"\r\n          (dragEnd)=\"markerDragEnd($event)\">\r\n      </agm-marker>\r\n\r\n    </agm-map>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"saveDevice()\" style=\"margin-top: 20px; float: right\" >Lưu</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/new-device/new-device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewDeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__("../../../../../src/app/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var NewDeviceComponent = (function () {
    function NewDeviceComponent(_DeviceService, location) {
        this._DeviceService = _DeviceService;
        this.location = location;
        this.zoom = 2;
        this.device = {
            deviceName: null,
            deviceDescription: null,
            location: null,
            latitude: null,
            longitude: null
        };
    }
    NewDeviceComponent.prototype.ngOnInit = function () {
    };
    NewDeviceComponent.prototype.saveDevice = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.device);
                        return [4 /*yield*/, this._DeviceService.createDevice(this.device)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this._DeviceService.getDevices()];
                    case 2:
                        _a.sent();
                        this.location.back();
                        return [2 /*return*/];
                }
            });
        });
    };
    // initial center position for the map
    NewDeviceComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    NewDeviceComponent.prototype.mapClicked = function ($event) {
        this.device.latitude = $event.coords.lat;
        this.device.longitude = $event.coords.lng;
    };
    NewDeviceComponent.prototype.markerDragEnd = function ($event) {
        this.device.latitude = $event.coords.lat;
        this.device.longitude = $event.coords.lng;
    };
    return NewDeviceComponent;
}());
NewDeviceComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-device',
        template: __webpack_require__("../../../../../src/app/new-device/new-device.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-device/new-device.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */]) === "function" && _b || Object])
], NewDeviceComponent);

var _a, _b;
//# sourceMappingURL=new-device.component.js.map

/***/ }),

/***/ "../../../../../src/app/pi-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PiDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PiDataService = (function () {
    function PiDataService(http) {
        this.http = http;
        this.API_URL = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl + 'pidata/';
    }
    PiDataService.prototype.getDevicePiData = function (deviceId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.API_URL + deviceId)
                .toPromise()
                .then(function (res) {
                resolve(res.json());
            })
                .catch(function (err) { return console.log(err); });
        });
    };
    return PiDataService;
}());
PiDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PiDataService);

var _a;
//# sourceMappingURL=pi-data.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: 'http://localhost:6969/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-SG": "../../../../moment/locale/en-SG.js",
	"./en-SG.js": "../../../../moment/locale/en-SG.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./ga": "../../../../moment/locale/ga.js",
	"./ga.js": "../../../../moment/locale/ga.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it-ch": "../../../../moment/locale/it-ch.js",
	"./it-ch.js": "../../../../moment/locale/it-ch.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ku": "../../../../moment/locale/ku.js",
	"./ku.js": "../../../../moment/locale/ku.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map