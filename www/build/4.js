webpackJsonp([4],{

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinhaContaPageModule", function() { return MinhaContaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__minha_conta__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MinhaContaPageModule = /** @class */ (function () {
    function MinhaContaPageModule() {
    }
    MinhaContaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__minha_conta__["a" /* MinhaContaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__minha_conta__["a" /* MinhaContaPage */]),
            ],
        })
    ], MinhaContaPageModule);
    return MinhaContaPageModule;
}());

//# sourceMappingURL=minha-conta.module.js.map

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

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcaoCarrinhoEnum; });
var AcaoCarrinhoEnum;
(function (AcaoCarrinhoEnum) {
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Adicionar"] = 1] = "Adicionar";
    AcaoCarrinhoEnum[AcaoCarrinhoEnum["Remover"] = 2] = "Remover";
})(AcaoCarrinhoEnum || (AcaoCarrinhoEnum = {}));
//# sourceMappingURL=AcaoCarrinhoEnum.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_tab__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__quantidade_quantidade__["a" /* QuantidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_3__tab_tab__["a" /* TabComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantidadeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuantidadeComponent = /** @class */ (function () {
    function QuantidadeComponent(carrinhoSrv, evt) {
        this.carrinhoSrv = carrinhoSrv;
        this.evt = evt;
        this.numero = 0;
        this.quantidadeAlterada = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* EventEmitter */]();
    }
    QuantidadeComponent.prototype._registerEvent = function () {
        var _this = this;
        this.evt.subscribe(__WEBPACK_IMPORTED_MODULE_5__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, function () {
            _this._atualizarQuantidade();
        });
    };
    QuantidadeComponent.prototype._atualizarQuantidade = function () {
        var quantidadeNoCarrinho = this.carrinhoSrv.getQuantidadeItem(this.produto);
        this.numero = quantidadeNoCarrinho;
    };
    QuantidadeComponent.prototype.ngOnInit = function () {
        this._atualizarQuantidade();
        this._registerEvent();
    };
    QuantidadeComponent.prototype.adicionar = function () {
        this.numero += 1;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Adicionar
        });
    };
    QuantidadeComponent.prototype.remover = function () {
        var _valorFinal = this.numero -= 1;
        if (_valorFinal <= 0)
            this.numero = 0;
        this.quantidadeAlterada.emit({
            quantidade: this.numero,
            acao: __WEBPACK_IMPORTED_MODULE_4__app_enums_AcaoCarrinhoEnum__["a" /* AcaoCarrinhoEnum */].Remover
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["D" /* Input */])('produto'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__app_models_produtoModel__["a" /* ProdutoModel */])
    ], QuantidadeComponent.prototype, "produto", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], QuantidadeComponent.prototype, "quantidadeAlterada", void 0);
    QuantidadeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'quantidade',template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\components\quantidade\quantidade.html"*/'<div>\n  <button round ion-button icon-only color="light" (click)="remover()">\n    -\n  </button>\n  <span class="numero">{{numero}}</span>\n  <button round ion-button icon-only color="dark" (click)="adicionar()">\n    +\n  </button>\n</div>'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\components\quantidade\quantidade.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_carrinho_carrinho__["a" /* CarrinhoProvider */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["d" /* Events */]])
    ], QuantidadeComponent);
    return QuantidadeComponent;
}());

//# sourceMappingURL=quantidade.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = /** @class */ (function () {
    function TabComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabs = [
            { icon: 'pricetags', path: 'CategoriaPage', label: 'Categorias', isSelect: this.pagina == 'Categorias' },
            { icon: 'menu', path: 'MeusPedidosPage', label: 'Meus Pedidos', isSelect: this.pagina == 'Meus Pedidos' },
            { icon: 'contact', path: 'MinhaContaPage', label: 'Minha Conta', isSelect: this.pagina == 'Minha Conta' }
        ];
    };
    TabComponent.prototype.selecionarTab = function (path) {
        this.navCtrl.setRoot(path);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* Input */])('pagina'),
        __metadata("design:type", String)
    ], TabComponent.prototype, "pagina", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'tab',template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\components\tab\tab.html"*/'<ion-footer class="tabs">\n  <div class="tab" *ngFor="let item of tabs" [ngClass]="{\'active\': item.isSelect}" (click)="selecionarTab(item.path)">\n    <ion-icon name="{{item.icon}}"></ion-icon>\n    <p>{{item.label}}</p>\n  </div>\n</ion-footer>'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\components\tab\tab.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavController */]])
    ], TabComponent);
    return TabComponent;
}());

//# sourceMappingURL=tab.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioModel; });
var UsuarioModel = /** @class */ (function () {
    function UsuarioModel() {
    }
    return UsuarioModel;
}());

//# sourceMappingURL=usuarioModel.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MinhaContaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_models_usuarioModel__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(25);
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







var MinhaContaPage = /** @class */ (function () {
    function MinhaContaPage(navCtrl, navParams, usuarioSrv, cameraSrv, actionSheetCtrl, alertSrv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.usuarioSrv = usuarioSrv;
        this.cameraSrv = cameraSrv;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertSrv = alertSrv;
        this.usuarioLogado = new __WEBPACK_IMPORTED_MODULE_0__app_models_usuarioModel__["a" /* UsuarioModel */]();
    }
    MinhaContaPage.prototype.ionViewDidLoad = function () {
        this.LoadData();
    };
    MinhaContaPage.prototype.mudarFoto = function () {
        var _this = this;
        var action = this.actionSheetCtrl.create({
            title: 'Foto',
            buttons: [
                { text: 'Limpar', handler: function () { _this.usuarioLogado.foto = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].photo; } },
                {
                    text: 'Tirar Foto', handler: function () {
                        _this.cameraSrv.getPictureFromGalery(function (photo) {
                            _this.usuarioLogado.foto = photo;
                        });
                    }
                },
                { text: 'Cancelar', handler: function () { }, role: 'destructive' }
            ]
        });
        action.present();
    };
    MinhaContaPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var salvarResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usuarioSrv.put(this.usuarioLogado._id, this.usuarioLogado)];
                    case 1:
                        salvarResult = _a.sent();
                        if (salvarResult.success) {
                            this.alertSrv.toast('Dados atualizados com sucesso!', 'bottom');
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.log('Erro ao atualizar os dados, motivo: ' + error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MinhaContaPage.prototype.LoadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, userResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        user = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user));
                        return [4 /*yield*/, this.usuarioSrv.getByUid(user._id)];
                    case 1:
                        userResult = _a.sent();
                        if (userResult.success) {
                            this.usuarioLogado = userResult.data;
                            if (!this.usuarioLogado.foto)
                                this.usuarioLogado.foto = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].photo;
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log('Problema ao carregar os dados do usuário');
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MinhaContaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["m" /* Component */])({
            selector: 'page-minha-conta',template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\pages\minha-conta\minha-conta.html"*/'<ion-content>\n  <div class="topo"></div>\n  <div class="titulo">Minha Conta</div>\n  <div class="imagem" [ngStyle]="{\'background-image\': \'url(\' + usuarioLogado.foto + \')\'}" (click)="mudarFoto()">\n\n  </div>\n  <div class="formulario">\n\n    <input type="text" placeholder="Nome" [(ngModel)]="usuarioLogado.nome">\n    <input type="text" placeholder="Email" [(ngModel)]="usuarioLogado.email">\n    <input type="tel" placeholder="Telefone" [(ngModel)]="usuarioLogado.telefone">\n    <ion-item>\n      <textarea class="textareaMinhaConta" cols="45" rows="6" type="text"\n        placeholder="Ex:. Rua dos jasmins, Nº 209, bairro Córrego Grande, CEP: 88037-145"\n        [(ngModel)]="usuarioLogado.enderecoCompleto"></textarea>\n    </ion-item>\n\n    <div class="botao">\n      <button ion-button outline color="dark" round block (click)="salvar()">\n        Salvar os dados\n      </button>\n    </div>\n  </div>\n</ion-content>\n<tab [pagina]="\'Minha Conta\'"></tab>'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\pages\minha-conta\minha-conta.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_camera_camera__["a" /* CameraProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1__providers_alert_alert__["a" /* AlertProvider */]])
    ], MinhaContaPage);
    return MinhaContaPage;
}());

//# sourceMappingURL=minha-conta.js.map

/***/ })

});
//# sourceMappingURL=4.js.map