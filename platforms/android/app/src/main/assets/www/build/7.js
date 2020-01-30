webpackJsonp([7],{

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmProdutoPageModule", function() { return AdmProdutoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adm_produto__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdmProdutoPageModule = /** @class */ (function () {
    function AdmProdutoPageModule() {
    }
    AdmProdutoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adm_produto__["a" /* AdmProdutoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adm_produto__["a" /* AdmProdutoPage */]),
            ],
        })
    ], AdmProdutoPageModule);
    return AdmProdutoPageModule;
}());

//# sourceMappingURL=adm-produto.module.js.map

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

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdmProdutoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_categoria_categoria__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_produto_produto__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_models_produtoModel__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__ = __webpack_require__(104);
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







var AdmProdutoPage = /** @class */ (function () {
    function AdmProdutoPage(navCtrl, navParams, actionSheetCtrl, platform, cameraSrv, categoriaSrv, produtoSrv, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.platform = platform;
        this.cameraSrv = cameraSrv;
        this.categoriaSrv = categoriaSrv;
        this.produtoSrv = produtoSrv;
        this.alertSrv = alertSrv;
        this.categorias = new Array();
        var _prod = this.navParams.get('_produto');
        if (_prod && _prod._id) {
            this.produto = _prod;
            this.produto.categoriaId = _prod.categoriaId._id;
        }
        else
            this.produto = new __WEBPACK_IMPORTED_MODULE_5__app_models_produtoModel__["a" /* ProdutoModel */]();
        this.loadData();
    }
    AdmProdutoPage.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var categoriasResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.categoriaSrv.get()];
                    case 1:
                        categoriasResult = _a.sent();
                        if (categoriasResult.success) {
                            this.categorias = categoriasResult.data;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('Erro ao carregar as categorias', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AdmProdutoPage.prototype.excluir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                try {
                    this.alertSrv.confirm('Excluir?', "Deseja realmente excluir o produto " + this.produto.nome + "?", function () { return __awaiter(_this, void 0, void 0, function () {
                        var excluirResult;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.produtoSrv.delete(this.produto._id)];
                                case 1:
                                    excluirResult = _a.sent();
                                    if (excluirResult.success) {
                                        this.alertSrv.toast('Produto excluído com sucesso!', 'bottom');
                                        this.navCtrl.setRoot('AdmProdutosPage');
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                }
                catch (error) {
                    console.log('Erro ao excluir', error);
                }
                return [2 /*return*/];
            });
        });
    };
    AdmProdutoPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sucesso, cadastroResult, updateResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sucesso = false;
                        if (!!this.produto._id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.produtoSrv.post(this.produto)];
                    case 1:
                        cadastroResult = _a.sent();
                        sucesso = cadastroResult.success;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.produtoSrv.put(this.produto._id, this.produto)];
                    case 3:
                        updateResult = _a.sent();
                        sucesso = updateResult.success;
                        _a.label = 4;
                    case 4:
                        if (sucesso) {
                            this.alertSrv.toast('Produto salvo com sucesso!', 'bottom');
                            this.navCtrl.setRoot('AdmProdutosPage');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AdmProdutoPage.prototype.getPictureOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Adicionar foto',
            buttons: [
                {
                    text: 'Tirar Foto', handler: function () {
                        _this.cameraSrv.takePicture(function (photo) {
                            _this.produto.foto = photo;
                        });
                    },
                    icon: this.platform.is('ios') ? null : 'camera'
                },
                {
                    text: 'Pegar galeria',
                    handler: (function () {
                        _this.cameraSrv.getPictureFromGalery(function (photo) {
                            _this.produto.foto = photo;
                        });
                    }),
                    icon: this.platform.is('ios') ? null : 'images'
                },
                {
                    text: 'Cancelar',
                    role: 'destructive',
                    icon: this.platform.is('ios') ? null : 'close',
                    handler: function () {
                        //Cancela a ação
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AdmProdutoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adm-produto',template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\pages\adm-produto\adm-produto.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Produto</ion-title>\n    <ion-buttons right>\n      <button ion-button clear (click)="salvar()">\n        Salvar\n      </button>\n      <button *ngIf="produto._id" ion-button icon-only (click)="excluir()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding>\n  <ion-list no-lines>\n    <ion-item>\n      <ion-label floating>Título</ion-label>\n      <ion-input [(ngModel)]="produto.nome" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Preço</ion-label>\n      <ion-input type="tel" [(ngModel)]="produto.preco"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Descrição</ion-label>\n      <ion-textarea [(ngModel)]="produto.descricao" rows="4"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Categoria</ion-label>\n      <ion-select [(ngModel)]="produto.categoriaId">\n        <ion-option value="{{item._id}}" *ngFor="let item of categorias">{{item.titulo}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item text-center>\n      <button ion-button clear (click)="getPictureOption()">\n        <ion-icon name="camera" item-left></ion-icon>\n        Selecionar Foto\n      </button>\n    </ion-item>\n    <ion-item *ngIf="produto.foto">\n      <img [src]="produto.foto">\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\pages\adm-produto\adm-produto.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_categoria_categoria__["a" /* CategoriaProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_produto_produto__["a" /* ProdutoProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_alert_alert__["a" /* AlertProvider */]])
    ], AdmProdutoPage);
    return AdmProdutoPage;
}());

//# sourceMappingURL=adm-produto.js.map

/***/ })

});
//# sourceMappingURL=7.js.map