webpackJsonp([5],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualizarProdutoPageModule", function() { return VisualizarProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__visualizar_produto__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var VisualizarProdutoPageModule = /** @class */ (function () {
    function VisualizarProdutoPageModule() {
    }
    VisualizarProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__visualizar_produto__["a" /* VisualizarProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__visualizar_produto__["a" /* VisualizarProdutoPage */]),
            ],
        })
    ], VisualizarProdutoPageModule);
    return VisualizarProdutoPageModule;
}());

//# sourceMappingURL=visualizar-produto.module.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsHelper; });
var UtilsHelper = /** @class */ (function () {
    function UtilsHelper() {
    }
    UtilsHelper.data = {
        sorting: function (array, field) {
            return array.sort(function (a, b) {
                var x = a[field];
                var y = b[field];
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });
        }
    };
    UtilsHelper.number = {
        formatCurrency: function (valor) {
            return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
            ;
        }
    };
    return UtilsHelper;
}());

//# sourceMappingURL=utilsHelper.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoModel; });
var ProdutoModel = /** @class */ (function () {
    function ProdutoModel() {
    }
    return ProdutoModel;
}());

//# sourceMappingURL=produtoModel.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__real_real__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__real_real__["a" /* RealPipe */],
                __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__["a" /* OrderByPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__real_real__["a" /* RealPipe */],
                __WEBPACK_IMPORTED_MODULE_2__order_by_order_by__["a" /* OrderByPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RealPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RealPipe = /** @class */ (function () {
    function RealPipe() {
    }
    RealPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].number.formatCurrency(value);
    };
    RealPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'real',
        })
    ], RealPipe);
    return RealPipe;
}());

//# sourceMappingURL=real.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (value, args) {
        var _ret = [];
        var _args = args.replace('-', '');
        if (args.indexOf('-') > -1) {
            _ret = __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].data.sorting(value, _args).reverse();
        }
        else {
            _ret = __WEBPACK_IMPORTED_MODULE_1__app_helpers_utilsHelper__["a" /* UtilsHelper */].data.sorting(value, args);
        }
        return _ret;
    };
    OrderByPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'orderBy',
        })
    ], OrderByPipe);
    return OrderByPipe;
}());

//# sourceMappingURL=order-by.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_carrinho_carrinho__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_produtoModel__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisualizarProdutoPage = /** @class */ (function () {
    function VisualizarProdutoPage(navCtrl, navParams, ViewCtrl, alertSrv, carrinhoSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ViewCtrl = ViewCtrl;
        this.alertSrv = alertSrv;
        this.carrinhoSrv = carrinhoSrv;
        this.produto = new __WEBPACK_IMPORTED_MODULE_2__app_models_produtoModel__["a" /* ProdutoModel */]();
    }
    VisualizarProdutoPage.prototype.ionViewDidLoad = function () {
        this.produto = this.navParams.get('prod');
    };
    VisualizarProdutoPage.prototype.voltar = function () {
        this.ViewCtrl.dismiss();
    };
    VisualizarProdutoPage.prototype.adicionarNoCarrinho = function () {
        this.alertSrv.toast('Produto adicionado ao carrinho com sucesso!', 'bottom');
        this.carrinhoSrv.adicionarNovoItem(this.produto);
        this.ViewCtrl.dismiss();
    };
    VisualizarProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-visualizar-produto',template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\pages\visualizar-produto\visualizar-produto.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only (click)="voltar()">\n        <ion-icon name="arrow-back"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Visualizar Produto</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <div class="foto" [ngStyle]="{\'background-image\': \'url(\' + produto.foto + \')\'}">\n  </div>\n  <ion-list padding>\n    <ion-item text-wrap>\n      <h2>Nome</h2>\n      <p>{{produto.nome}}</p>\n    </ion-item>\n    <ion-item text-wrap>\n      <h2>Descrição</h2>\n      <p>{{produto.descricao}}</p>\n    </ion-item>\n    <ion-item class="preco">\n      <p>\n        {{produto.preco | real}}\n      </p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer text-center padding>\n  <button block ion-button outline round color="primary" (click)="adicionarNoCarrinho()">Adicionar ao Carrinho</button>\n</ion-footer>'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\pages\visualizar-produto\visualizar-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_carrinho_carrinho__["a" /* CarrinhoProvider */]])
    ], VisualizarProdutoPage);
    return VisualizarProdutoPage;
}());

//# sourceMappingURL=visualizar-produto.js.map

/***/ })

});
//# sourceMappingURL=5.js.map