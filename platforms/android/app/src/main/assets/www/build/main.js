webpackJsonp([14],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertProvider = /** @class */ (function () {
    function AlertProvider(alertCtrl, toastCtrl) {
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    AlertProvider.prototype.toast = function (title, position) {
        var toast = this.toastCtrl.create({ message: title, position: position, duration: 3000 });
        toast.present();
    };
    AlertProvider.prototype.alert = function (title, message) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: ['Ok'],
            enableBackdropDismiss: false
        }).present();
    };
    AlertProvider.prototype.confirm = function (title, message, callback) {
        this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                { text: "Não", role: 'Cancel', handler: function () { console.log('Confirm:Say:No'); } },
                {
                    text: "Sim",
                    handler: function () {
                        callback();
                    }
                }
            ]
        })
            .present();
    };
    AlertProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AlertProvider);
    return AlertProvider;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 117:
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
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adm-categoria/adm-categoria.module": [
		289,
		8
	],
	"../pages/adm-categorias/adm-categorias.module": [
		290,
		13
	],
	"../pages/adm-produto/adm-produto.module": [
		291,
		7
	],
	"../pages/adm-produtos/adm-produtos.module": [
		292,
		12
	],
	"../pages/cadastro/cadastro.module": [
		293,
		6
	],
	"../pages/carrinho/carrinho.module": [
		294,
		3
	],
	"../pages/categoria/categoria.module": [
		295,
		2
	],
	"../pages/login/login.module": [
		296,
		11
	],
	"../pages/meus-pedidos/meus-pedidos.module": [
		302,
		1
	],
	"../pages/minha-conta/minha-conta.module": [
		299,
		4
	],
	"../pages/produtos/produtos.module": [
		300,
		0
	],
	"../pages/tab-categoria/tab-categoria.module": [
		297,
		10
	],
	"../pages/tabs/tabs.module": [
		298,
		9
	],
	"../pages/visualizar-produto/visualizar-produto.module": [
		301,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpinnerProvider = /** @class */ (function () {
    function SpinnerProvider(loading) {
        this.loading = loading;
        this.spinner = null;
    }
    SpinnerProvider.prototype.Show = function (message) {
        if (this.spinner == null) {
            this.spinner = this.loading.create({ content: (message || 'Carregando...') });
            this.spinner.present();
        }
        else {
            this.spinner.data.content = message;
        }
    };
    SpinnerProvider.prototype.Hide = function () {
        if (this.spinner != null) {
            this.spinner.dismiss();
            this.spinner = null;
        }
    };
    SpinnerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], SpinnerProvider);
    return SpinnerProvider;
}());

//# sourceMappingURL=spinner.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkProvider; });
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


var NetworkProvider = /** @class */ (function () {
    function NetworkProvider(platform) {
        this.platform = platform;
    }
    Object.defineProperty(NetworkProvider.prototype, "IsOnline", {
        get: function () {
            if (this.platform.is('cordova')) {
                if (navigator.connection && navigator.connection.type) {
                    return (navigator.connection.type != Connection.UNKKONW && navigator.connection.type != Connection.NONE);
                }
                else
                    return true;
            }
            else {
                return navigator.onLine;
            }
        },
        enumerable: true,
        configurable: true
    });
    NetworkProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* Platform */]])
    ], NetworkProvider);
    return NetworkProvider;
}());

//# sourceMappingURL=network.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models_CarrinhoItemModel__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_models_carrinhoModel__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarrinhoProvider = /** @class */ (function () {
    function CarrinhoProvider(http, evt) {
        var _this = this;
        this.http = http;
        this.evt = evt;
        this._carrinho = new __WEBPACK_IMPORTED_MODULE_4__app_models_carrinhoModel__["a" /* CarrinhoModel */]();
        //Inicializando nosso carrinho
        this._carrinho.dataPedido = new Date();
        this._carrinho.itens = new Array();
        this._carrinho.valorTotal = 0.0;
        //Inicializando nosso observable
        this.carrinho = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (obs) {
            _this.carrinhoObservable = obs;
            _this.carrinhoObservable.next(_this._carrinho);
        });
    }
    CarrinhoProvider.prototype.getCarrinho = function () {
        return this.carrinho;
    };
    CarrinhoProvider.prototype.adicionarNovoItem = function (item) {
        var isExiste = false;
        this._carrinho.itens.forEach(function (prod) {
            if (prod.Produto._id == item._id) {
                prod.Quantidade++;
                isExiste = true;
            }
        });
        if (!isExiste) {
            var newProduto = new __WEBPACK_IMPORTED_MODULE_1__app_models_CarrinhoItemModel__["a" /* CarrinhoItemModel */]();
            newProduto.Produto = item;
            newProduto.Quantidade = 1;
            this._carrinho.itens.push(newProduto);
        }
        this._calcularCarrinho();
        this.evt.publish(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, {});
        this.carrinhoObservable.next(this._carrinho);
    };
    CarrinhoProvider.prototype.removerItem = function (item) {
        for (var index = 0; index < this._carrinho.itens.length; index++) {
            var prod = this._carrinho.itens[index];
            if (prod.Produto._id == item._id) {
                if (prod.Quantidade <= 1) {
                    this._carrinho.itens.splice(index, 1);
                }
                else {
                    this._carrinho.itens[index].Quantidade--;
                }
            }
        }
        this._calcularCarrinho();
        this.evt.publish(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Events.atualizaoQuantidadeProduto, {});
        this.carrinhoObservable.next(this._carrinho);
    };
    CarrinhoProvider.prototype.getQuantidadeItem = function (item) {
        var prod = this._carrinho.itens.filter(function (x) { return x.Produto._id == item._id; })[0];
        if (prod)
            return prod.Quantidade;
        else
            return 0;
    };
    CarrinhoProvider.prototype._calcularCarrinho = function () {
        var _this = this;
        this._carrinho.valorTotal = 0;
        this._carrinho.itens.forEach(function (prod) {
            _this._carrinho.valorTotal += (prod.Produto.preco * prod.Quantidade);
        });
    };
    CarrinhoProvider.prototype.SalvarPedido = function (pedido) {
        var _pedido = {};
        _pedido.valorTotal = pedido.valorTotal;
        _pedido.itens = [];
        pedido.itens.forEach(function (prod) {
            _pedido.itens.push({
                quantidade: prod.Quantidade,
                produtoId: prod.Produto._id
            });
        });
        _pedido.itens = JSON.stringify(_pedido.itens);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "/pedido", _pedido);
    };
    CarrinhoProvider.prototype.GetMeusPedidos = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_6__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "/pedido");
    };
    CarrinhoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */]])
    ], CarrinhoProvider);
    return CarrinhoProvider;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriaProvider = /** @class */ (function (_super) {
    __extends(CategoriaProvider, _super);
    function CategoriaProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "categoria";
        return _this;
    }
    CategoriaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], CategoriaProvider);
    return CategoriaProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=categoria.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CameraProvider = /** @class */ (function () {
    function CameraProvider(camera, platform) {
        this.camera = camera;
        this.platform = platform;
    }
    CameraProvider.prototype._getPicture = function (source, callback) {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.platform.ready().then(function () {
                try {
                    var options = {
                        quality: 70,
                        destinationType: _this.camera.DestinationType.DATA_URL,
                        sourceType: source,
                        allowEdit: false,
                        encodingType: _this.camera.EncodingType.JPEG,
                        saveToPhotoAlbum: false,
                        correctOrientation: true
                    };
                    _this.camera.getPicture(options).then(function (imgData) {
                        var base64Image = "data:image/jpeg;base64," + imgData;
                        callback(base64Image);
                    }, function (err) {
                        console.log('Problema ao capturar a foto', err);
                    });
                }
                catch (error) {
                    console.log('problema o tirar a foto', error);
                }
            });
        }
        else {
            alert('Funcionalidade disponível somente no device');
        }
    };
    CameraProvider.prototype.getPictureFromGalery = function (callback) {
        this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, function (photo) {
            callback(photo);
        });
    };
    CameraProvider.prototype.takePicture = function (callback) {
        this._getPicture(this.camera.PictureSourceType.CAMERA, function (photo) {
            callback(photo);
        });
    };
    CameraProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */]])
    ], CameraProvider);
    return CameraProvider;
}());

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProdutoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_http__ = __webpack_require__(42);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var ProdutoProvider = /** @class */ (function (_super) {
    __extends(ProdutoProvider, _super);
    function ProdutoProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "produto", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_2__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "produto";
        return _this;
    }
    ProdutoProvider.prototype.produtosByCategoriaId = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.get(this.url + "/categoria/" + id)];
            });
        });
    };
    ProdutoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__http_http__["a" /* HttpProvider */]])
    ], ProdutoProvider);
    return ProdutoProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=produto.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoModel; });
var CarrinhoModel = /** @class */ (function () {
    function CarrinhoModel() {
        this.valorTotal = 0.0;
        this.itens = new Array();
    }
    return CarrinhoModel;
}());

//# sourceMappingURL=carrinhoModel.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_spinner_spinner__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_http_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_network_network__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_categoria_categoria__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_camera_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_produto_produto__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_carrinho_carrinho__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__node_modules_angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adm-categoria/adm-categoria.module#AdmCategoriaPageModule', name: 'AdmCategoriaPage', segment: 'adm-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-categorias/adm-categorias.module#AdmCategoriasPageModule', name: 'AdmCategoriasPage', segment: 'adm-categorias', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-produto/adm-produto.module#AdmProdutoPageModule', name: 'AdmProdutoPage', segment: 'adm-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/adm-produtos/adm-produtos.module#AdmProdutosPageModule', name: 'AdmProdutosPage', segment: 'adm-produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categoria/categoria.module#CategoriaPageModule', name: 'CategoriaPage', segment: 'categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-categoria/tab-categoria.module#TabCategoriaPageModule', name: 'TabCategoriaPage', segment: 'tab-categoria', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/minha-conta/minha-conta.module#MinhaContaPageModule', name: 'MinhaContaPage', segment: 'minha-conta', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visualizar-produto/visualizar-produto.module#VisualizarProdutoPageModule', name: 'VisualizarProdutoPage', segment: 'visualizar-produto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/meus-pedidos/meus-pedidos.module#MeusPedidosPageModule', name: 'MeusPedidosPage', segment: 'meus-pedidos', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_spinner_spinner__["a" /* SpinnerProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_alert_alert__["a" /* AlertProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_network_network__["a" /* NetworkProvider */],
                __WEBPACK_IMPORTED_MODULE_12__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_categoria_categoria__["a" /* CategoriaProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_camera_camera__["a" /* CameraProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_16__providers_produto_produto__["a" /* ProdutoProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_carrinho_carrinho__["a" /* CarrinhoProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoItemModel; });
var CarrinhoItemModel = /** @class */ (function () {
    function CarrinhoItemModel() {
        this.Quantidade = 1;
    }
    return CarrinhoItemModel;
}());

//# sourceMappingURL=CarrinhoItemModel.js.map

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_configHelper__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, oneSignal, statusBar, splashScreen) {
        var _this = this;
        this.platform = platform;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__providers_usuario_usuario__["a" /* UsuarioProvider */].IsLogado ? 'CategoriaPage' : 'LoginPage';
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this._configOneSignal();
        });
    }
    MyApp.prototype._configOneSignal = function () {
        if (this.platform.is('cordova')) {
            this.oneSignal.startInit('5b534230-b458-47f7-a840-578cf2b63572');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
            this.oneSignal.handleNotificationReceived().subscribe(function (data) {
                console.log('NotificacaoRecebida', data);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                console.log('NotificacaoAberta', data);
            });
            this.oneSignal.getIds().then(function (result) {
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__helpers_configHelper__["a" /* ConfigHelper */].storageKeys.oneSignalUid, result.userId);
                console.log('OneSignal', JSON.stringify(result));
            });
            this.oneSignal.endInit();
        }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\NoFood\NoFood.Ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\NoFood\NoFood.Ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigHelper; });
var ConfigHelper = /** @class */ (function () {
    function ConfigHelper() {
    }
    ConfigHelper.Url = '/v1/';
    //public static Url: string = 'http://localhost:3000/api/'
    //public static Url: string = 'http://nofood-com-br.umbler.net/api/'
    ConfigHelper.photo = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAMbAyADAREAAhEBAxEB/8QAHAABAAEFAQEAAAAAAAAAAAAAAAYCAwQFBwEI/8QAURAAAgECAgUHCQQFCQYGAwEAAAECAwQFEQYSITFBBxNRYXGBkRQiMlJyobHB0SMzQmIVNJKi4SRDRFNzgrLC8AgXJWODkzVFVFV00iY2hJT/xAAaAQEAAgMBAAAAAAAAAAAAAAAABAUBAgMG/8QANxEBAAIBAgQDBQcFAAIDAQAAAAECAwQRBRIhMRNBUSIyYXGBFDNCkaGx0SNSweHwNEMkU2Lx/9oADAMBAAIRAxEAPwDv4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWa13bW6+2r0qftTSOV8+LH79oj6t647292N2vq6SYXS/pOu+iEWyHfiulr+Lf5O9dFmnyYVXTC0j91b1p9uUSLfjmGPdrM/lDtXh1/OYYlTTGs/urOC9qbfyI1uO3/DSPzdo4dXzsxp6WYjL0Y0IdkG/iyPbjWpntER9P9ukaDFHfdYlpJisv6So+zTicp4tq5/F+kN40WCPJZljuKS33tRdmS+RyniOqn8ct40uGPwqHjGJP+nV/wBs1+3an/7J/Nn7Pi/th5+lcQ/9dcf9xmPtup/+yfzZ8DF/bB+lsRX9OuP+4x9t1P8A9k/mfZ8X9sKljOJLdfV++RmNfqo/9ksfZsP9sLkcfxWO68m+2MX8jpHE9XH4/wBms6TDP4V6Ok+KR31qcvapr5HSOL6uPOJ+jSdDhny/VkQ0vvo+nRoT7mvmd68czx3rE/m5zw/HPaZZVPTL+tsn2wqfVEivHf7qflLnPDvSzMpaW4fPLXhWpvrjmvcSaca08+9Ex9HG3D8sdtpZ1HHMMrtKF5ST6JPV+JLpxHS37Xj9v3cbaXNXvVnQqQqR1oTjJdMXmS62raN6zu4TEx3VGzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGNc4haWa/lFxTp9Tlt8N5wy6nDh+8tEOlMN7+7G7UXGltlTzVClVrPpy1V79vuKzLxvBX3Imf0S6cPyT707NTcaWX9TZRhSorpy1n7/oV2XjWot7kRH6pVNBij3p3ayvil/c587d1pJ8FLJeCIGTWajJ795Sa4MdPdrDE3vPj0kZ1AAAAAAAAAAAAAAAAAABVCpOlLWpzlB9MXl8DatrVnes7MTET3bChj+J2/o3UproqJS+O0m4+JarH2vv8+rhbSYbd6tpb6YVo5K5tYTXTTlk/Bk/Fx28feU3+SNfh1fw2ba20mw24yUqsqMuirHL37iyxcW0uTvO3zRL6LNXtG/ybWnVp1oa1KcZx6YvNFjW9bxvWd4RZrNZ2mFZswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGusQtLKOdxXhT6m9r7t5wzarDhjfJaIdMeG+T3Y3aG70vpxzjaW8pv16jyXhvKfPxysdMVd/jKdj4dM+/LR3WO4jd5qdzKEX+Gn5q+pU5uI6nL3ttHw6JuPS4qdo/Nrt7be98SEkBgAAAAAAAAAAAAAAAAAAAAAAAAAAAro1qtvPXo1J05dMJZG9Ml8c70nafgxasWja0btxaaU4hb5KrqXEfzrJ+KLPDxjUY+l/aj4/yiZNDit26N7aaU2FxlGtrW8/z7Y+KLfBxjT5Ol/Zn49vzQcmhy193q3VOrTqwU6c4zi90ovNFpW9bxvWd4Q5rNZ2lUbMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8bSWbeSQ32GovtJbC0zjCTr1F+GnuXa9xWaji2nw9KzzT8P5S8WiyX6z0hG73SXELvONOat6b4U9/iUeo4tqMvSs8sfD+Vjj0WKnfrLUSk5ScpNuT3tvNsrJmZneUuI26Q8MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF63uri0nr29adKX5Xv7jrizZMU747bNL463ja0bt/ZaXVoZRvaKqR9ensfhuLnT8bvXpmjf4wg5eH1nrjnZI7LFLO/jnb1oylxg9kl3F5p9Zhzx/Tt9PNX5cGTH70MwkuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADyUlGLlJpJbW3wMTMRG8kRv2aLENKbW2zhbLyip0p5QXfx7io1PGMWP2cXtT+idh0N79b9I/VF77F73EG1XrPU/q47I+HHvPP6jXZ9R789PTyWeLT48Xux1YJEdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAepuMlKLaa3NPJozEzE7wd27sNJ721yhX/AJRT/M8pLv495a6bi+bF0v7Ufr+aFl0OO/WvSUpsMZssRSVGrlU4057Jfx7j0Om1+DUe5PX0nurMumyYvejozyY4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpcS0ktLHWp0nz9ZbNWL2LtZV6viuHB7Nfat/3mmYdFfJ1npCJX+LXmIy+3q+Zwpx2RXdx7zzep1ubUT7c9PTyWuLT48Xux1YREdgAAAAAAAAAAAAAAAAAJN7k2BROrTpfeVIQ9qSXxNorM9oYmYjux54rh1P08QtI9teP1OkafNPak/lLWctI72j81p49hC34rZf9+P1Nvsmo/sn8pa+Pi/uj81Ucawqfo4nZP/rx+pidLnjvSfylnxsf90fmv07y1q/d3VCfs1Yv5mk4r171n8m0XrPaV9JtZpZrpRzbAAAAAAAAAAAAAAAAAAAJtNNPJrc0Z32G9w7Se6tcqdzncUulvz138e8ttLxfLi9nJ7UfqhZtDS/WnSf0SyxxK1xGnr29VSa3xeyUe1Ho9Pq8WojfHP8AKqy4b4p2tDLJLkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABh3+KWuG09a4qZSfowW2UuxEXU6zFpq75J+nm7YsF8s7VhDsT0hu8QzpwboUH+CL2vtZ5nV8Uzaj2Y9mvp/MrbBpKYus9ZagrEsAAAAAAAAAAAAAAAAazEtIcJwnNXl9ShNfzcXrT/ZW0lYNHnz/d13j18vzcsmfHj96UUvuU2hDOOH4fUqdE68tVeCzfvLXFwK09ct9vkhX4jX8FfzR670/x+5b5uvSto9FGks/F5ssMfCNLTvEz85Rba7NbtOzT3GNYrd5+UYld1M+DrSy8ETaaXBT3aRH0cLZslu9pYMm5vOTcn+bad46dnJTkuheAHoDJdCA8yXQvAbi/RvLq3edC5r0n+SpKPwZpbHS3vRE/RtF7R2ltrbTDSC1y1MTrTS/DWyqL3oiZOG6W/ekfTo711eav4m9suUy+p5K9saFdcZUm6cvmiDl4Hin7u0x8+qRTiN496N0mw/T3A75qNStO0qP8NxHJftLNfArM3CNTj6xHNHw/hMx67DfvO3zSWnUhWpqpSnGdOW6UGmn3orLVms7TG0pcTExvCowAAAAAAAAAAAAAAAFdOrUo1I1KU5QnHdKLyaNqXtS3NWdpYtWLRtKTYZpXupYgupVor4r5ov8AR8Z/DqPz/mP4VufQeeL8kop1adanGpTnGcJLNSi80z0FL1vHNWd4VlqzWdpVmzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB42opuTSS2tsxMxEbybbo1iulMaetRw/KctzrPcuzp+BQ63jEV9jT9Z9f49Vlg0Mz7WT8kUq1alerKpVnKc5b5SebZ5697XtNrTvK0rWKxtHZQaMgAAAAAAAAAAAAAAGgxzS/C8D1qU6juLpfzFJ5te090fj1FhpOG5tT1iNq+s/49UbNqseLpPWfRzvF9NsYxXWhGt5Jbv8AmqDabXXLe/ceh03C9Ph6zHNPrP8ACry6zLk6b7R8Ec4t8Xv6yyRAAAAAAAAAAAAAAGbh2LX+E1ecsbupQfGMX5su2O5nHNp8WeNsld3THlvjnek7J3gvKRSqONHGKKpS3eUUU3H+9Heu7ModVwS0e1gnf4T/ACssPEInpkj6p1QuKN1QhXt6sKtKazjOEs0+8or0tS3LaNpWNbRaN4nouGrIAAAAAAAAAAAAAABm4fit1htTWoT8xvzqcvRl/rpJel1mXTW3pPT08nHNgpljayaYXjdricdWL5uultpSe3u6T1Oj4hi1MbR0t6f93U+fTXxdZ6x6tmT0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADGvb+3w+g6txU1VwXGT6EjhqNTj09OfJLpixXy25awhOK47cYnJwWdK34U09/a+J5TW8RyameXtX0/ldYNLTF17y1RXJIAAAAAAAAAAAAAABauLijaW87i4qwpUaazlObySRvSlr2itI3mWLWisbz2cz0k0+uL5ztcJc7e23OtuqVOz1V7+w9LouEUx7Xz9Z9PKP5/ZUajXWt7OPpH6oU3m83vZdq8AAAAAAAAAAAAAAAAAAGzwbHsQwK45yzrZQb8+jLbCfavmtpG1Okxamu2SPr5w7Yc98U71l1fR7Smx0go5U3zN3FZzt5PauuL4r/AEzyes0GTSz1619f+7LrBqaZo6dJ9G8IKQAAAAAAAAAAAAAAAexlKElKMnGSeaaeTTMxMxO8ExvG0pThGlHo0MQfUq3/ANvqeh0PGO1NR+f8/wAqzUaH8WL8v4SmMlKKlFpp7U1xPQRMTG8KuY2emQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAanF8doYZFwjlUuWtlNPd1voK7XcRx6aOWOtvT+UrT6W2Wd56QhF3eV76u61xUc5vwS6EuB5PNnyZ78+Sd5XWPHXHXlrCwcW4AAAAAAAAAAAAAABjX9/bYZZVLu7qqnRprNt730JLi30HXDhvmvFKRvMtb3rSvNbs49pJpPd6Q3XnZ0rSD+yoJ7F1y6ZfDgew0Whppa9Otp7z/3kotRqbZp+Ho0ZORgAAAAAAAAAAAAAAAAAAAAFyhXq21eFehUlTq03rQnB5OL6jW9K3rNbRvEs1tNZ3h1TRXTSli8I2l/q0r6K9JbI1V0rofSjyuv4XbBPPj61/Zc6bWRk9m/dLt5UJwAAAAAAAAAAAAAAAA22EY7XwySpyzq2z3wz2x9n6FloeI5NNPLPWvp6fJF1Glrl6x0lN7W7oXtCNa3qKcH0cOp9DPWYc9M1IvjneFLkx2x25bQvnVoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjmN6Rxtta2spKVbdKpvUOzpZScQ4rGPfHh62859P9rDTaOb+3k7IfKUpzc5ycpSebbebbPMTM2nee63iIiNoeGAAAAAAAAAAAAAAAAt169K2t6levUjTpU4uU5y3RS4m1KWvaK1jeZYtMVjeezjelGklbSG/zWtCzpNqhSf+J9b9249loNDXS0//AFPef8fJQ6nUTmt8I7NCT0YAAAAAAAAAAAAAAAAAAAAAAAVQnOlUjUpycZxecZJ5NMxMRMbSzEzE7w6botpTO9tubm069JfaU3ukvWXQea1+gjHbeO0/9sttNqZtG090wt7qlcx8yXncYveimvjtTun1tFuy+c2wAAAAAAAAAAAAAABl4fiNxhtxztCWx+lB7pLrJOm1WTTX5qT9PVyy4a5a7WTvDMUt8Uoa9J5TXp03vi/9cT1+k1mPU05qd/OPRR58FsNtpZxLcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbgInjukevrWljPzd06y49Ufqec4jxXffFgnp5z/H8rXS6Pb28n5IuefWQAAAAAAAAAAAAAAAAAcy5QNI3dXLwe1n9hRlnXkn6c1+HsXx7D0/B9FyV8e8dZ7fL1+v7KjXajmnw69o7oMXiuAAAAAAAAAAAAAAAAAAAAAAAAABkWV5WsLunc0JZTg8+prin1M55cdclJpbtLal5pbmh07D76nfWlK7t5NKSz37Yviu48zmxTjvNLLfHeLRFobu1xTLKFx+2vmQcmn86JNcvlZtIyjOKlFpxe5oizExO0u3d6YAAAAAAAAAAAAAAF62uq1nXjXoTcKkdzXHqfUdcOa+G8XpO0w1vSt68tuydYPjNHFKWWyFxFefTz966j12h19NVXbtaO8fwo9RprYZ+DaFgjAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABtJZt5JCZ2EOx7SB3LlaWc8qO6dRfj6l1fE8xxLifib4sM+z5z6/6/db6TScnt37o4UawAAAAAAAAAAAAAAAAADRaWY5+gsEqVqckrqr9nQX5nvl3Lb4E/h+l+05orPux1n/AL4o+qzeFj3jvPZxdtybbbbe1t72e0efeAAAAAAAAAAAAAAAAAAAAAAAAAAAAkWieKeSX3kdWX2Nw8ln+GfDx3eBX8Qwc9OeO8fslaXLy25Z7SnhRLJeoXNW2lnTls4xe5ml8dbx1bVtNezcW1/SuMo+hU9V8ewhZMNqdfJ3reLMo4twAAAAAAAAAAAAAFdGtUt60atKbhUi84yXA3x5LY7Rek7TDFqxaNrdk6wXG6eJ0ubnlC5ivOjwl1o9dw/iFdTXlt0tH/bwpNTppwzvHZtyyRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEO0gx7ylys7Sf2K2VJr8fUur4nmOJ8S8TfDin2fOfX/X7rfSaTl9u/dHCjWAAAAAAAAAAAAAAAAAAAOO6bYz+ltIKkacs7a1zo08tza9KXe/gj2PC9N4GCJnvbrP+FFrM3iZOnaOiNlkiAAAAAAAAAAAAAAAAAAAAAAAAAAAACbTTTaa2prgB07BMQ/SeFUbhv7RLUqL8y3+O/vPM6rD4WWa+Xkt8OTnpEtgcHUAz7XE50so1s5w6eK+pHyaeLda9HSuSY7ttSq060NenJSXUQ7Vms7S7xMT2VmrIAAAAAAAAAAAAFdKrUoVY1aU3CcXnGS3o3pe1LRas7TDFqxaNp7J3gmMwxSjqzyjcwXnx6etdR6/h+vrqq7T0tHf+YUep004Z3js2xYooAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIppHjus52NpPZuq1E/3V8zzvFeI774MU/Of8fytNHpf/AGX+iLHnlmAAAAAAAAAAAAAAAAAADUaT4p+h9Hrq6i8qrjzdL25bF4bX3EzQ6fx9RWk9u8/KHDU5fDxTZxA9u88AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJLobfcziFSzk/Mrxzj7S+qz8Ct4li5scXjy/ZL0l9rcvqnJSLEAAV0qtSjPXpycX8TW1YtG0sxMx2ba1xOnVyjVyhPp4P6EPJgmvWvV3rkie7PI7oAAAAAAAAAAAABcoV6ttXhWozcKkHmmjpjyWxXi9J2mGt6xeOW3ZP8ACMWp4pbayyjWjsqQ6H0rqPY6HW11WPftaO8f95KLUaecNtvJsScjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACPaR435JB2dtL7eS8+S/Avqyl4rxDwo8HHPtT3+H+1ho9Nzzz37fuhh5ZbgAAAAAAAAAAAAAAAAAAAc35TMR17mzw2L2U4uvUXW9kfcn4npOB4dq2yz59I/yquI5OsU+qAl+rAAAAAN2/YATT3NPsYHqjJ7oyfcA1Zeq/ABk+hgMn0AFGT3Rk+xAXI21xP0betLspyfyMbwztK9DCsRqehh95Lst5v5GOavqzy29GTDRvHKnoYNfv8A/nl9DHiU9WfDv6MmGhmktT0cDve+GXxZjxqerPg5PRk0+T7Smp/5TOPt1YL/ADGPHx+rbwMnoyqfJjpPPfbW0PauY/LM1+0Y2fs2Rl0+SfH5+ncYfT/6spfCJj7TRt9luy6fJDiD+9xe0j7NKcvoa/ao9G0aSfVdr8kFxG3bt8YpVK63RqUHGL70214GI1Ub9YJ0k7dJQTF8ExHArvybEbadGb2xe+M10xktjJNb1vG8I16WpO0tebNQAAAAXba4naXVK4h6VKamu40vSL1ms+batuWYmHV6dSNalCrB5wnFSi+p7Ty1qzWZiVzE7xvCowyAAAGXbX9W3yi/Pp+q+HYccmGt+vm3rkmrb0Lmlcxzpy28YveiFfHak9Xetot2XjRsAAAAAAAAAAADIsrytYXULihLKUd64SXQzvp898GSMlO7TJjrkry2dCw+/o4jaRr0Xv2Si98X0M9ppdTTUY4yU/8A4oM2K2K3LZlEhyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAavG8Wjhdr5uTuKmynHo631FfxDWxpcfT3p7fyk6XTzmt17QgM5yqTlOcnKcnnKT3tnjrWm0za3eV7EREbQpNWQAAAAAAAAAAAAAAAAAAN+wDh2kt/8ApLSO/uU84Oq4Q9mPmr4HudDi8LT0p8P36vO6i/PltZqiU4gADMwvCr7Gb2Nph9vOvWltyjuiulvcl1s1taKxvLatZtO0Om4NyTWlKEamM3c69Te6Nu9SC6nLe+7IiX1M/hhLppY/FKX2eiWj9gl5Pg9mmvxTp678ZZnGct57y7xipHaG0ha29JZU7ejBdEacV8jTeW+0LmrFborwMMmrH1V4Aec3D1IfsoBzdP8Aq4fsoD1Rit0UuxAVZtcX4gNaXrPxA8z6wGSAAAAAABh4nhdljFjOzv6Ea1CfB74vpT4PrNq2ms7w1tWLRtLhmluidzovfqMm6tlVb5ivlv8Ayy6JL37ywxZYvHxV2XFOOfgjp1cgAAAAdE0VuvKcBpRbzlRbpPsW1e5nntfj5M8z69Vpprc2OPg3RDSAAAAAexlKElKLaktzRiYiY2kidm0tcUTyhcbH66+ZFyafzo7Vy+VmyTUknFpp7miLMbd3Z6YAAAAAAAAAAA2GEYpUwu7VRZypS2VIdK6e1E3Ray2lyc0dp7w4ajBGam3n5Og0a1O4owq0pKVOazi1xR7PHeuSsXrO8SobVms8s91Zu1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj3t5SsLSdxWeUYrdxb4JHHUZ6YMc5L9odMWO2S0Vq53e3lW/u53FZ+dLcuEVwSPE6jPfPknJfzX+LHXHWK1Y5wdAAAAAAAAAAAAAAAAAAAAMLF7zyDBr27zydGjOS7ctnvyO+mx+LmrT1mGmW/JSbekODbeO18T3jzQAAzsIwq6xvFKGH2cNarVe97orjJ9SRra0VjeW1Kzadod+0f0fstHMNjZ2cM28nVrSXnVZdL+S4FbkvN53lZ48cUjaG1NG4AAAAAAAAAAAAAAAAAAAGDjGE2uN4XWw+8hrUqq3rfCXCS60bUtNZ3hresWjaXz1jGE3OCYrcYfdL7WjLLWW6ceEl1NFnS0WjeFXes1ttLBNmoAAASzQi4yq3ds3slGNRLs2P4oquKU6Vv9E3R26zVMinTwAAAAAAF+3u6ttLzHnHjF7mc74637tq3mvZuLa9pXKyT1Z+q/kQsmK1Pk71vFmScm4AAAAAAAAAAb/RvGPI66tK8vsKj81v8Evoy54VrvBt4V59mf0n/aDrdPzxz17wmp6pTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbSWb3AQLH8WeJXepTl/JqTyh+Z8ZfQ8fxPW/aMnLX3Y7fH4/wALzSafwq7z3lqCsSwAAAAAAAAAAAAAAAAAAAAEX5QLnyfROtBPJ16sKXdnm/8ACWnB6c2qifSJn/CHrrbYZj1chPXqMAAdq5NtG1hOCLEa8Mry+ipbVthS3xXfvfd0EDUZOa3LHaFhp8fLXmnvKbkdIAAAAAAAAAAAAAAAAAAAAAAIDyoaPq/weOL0IfyiyWVTJbZUm9v7L29jZJ019rcs+aNqce9eaPJxwnIAAAAbnRWtzOkFBZ7KilTfevqiHr682Cfh1SNNO2SHRTzy0AAAAAAAAG4DYWuKThlCvnOPrcV9SNk08T1q61y7d22p1IVYKcJKUXxREtWaztLtExPWFRqyAAAAAAAAAJro1i/llv5LXlnXpLY3+OP1R6vhOu8anhXn2o/WFNrdPyW569pb8uEEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARzSjFeYo+Q0ZfaVFnUa/DHo7/gUfGNb4dfApPWe/y/2sNDg5p8S3aEOPMLcAAAAAAAAAAAAAAAAAAAAAAgPKfXytMNt0/SqTqNdiS+Zf8AAae3e/wiFbxK3s1q5uekVIBvNEcE/T+ktpZSi3QT52v/AGcdr8di7znlvyVmXTFTnvEPoVJJJJJJbkuBWLQAAAAAAAAAAAAAAAAAAAAAAAUVaVOvRnRqxUqdSLhOL4prJrwETsTG75vxnDZ4PjV5h0887eq4J9MfwvvWRa0tzViVTevLaYYJs1AAGVhtXmMTtKvqVov3nLNXmx2r8Jb452vEuqPY2jy65AAAAAAAAAAC5Rr1KE9anJp8ehmtqRaNpZi0x2be1xGnWyjUyhP3MhZME16x1h3rkie7NODoAAAAAAAAXba4qWlzTr0ZZVIPNM6YstsV4yU7w1vSL1mtu0ujYfe08Qs6dxT3SW1eq+KPb6bUV1GKMlfN57NinFeayySQ5gAAAAAAAAAAAAAAAAAAAAAAAAAAAMXEL2nh9lUuKm3VXmx9Z8ER9VqK6fFOS3k64cU5bxWHOa9epc1516stapN60meIyZLZLze3eXoKVilYrHaFs5tgAAAAAAAAAAAAAAAAAAAAADmHKbV1sYsqPqW7l4yf0PT8Crthtb1n/Co4jPt1j4IQXiuAOm8j9KLr4vWcVrKFKCfQm5Nr3Iiaqe0JmkjrMuqENMAAAAAAAAAAAAAAAAAAAAAAAADj3Kzhvk+O2uIRjlG6o6sn+eGz4NeBO0tt6zHog6qu1on1c/JKKAACeq9Zb1tHcdcpz5ylCfrRUvFHk7RtMwu4neN1RhkAAAAAAAAAAAGZa4hVoZRl59Poe9dhwyYK26x0lvXJMNvRuKVxDWpyz6VxRDvS1J2lIraLdl00ZAAAAAAAbnR3FPIL3mqksqFZpSz/AAy4P5FpwvWeBl5be7b9/VE1mDxKbx3hOz16jAAAAAAAAAAAAAAAAAAAAAAAAAAAAQbSXE/Lb7mKcs6NBtbPxS4v5HkuLavxsvJX3a/uu9Fg8OnNPeWkKlMAAAAAAAAAAAAAAAAAAAAAAAHJOUSpr6Vyj6lvTj8X8z13Bo20u/rMqTXzvm+kIoWqEAdS5H/Qxjto/wCYh6ryTNJ5unkRMAAAAAAAAAAAAAAAAAAAAAAAACE8qVj5VokrlLOVpXjPP8svNfxRI01tr7eqPqa7039HFCerwAAe4DqmGT5zCrOfTRh8EeXzxtltHxlc453pE/BlHJuAAAAAAAAAAAABVCcqc1KEnGS4oxMRMbSRMx2bS1xSMsoV8ov11ufb0ETJp5jrV3rl9WyTTWaeafEjOoYAAAAAAJ1o3ifl1jzNSWdehknn+KPB/I9dwrV+Pi5Le9X9vKVJrcHh35o7S3RaoYAAAAAAAAAAAAAAAAAAAAAAAAANVj+Jfo/Dpaksq1XzIdXS+4ruJ6v7Ph9n3p6R/KVpMPi5OvaEAPGr0AAAAAAAAAAAAAAAAAAAAAAAAOOady1tML38qpx/cR7HhMbaSv1/dRa37+fp+yOFkiAHUeR/0cY7aP8AmIeq8kzSebqBETAAAAAAAAAAAAAAAAAAAAAAAAA1mkVl+kdG8StMs3VtpqPalmvekb452tEtMkc1Jh84p5pPpLRVAAAB07Apa2A2L/5KR5rVxtnv81vh+7q2BHdQAAAAAAAAAAAAAADItryrbPKLzhxi938DlfFW/dtW81bi2vKVyvNeU+MXvIeTFandIreLMg5NgAAAAZeGX0sOv6dxHNxTymlxi95J0mpnT5oyR9fk5Z8UZaTWXR6c41acakGpQkk01xR7itotWLR2l56YmJ2lUbMAAAAAAAAAAAAAAAAAAAAAAAA9iA57jeIfpHEpzi86UPMp9nT3niuIar7Rnm0do6R/3xX+lw+FjiJ7z3a0gpAAAAAAAAAAAAAAAAAAAAAAAAAcY01eemGI9U4r9yJ7Thf/AIlP+85UGs+/s0BPRgDqHI9vxj/o/wCch6ryTNJ5uokRMAAAAAAAAAAAAAAAAAAAAAAAABknse7iB804pauxxe9tGsuZrzp+EmkWtZ3rEqm0bWmGIbNQAB0vR156PWP9n82eb1n39vmtsH3cNmRnYAAAAAAAAAAAAAAAAE2mmnk1xRgbK1xSUcoXGcl66395GyaeJ61da5fKW0hONSClCSlF7miJMTE7S7xO/ZUYAAAAmGieI87bysaj86l51PPjHo7n8T03BdVzUnBbvHb5f6VOvw7W8SPNJC9VwAAAAAAAAAAAAAAAAAAAAAAA02kuIeRYa6cHlVr+ZHqXF/66Sr4tqfBwcsd7dP5TNFh8TJvPaEEPILsAAAAAAAAAAAAAAAAAAAAAAAAAHF9NFlphiXtx/wAET2nC/wDxKf8AecqDWff2aEnowB0/kef2mML8tH4yImq8kzSebqRDTAAAAAAAAAAAAAAAAAAAAAAAAAAcE5QLbyXTjEklkqso1l/ein8cyywTvjhW542ySjJ1cQAB0rRzZo9Zf2fzZ5vW/f2W2n+7htCM7AAAAAAAAAAAAAAAAAAAu0Lirbz1qcsulcGaXpW8bSzW017Nva4hSuMoy8yp0Pc+wh5MFq9Y6wkVyRLMODcAAZFjdzsb2lcw3wlm10rivA76fPODLGSPJzy44yUmk+bpNKrCtRhVpvOE0pRfSme6peL1i1e0vO2rNZmJVmzAAAAAAAAAAAAAAAAAAAAAABz7Hr/y/FKkovOlT+zh2Le+9ni+Janx9RMx2jpC+0uLw8cRPeWsICSAAAAAAAAAAAAAAAAAAAAAAAAADjmncNTTC9/Mqcv3Eey4TO+kr9f3UWtj+vKOFiiAHTeR9/yjGFn+Cl8ZETVdoS9J3l1QhpoAAAAAAAAAAAAAAAAAAAAAAAAAON8rNvzek1rXS2VrReMZNfNE7Sz7EwgaqPbiUCJKMAAOm4DHUwGxX/JT8dp5rVzvnv8ANb4Pu6tiR3UAAAAAAAAAAAAAAAAAAAABm2uJVKOUamc4e9HDJgi3WOkulckx3bejWp14a1OSa96IVqTWdpd4mJ7LhqyATHRO/wCdtJ2c351HbD2X9H8T0/BdTz45wz3r2+So4hi5bRePNIy8V4AAAAAAAAAAAAAAAAAAAADWY9feQ4VVnF5VJ+ZDtfHuWZA4lqPA08zHeekJOlxeJliJ7Q58eLXwAAAAAAAAAAAAAAAAAAAAAAAAAAHJ+UalzelCnwqW0H4Zr5HrOC23023pMqXiEbZt/giJboIB0vkff8txdf8AJpP96RE1XaEvSd5dWIaabwPdWXqvwAasvVfgA1Zeq/ABqy9V+AHmT6GAzAAAAAAAAAAAHuT6H4ANWXqvwAasvVfgA1Zeq/ADzJrg/AABzDlgt/s8IucuNWk3+y/qS9LPeEPVx2ly0mIYAexMDq2H0+aw21p+rRgvcjy2aebJafjK5pG1YhkHNuAAAAAAAAAAAAAAAAAAAAAAVU6k6U1OnJxkuKNbVi0bSRMx1htrXE4VMoVsoS9bg/oRMmnmOtXeuWJ7thvIzqzMKvXYYlRuM/NTyn7L3/XuJWj1HgZ65PLz+Tjnx+Jjmro6aaTTzTPcxO7zz0AAAAAAAAAAAAAAAAAAAAEK0rvefxGNtF+ZQW32nv8AdkeV4zqOfNGOO1f3lc6DHy4+afNoCmTgAAAAAAAAAAAAAAAAAAAAAAAAAAOccp9vldYbcpbJU502+xp/NnpOA39m9PlKq4lXrWyOYFojjOkUXUsbZcxF6rr1ZakM+hPi+wu75a07oFMVr9nmO6M3Wj19CzvatKdSVNVE6LbWTbXFLoN8VoyRvDnmi2K3LK7gOO32jdWvUw6VNTrxUJupDW2J5rI2vhrf3mlNRenutjX070luN+Jyproo04w+RrGmxR5Mzqs0+bX1dJMaqv7XGL158PKJL4M3jFSO1YaTmyT3tKyr7FK+67vqnZVnL5m3LSPKGvNefOVyNHGqm2NPEpdkajMb0+H6M7ZJ9f1XFZaQParbFf2Kpjmx+sfozy5fSf1VcxpHT3U8Xj3VRvin0/RnbLHr+qpYhpLbf0rF6eXTKqviY5cU+Ufoc+aPOf1Vw0w0ktnl+mLtZcKjT/xIx4GKfwsxqMsfilsLflH0io5a9e3rr/mUF8Y5Gk6THLpGsyx57t7ZcqzUcr/Cs361vVyz7pfU5W0X9su1df8A3VZf+9bD/wD2u7/7kDT7Fb1b/b6/2yf71sP/APa7v/uQH2K3qfb6/wBsvP8Aeth//td3/wByA+xW9T7fX+2VNTlXslB83hVy55bFKrFLvyMxorecsTr6+VWluuVDGqzfk1vZ28eHmOo/Fv5HWujpHeXG2uyT2iIamtp3pJWeTxWcOqnCEfgjrGmxR5OU6rLP4mO8e0kuv/McTqZ+pOfyM+Hijyhr4uWfOVLeklba3jE/+6zP9KPT9D+rPr+rx2WkUt9viz7Y1RzY/WP0Y5cvpP6qJWuOx9Khii7Y1Rvj+H6HLk9J/ValUxej6U8Qp5dLqIztSfRje8ev6kcbxai/NxS9g/8A5E18x4dJ8oPFvH4p/Nm0dMNIqGWpjF010Tkpr3pms4Mc/hbxqMsfiW8a0lxTSC0pW2JVqdWFKevBxpKMs8st6MUwUpO9S+oyXjazRO3j6zR05IaeJLIu8DxWxoK4ucOuqVCSUlVnSeq09zz3HGL1mdolI5LRG8wwqNN1q9Okt85qPi8ha3LWZ9GIjednW8lFZLcth5RdgAAAAAAAAAAAAAAAAAAAAAAAAAyba+q22ST1oeq/l0HLJirf5t63mrcW91SuY+Y/O4xe9EK+O1O7vW0W7OiaOXvlmEwjJ51KP2cu7d7j1vCtR42niJ716fwpdZi5Ms7dp6tuWSIAAAAAAAAAAAAAAAAAAC1c1421tVrz9GnFyfcc8uSMVJvbtDalZvaKx5uZ1qs69adWbznOTlLtZ4O95vab27y9JWsViKx5KDRkAAAAAAAAAAAAAAAAAAAAAAAAAACNaaYNPGrGwoUvvPLacM+hT81vu2Mt+DZfDzzE+cT+nVD12Pnxxt6pzZ2dCws6Npa01ToUYKFOK4JFtMzM7y5RERG0IppjoXX0ju6V5bXdOlVpUeb5upBtS2t71u39BJwaiMcbTCLqNNOWeaJce7dj3Ms4ndUzG07JZoLovT0gxCpWvIt2NtlrxTy5yT3Rz6OL/iR9Tm8Ou0d5SdLgjJbe3aHWbXBsLsoqNrh1pSS9WjHPxyzK2cl7d5WtcdK9oZ0VqrKOxdWw0bvdaXrPxAZvpfiAzfS/EBrS9Z+IFupRpVllVpU6i6JwUviZiZjsxMRPdpr/AEPwDEYSVXDaMJv+coLm5LvXzOtc+SvaXK+nxW7w4/pLgNXR3GKllOTnTa16NTLLXg93etzLPFkjJXmVObFOK/KkGguiuF6Q2t3WvncOdCrGKhTqasWms9uzPpOGpzXxzEVd9LgpliZt5JtHk/0Zisv0c5dcq82/iRftWX1TPsmH0Y1zycaOVIScaVzQyWedOu37pZmY1eVrbR4p+DjktXN5Z6ubyz6C0VLqeinJ/Yxw6jeYxQ5+5rRU1Rm2oU4vcmlvfTmV2bVW5tqdlng0leXmvG8ppbYXh9nFK2sbail6lGK+RFm9p7ymRSte0MtNrc2uw1bPc36z8QPM30vxA9zfS/EBm+l+IFmrbW9dZVqFKonwnTUvijMTMdmJrE94RXSfQbDsRw2tUw6zpW1/BOdN0o6qqNfhaWzb09JIw6m1bbWneEXPpaWrM1jaXG+1ZPoZaKhK9HdA77SGxV67mna2sm4wlKLlKeWxtJcM+sj5dTXHPLtvKVh0tssc2+0OyUqMadtChslCMFBprY0lltRVzO87reI2jZyPSDRejhPKBZq1pqFnc53MILdBx9KK6s8mu07Zc3/xrTPft+aL4URmjbt3b0ok8AAAAAAAAAAAAAAAAAAAAAAAAAAD2MnGSlFtNbmjExv0kTLQjHJQxdWVd7LiOqpbvOW1Z+8mcM2xZpiO1v3cNX7ePee8OknolWAAAAAAAAAAAAAAAAAACP6WXfM4dC3i/Ory2+ytr9+RTcaz8mGMcfi/aE/h+PmyTb0Qs8quAAAAAAAAAAAAAAAAAAAAAAAAAAAAF60ipXMM1nltJmgjfPH1c8vuS2p6BDM8tvRtA+ftIrPyDSbFLVLKMLqbivyyesvcy4wW5scSpNRXlyTDq3JzbRoaHW9RLzq9SpUk+nztVe6JA1U75ZWOjrtiifVKyMlAAAAAAAAHOuVe3i7TDLnLz1UnSz6mk/iidop6zCv18dKy95KIvyPFZcOdpr91mNb3qaDtZ0QhLBbrpyt6qW9wkvczMd2J7PnzB7eN1jNhbTXm1LinCS6nJZl1knasyocdd7xD6H4spF+AAAAAAAAM8tvQBwLSm2jZaUYrQprKMLibiuhPzvmXOGebHWVFnry5LQ7fg1pGwwSxtYrJUqEI9+Sz9+ZU5Lc15ldY68tIhnGjdHNKrWE3ZXbX2lJzpxfVJLP/AAkfU2mKbeskRG+6PkF0AAAAAAAAAAAAAAAAAAAAAAAAAAAAXLevUtbmlcUnlUpTU4vrTzM1tNbRaPJiYiY2l3KzuYXlnRuabzhVgprsazPVUtF6xaPNTWjlmYleNmAAAAAAAAAAAAAAAAAAgek115RjE4J5xopU12738fceQ4vm8TUzEdq9P5Xmipy4on1acq0sAAAAAAAAAAAAAAAAAAAAAAAAAAABk2P6z/dZP4d9/wDSXLN7jZF6iAHG+Uq18n0wlVSyVzb06nes4v4IstHbemyq11dr7p7yfVVU0LskvwSqQfapv6kXVRtllM0k74YScjpIAAAAAAABzrlXrpWmF2+fnOpUqdySXzJ2ijrMq/Xz0rDO5L7Z0tGq9dr7+5k12RSXxzNNZO94j4OmhjbHM+spuREwWWaz3cQOBUl+idLoRns8lv0n2RqfQuZ9vH84UUexl+U/5d9e99pTL0AAAAAAAAcAOIaQU/0nyh3dCG3nr6NJeKi/gy2xTy4Yn4KbLHPnmI9Xb8kti3LcVK5ANLpMv+H0v7X5Mjan3YZqixCbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHUdAL/ynAXbSec7Wo4f3XtXzXcXvDsnNi5fRW6qu19/VKywRgAAAAAAAAAAAAAAABbr1Y0KFSrL0YRcn3GmS8UpN58m1aza0VjzcxqVJVqs6s/SnJyfa9p4G95vabT3l6SIisREKTVkAAAAAAAAAAAAAAAAAAAAAAAAAAABkWT/AJSvZZO4fP8AX+kuWb3GzL5EAOfcpeFSvHaXcE3Kjb128uKi4S+DkS9JflnZC1lOau/o85K8QU7G/wAOk/OpVFWgvyyWT96Xiba2vWLNdDfpNXQiEngAAAAAAAHGuUjEleaUzoRecLOmqX970pfFLuLTSU2x7+qo1l+bJt6OnaLYe8M0Yw+1kspxoqU1+aXnP4kDNbmyTKywU5McQ25ydQDivKHYOy0uuKiWULqEa8X1tZS96LXS25scfBT6unLlmfV1fR3EVi2j9jep5yqUkp9U1sl70yuy05LzVaYb89Is2ZzdAAAAAAAFq5uadna1rqq8qdGDqSfUlmZiN52hi0xWN5cd0FoyxbTqndVdrp85dzz9bh75e4s9TPJi2j5KnSxz5uafm7OVa3ANJpM8rGiumr8mRtT7sM1RchNwAAAAAAAAAAAAAAAAAAAAAAAAAAAACV6AX3k+Pytm/NuabWX5o7V7syw4dk5cvL6ouqrvTf0dRL1XAAAAAAAAAAAAAAAADTaT3HMYLUin51WSpr4v3Iq+L5eTSzHr0TNDTmzRPogh5BdgAAAAAAAAAAAAAAAAAAAAAAAAAAAAF61lq3MOt5ErR25c9WmWN6S2p6JCANfiNvTuLixjWjrU5TqU5LpU6Uk0bVmY32aWiJ2iXIcNuKuhOmsoV9bm6NR0a2X4qT3S8MpdxaXiM+LoqaTOnzdfL9nbKdSFWnGpTmpwklKMovNNPc0VMxsuYnfrCoAAAAAAGux3GKOBYPXv62T5tZU4evN+jHx92ZvjpN7RWHPLkjHSbS45ozhtXSTSqlGvnUi6juLmb4xTzfi8l3lpmvGPH0VGCk5cnX5y7oVC7AAEJ5S8Hd7gdPEKUc6tlJueXGnLf4PJ+JL0mTlvyz5oetx81OaPJpuTHHY0a9bBa88lVbq2+frZedHvSz7mddZj3jnhx0WXafDl08r1kAAAAAAAgnKVjsbTC44RRn9vd5SqpfhpJ/NrwTJmkx72558kLW5eWvJHeWLyW2HNQvbyccqlWMYxb9XN/HIzrLbzEMaGm1Zt6uikJOAI7pRU221L2pP3Iiaqe0Nqo8RGwAAAAAAAAAAAAAAAAAAAAAAAAAAAABlYbduwxO1u1/M1YzfZnt92ZvivyXi3o1vXmrMO4xalFSi801mmeqhTPQAAAAAAAAAAAAAAAER0wuM69tbp+jFzffsXwZ5vjuTe9Mfp1WvDqezayMlAsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAD2L1ZKS4PM2rbltFo8iY3jZuU00mtz2nqYmJjeFf2emRr8YqcxaUrj+quKcn2Z5P3M2p1nZrfpG6P6b6Hyx+nC8sdSN/Rjq6snkq0eCz4NcH3HfT5/D9m3ZG1On8T2q90JwzSrH9EJLD7u3lKjB7La6i4uPsy6PFEu+HHm9qJQ6Z8uD2Zj80ts+VHCaqSu7S7tpcXFKpH3ZP3Ea2jvHad0quupPvRMNrS090aqr/xNQ6qlKcfkc502WPJ1jV4Z82QtMdHGtmM2nfJr5GvgZf7W32nF/dCmemmjcN+MWz9nWfwRn7Pl/tY+04v7mHX5RNG6Kerd1az6KVCT+ORtGlyz5NJ1mKPNpb7lWt4xasMNqzfCdxNRXgs37zrXRT+KXG2vj8MIvXqaTadXcHzNStTg/MUI6lGlnxzezvzbJERiwR/26NM5tRP/AGzpeiWi9LRrD5QlONW8rNOtVS2bN0V1L3kHPmnLPwWWnwRir8ZSE4O4AApqU4VacqdSKnCacZRks0096YidiY36S5HpBoFieEXkrvCIVLi1jLXp80/taPFbN7y6UWeLU1vG1+6qzaW9J5qdYXsM5TcTssqGKWkLtx2OX3VXv2ZN9yNb6SlutZ2Zprb16XjdJbblNwKslz8Ly3lx1qWuvGLOE6PJHbqkV1uOe+8NjT060aqLZitOPtwnH5Gk6bLHk6RqsM/iX1pjo41n+mbT9p/Q18DL/a2+0Yv7oW56baNQW3F6D9lSfwRn7Pl/tY+04f7mBccpGjtFPm6tzXfRToNe+WRvGkyS0nWYo7dUdxPlTr1IunhlhGi3sVW4lry7orZ8TvTRx+KUe+umfchrsE0RxjSjEvL8W56nbVJa1WvW2TqroivdnuXA3yZ6Yq8tO7ni0+TNbmv2dB0a5t3GIypQUKXORhCMdyis0ku7Ig5PLdY4tuuyQHJ1AIfj9fnsVnFPZTSh3738Sv1Ft7/JvHZrDiyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4HZtGLx32jdjWbzlzShLtj5r+B6XSX58NZVOavLkmG2JDkAAAAAAAAAAAAAAAc+0hr8/jdw+EGoLuX1zPGcTyc+qt8On5L7SV5cMfFrCvSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABs7Opr26XGOwv8AQZefDEecdETLXazIJrk1uPw18Cu10Qz8GjanvQ0ye7LIw6v5VhttW4zprPt3MxaNp2bVneN124tbe8pOlc0KVam/wVYKS8GImY6wTWLRtMI/daA6N3Tb/R/MyfGhUlD3Z5HaNTljzcLaTFPk1lXktwaT+zu76n/fjL4o6RrL+cQ5TocflMrD5KcP4YpeLtpwM/bbejH2Cv8AdKqHJXhi9PEb2XYoL5D7bb0g+w09ZZlHkz0fpPOp5ZW9uvkvckazq8k9m8aLFHfduLPRLALBqVDCrbWW6VSPOP8AezOVs+S3eXWunxV7VbhJRiopJRW5LYkcnZ6AAAAAADEvcLsMRjle2VvcddWmpPx3m1b2r7stbUrb3o3aK45PdG7htqynRb/qa0o+55o7RqssebhOkxT5NdU5LcHl93eX1P8AvRl8jeNZfziHOdDj8plZfJTYcMUvO+nA2+229GPsFf7pVw5K8LT8/Eb2S6lBfIxOtv6QRoaess2hya6PUWnUhdV/7Su0v3UjSdXklvGixR3byw0ewfDGpWeG21Ka/GoZy8XmzlbLe3vS70w46e7DMva/k9jcV2/Qpyl35GlY3nZvado3aPRCP8iuZPjVS/dOmXvDni7SkZydVq4rxtrepXn6MIuRra3LEzIgc5yqVJVJvOUm2+1lXM7zu6KQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADpPJzdc5hNzbN7aNbWXZJfVMu+GX3xzX0lX6uu1olMyyRAAAAAAAAAAAAAAHkpKMXJ7ks2Ymdo3lmI3cvrVHWr1Kr3zk5eLzPAZLze82nzl6WteWsR6KDRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX7WtzVbb6MtjJmiz+Fk69pc8tOaraHoENi4lDnMLu4dNGXwM17wxbtLWaKXHO4VKk3tpVGu57V8zfLHVpino3pzdAAAAAAAAAAAAAAAAAAAAAAABp9J6/NYLOOe2rOMPm/gb449pzyT7KzolHLCqj6az+CM5e5i7N8c3RHNI79Sasqb3PWqZdPBfMianJ+CG0Qj5EbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMOTu55vGri3b2VqGaXXF/RsseGW2yTX1hE1cb0iXTC8V4AAAAAAAAAAAAADCxatzGEXdTiqUku17PmRdbfk097fCXbT15stY+LnG48M9CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADOtbpZKnUeXRJlvo9ZG3h5J+Uo+XF+KrKqxU6M48JRa9xa77dUfuiGidfmsRq27eypT2dsf4ZnfLHTdwxTtOyZHB3AAAAAAAAAAAAAAAAAAAAAAAEV0vr51LW3T3J1H8F8GdsUd5ccs9obDRaOWCxfTUm/ga5PebYvdXMVxqnaQlSoSU7h7Nm1Q7evqImXNFekd3WIROUnOTlJtybzbfFkCZ3bvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAButErjybSmwlwnN03/eTXxyJOjty56uOeN8cuxHpFUAAAAAAAAAAAAAA0ulNXm8EnH+snGPvz+RV8Yvy6WY9ZiEzQ13zR8EFPILsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5CtUhklNqPRmdqZ8lI2rbo1mlZ7wilGt5BjiqblSrvPszafuPX+9VTx7NnQuwjJQAAAAAAAAAAAAAAAAAAAAAAAgWkNfyjGq+TzjTypruX1zJNI2qjZJ3sot7u4jZxoRrzjS2+bF5Layr1eS3iTG/RIxR7EKCI6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX7Gs7bELautnN1YT8JI2x25bxPpLW0b1mHdT1amAAAAAAAAAAAAAARrTGplZ21P1qjfgv4lFx222OlfWf8LHh0e3afgiB5lbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAEVxaGri1yuDnn4rP5nssFubFWfhCmyxteYTbBrryvCbeq3nJR1Jdq2HO8bS70nerPNWwAAAAAFutXpW1GVWtUjCnHfKTERv2JnbujlXSXyms6ds3SjnlFyW2X07Dr4e3dpGSJnZco4xdUn58lVXRJbfExyw3Z8McoOPn06kZdCyZryjHr45OWyhTUfzT2vwMxUYUsaubf7SpcZr1Wk8+425d2LWivduMKxehilJ6nmVo+lTe/tXSjS1JqxW8WbE1bAAAAAAUVasaNGdWXowi5PuWYiNyZ2czqTlVqSqS9Kbcn2slobJpbKUewpNRO+Wybj92FZxbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePc+wDuuH1efw62rf1lKEvFI9VjnmpE/BTXja0wyDdqAAAAAAAAAAAABEdMZ517Sn0RlL3o83x23t0r81rw6PZtKMlAsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEcx2Oribl69OD92XyPWaC3Np6fJU6iNsktpojd5Sr2cnv8AtIfB/I7ZY8zFPklRxdgAAAAYOJYrbYZS1qstao15lOO+X0XWbVrNmtrRVCcRxO5xKtr1pZRXo04+jH+PWSK1ivZHtabd2EZasy3vpU8o1M5Q6eKNZrv2dKZJjpLYwnGpFSg1JPijR3iYnsx7i9hSzjDKU/cjMV3aXyRHSGsqVJ1Za05Ns6RGyPMzPWXtGtUoVY1aU3CpF5xkt6ExuRO3ZNcGx2niMVRrZU7pLdwn1r6Ee9NusJFL83SW5NHQAAAAGn0lueYwapBPzqzVNdm9+5G+ON7OeSdqoMSUdmxWUEuooMk73mfinV6RD00bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOy6L1ee0Yw6b/AKiMfDZ8j0uknfBWfgqc0bZJbckOQAAAAAAAAAAAAEL0ulnitKPq0V72zyvHJ31ER8P8yuOHx/Smfij5TJ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRaQx+2tp9NNx8H/E9Lwq2+n29JlW6uNr7tfh927G/o3K3Ql5y6VxXgWNo3jZGrO07ujxlGcIzi84yWafSiKlvQAACPYvpLC2cqFlq1Kq2Sqb4x7Ol+461x79Zcr5NukIlVq1K9WVWrOU6knm5SebZ2iNnCZ3UAAAFUak4JqMmk9+T3jYiZhSAAAexk4yUotpp5prgBK8I0mjUUaF/LVnuVbg/a6H1nG2Pzh2pk8pSVPNZrczk7CUpSUI73x6EZiN2JnYk6FN6ri6suOe026Q16y8ToTerqOjLhsyHSTrCH6WXMp4hC0e6jHN5cW/4ZHXHXaHLJbedkfW15G8ztG7nHVnHnlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdb0Jqa+ilmvVc4/vM9DoJ3wV/7zVepj+pKQkxwAAAAAAAAAAAAAgulUs8bkuinFfE8jxmd9VPyhd6GP6P1aUqkwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABqdIIZ2tGfq1GvFfwLzg9/fp8pQdbHaUfLtBSzRnF4SoqwrzUZw+6cn6S9XtRxyV84d8d/KUlOTqx7u9trGnr3NaNNcE977FvZmImezEzEd0SxbSOteqVG2UqNB7G/wAU+3oXUdq44jrLhbJM9IaM6OYAAAAAAAAAAANthePXOHZU5fbW/wDVt7Y+y+HYaWpFm9bzVMcOxO2vrevWtqmc0vQeySyWe7vOfLNY6uvNFuzIjJUaClHLWk3m3tySMdoZ7youLmNO3q+VJLUjrLPfnwRmImejEzERu57d153dOnc1XnVlOSk/9dhI26I2+8sems6ke046i3LitLpjje0Mwo00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6poBLW0ZivVrVF78/mX3Dp/ofWVbqvvEoJ6MAAAAAAAAAAAABAtJn/x2t1Rh8Dx/F/8Ay7fT9l5ovuY+rUFYlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAHsFHWpRlBPXim5cVnnuJMREbV2ct57qY+isyPMbS6w9MAAAwsVouth1VRWco5TXd/DMncOy+HqI37T0cNTTmxzt5IsepVQBkwxG9hDUheV4x6FUZjlj0Z5p9WPKcpycpycpPe5PNmWHgAC5Qo1LivCjSi5VJvKKXETOxEb9ISS20Q81O6unnxjSj839DlOX0doxerPhothsPSjWn7VTL4GviWbeFVejo7hS/oqfbOT+ZjxLM+HX0V/oHC1/Qqfi/qY57ep4dfQeA4U/wChU/F/Uc9vU8Ovoolo7hUv6Ll2TkvmZ8Sx4dfRYnorhsvR56HZUz+KM+JZjwqsC60RcYuVtdZtfhqRyz719DaMvrDWcXpKPXNpcWlV07ilKnJPJp5HX4uPnssgZNlXVGq4yeqpbnnlkzMMS2UMTxe1i6UKvlFHPOKqZNrvZiaQ257eqxc395Ucri+rudRrKnTW5dyMxEQ1mZlr6klqU6UXnGC2vpb3iSFVvHObl0EHXX2pFfV3wR13ZBVpQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1Dk8eejlRdFzP4RL3hv3M/NXav3/olhYIoAAAAAAAAAAAAEB0l/8er9kP8ACjx3Fv8Ay7fT9l7ovuI+rUlalAAAAAAAAAAAAAAAAAAAAAAAAAAAEnLPVyyW9t5Jd5vWkyxNogy81yU4SS36r3G04+nSWIt6vY/fW3sQ+Z0/FDTylTH0ThbvLpHZ6k5JtaqitmtJ5I2rSZ6sTbYaaSecZJ7E4viLU2jci25/rJGkRM9mw4tbJSpx6pS2+B0jH6y05vRFsRsZ2lxPV1ZUX50ZQeaS6D1OkzeNiiZ7x3VWanJfZhElzexjKctWEXKXQjLCvmktjr0U+jWzGxupnTnTycktV7pReafeNhSYZbHA7mNri1KrOOcEmpP1U1vMWrNo2htS0VneU9jNSScatFp7VlPY+8j8qRzKnrLPOOrlvcnkl3mOWWeZ4m28lKnJ9Clt95nlY5nqef0Zq2egeZ7Ukm29yQiNyZ2eZ9M6S6tbM25WvMOSjJa7UVGSbeezLpzER1JnogmK3lG/v7qUJxjB6sYSls1tVvNkmkbRtKNed53hr+aj/wCoo+LM7Nd1M6bgk9aMoy2JxeaGwqpc64vVrOnCO9uTyECmpGUajU3nLpzzzXaJHkYynLVhFyl0IDNpUNSCTrUVLitb5lPqZ8TJM7peP2aq+Zq5tOKWSzcm9mXaR+SXTmgVLWeUatKUuhS2vsM8npJzKHmm01k1vTNJjZkDKqNOUo6zcYRe6U5ZJm0UmWs2e8036FSnN9EZbTPJ6HMo3PJrJremaTGzIGQAAAAAAAAAAAAAAAAAAAAAAAAAAAHTuTv/APX63/yZf4Yl5wz7mfmrtX78fJLixRQAAAAAAAAAAAAIFpN/49W9mHwPH8X/APLt9P2Xui+4j6tQViUAAAAAAAAAAAAAAAAAAAAAAAAABk21Fb28kbVjedmJnaB5Tk0nlTh08F09rOsxzTt5Q07dfMzWUlGMvOWTlJ7cuw156xG1Wdpnu9j99bexD5nT8UNfKVMVrasV+J5HKI3vs332q982cpSz1YQ3ZcFwS62bz7U9e0Ne3zG80oqOUU9ba823lkaWtG20Noid95FLUhrr0pZpPoS3s2r7Nd/OWJ6zs9jTjrqDcnPe1HYo9rNopHn3Ym0+TEvbTyqLVFtzg9aLfFcU+pknQ5/AzdPdnu5Z8fPTr3RSeqpz1dkdZ5dh6dVrslKKjbwXnz2z630diRkU5W8dj52XTKOSXcY6D2L5mSTetQqLb1r6oyLc4unOUHvi8jAutSUKVCG+olKXXnu8EZGdYYtUw+XNUa1R088sppOHhw7jS1Kz3bVvard2uk9CcnTuaFSjKmm5OL14rLfkjnOKXSMsejOp47hdaL1bpqWWerUi9vu3mvhy28SHktIcMUVUdzrbdRuMG8+Ke4zNLTBGSsS9hpHhU/6Vq+1CS+Rr4dm3iVKmP4bTpa/lSlrtrzYttpcN3SbRS2zWb13YV3pTa0ZSp0aNatNbHuhBfMzGL1azl9GhucYu8Su6fPT1aWssqUNkVl8e861rES52tMx1YMIwarTqazUGtkXlvbNmpnQ9Sr+0jHQ6vJzi4KEIuMVLW2vNt7gPf6JP+0XwHkeZX9OH9lESQuU4PUp04rbV86XWs8kjhqcnJj6d5b4681urK1aEXqSlU2bHNZZJ9nQVG1eyXvPd4qc3V5iU2lFvPbsXHPIbTvsb9N3qhSq+bTc1L8OvllL6Das9jeY7vG+coKf4oPVb6U9xietSOkvKcYubctsIpykunqMUjzZtKr7xOtVk1HPJKO99SNu/WWO3SCtThDUS1lN7XFvPLo7xaIjsRO5Wbzpqf3ij5/y78jF2arZo2AAAAAAAAAAAAAAAAAAAAAAAAAAAAdP5O1/+PVX03MvhEvOG/cz81dq/f+iWliigAAAAAAAAAAAAQTShZY5UfTTi/ceQ4xG2qn5QvND9zH1aYq0sAAAAAAAAAAAAAAAAAAAAAAAAAFVPZXpN7tb5M6Yvea37LdNPmJLitVvsRvHWswx5w9bSWZx2bq4rK4ox4xjGL7Um2SPxRDl5SpobatJ9Lz9zNKe+2t7qmH6vL2omfwyecKjg3eNpRoN7lv7pbTv/AGy5+qprJ1oOcYyc885PJOO3YbT5wx6SNrV1IejxfrP6HO1oiOWraI36yj2OWPNyd1Tj5kvTS4Pp7y74Xq+evg27x2+X+kLVYtp54YctuIVFntnFqL63FZFz5oLEW4w2XJ7bLsqNfujyYe3X6xPsXwQkhej+v0PYX+FmfNhhr0F2GGWXL9buv7OXwRlhbtf1qn3/AAZiGZUw/Uv+ovgPIUGGVyX6vb+1L4o2YK/6zV9oxJDyj+sUvaQglVH7q6XHOL/eZkU0YxlV85ZxinJ9xiCXs2p0I1NSMZa+q9VZJrLMB/RJ/wBovgPI8yv6cP7KIkhm0Y6tS06XCGfvKnUZOfJ07JWOvLVbn6M+8iT3do7Ml/r8vZ/ynX8TTyWbb76j2/I5095tPYh+r1vaj8Tbyljzh7D7quuOqn3J7TFe0sz3VwlGKtpy9CLlFvoZvHaGsvE40s5a8alZ7mnml19prO1evmz3Wuve3vb4nOZ3bPHJJ5NrMD0MgAAAAAAAAAAAAAAAAAAAAAAAAAAdS5Po5aNN+tXm/gi+4b9z9ZVuq+8SonowAAAAAAAAAAAAEJ0tjq4vB+tRj8WeU43G2pifhH+Vzw+f6X1aEp04AAAAAAAAAAAAAAAAAAAAAAAAAHj6nk96ZmJ2ncnqq86U3UppqS2uK3p/NM7d/aq59ukvFKWt5tKKl0qm8/4Gd58oNo9TLUTTf2ktj256q459ZifZjee53+T2nsrUujW+TNMfvNr9lMYuNBpprz4rabzG1Z3a+cPTg6CyacJPJN5xb3J9fUdaTExyy0t0neCTlHKNSmnlsWsns70bb2jpMbsdPKXmvD+pj4sb/wD5NvipuIQnbtOGUakJZxbz3G+P2ctLR06wxPWsxKLV7dpxgpfaQXmPPLXjw70euid1TavLOymLdWqoVqGcm8nJJxfaZarTTdk0vOyqvd7IHt1+sTXUl7jEkL0E3eUJ5PV1E8+Hosyww192uwwyy5pq5uZNPV5uW3huRlhbtf1qn3/BmIZlTD9S/wCovgPIVpKFKnJUVUck2202lt3GR6lJyVaslCEN0css+hJAWW3KTk97ebMDzNpprY1tXaGWQ9bXdxQWal6Ucs8m96a6DLCj7SonCnRUE/S1YtZ9rfADyq4pRpwecYb5Li3vMSQRTla1Ek21NPJdg8hkRoOdTWktlOlFPty3HHU22xzt6OuGu87smEZOratJtakVnl0Z5lT5wkMeW2MsuOZynu3jsymn5ZKeT1NTPW4Zap1/E08li32V6PajnT3m09iP6vW9uK95t5Sx5kJ6k1LLNZNNdKfA0rO0tpjdWlOmnKmucpS6Vmu9cGb9Y7dmvfu8jKEpJeTLa8tjeY3+B9VuotSVSKeeq2kaTG07No7K35sZKMmstbJJ78tz6H0nVooyybWWW7Z0bNxzt3bx2DVkAAAAAAAAAAAAAAAAAAAAAAAAAHWNBYamitu/WnUl+8/oeg4fG2CPqrNTP9SUkJqOAAAAAAAAAAAABD9MYZXttPppteD/AInmeO1/q0n4f5W/Dp9i0fFGyiWAAAAAAAAAAAAAAAAAAAAAAAAAAAHjSfatzMxMx2NnucmsnUnl7TNvEt6scsCSSyRqyNZgHm2nKUpZbs3mZm0z3YiIgNWQAnKKyjOUV0J7DeL2hiaw916n9bPxM+JZjlhRUzcJtttuL2tm2K0zkrv6x+5MRFZaWvQjcUtV796fQz1sTtKvtXmjZqZyrU26cqk1lsa1jruizG07SojKUHnCUo59DDDzrbbfSwy91pampry1fVz2Bh4YZeuUnFRc5OK3JvYZYeJtNNPJrc0GVU6lSplrzcst2YYIznBZRnKK6EwPG3J5yk5PpbzA8MMgBNxecW0+lPIyKpVKk1lKpKS6GxuwpMMq6SqOolTbUns2Mb7ERvOzbc2qVrKKbeza3vb6SLnnfHaUuleXoxVKSi4qclF70mVPNMOm0PDDL3Wlq6utLV9XPYZ5p7MbQ8MdhVOpUqZa83JLdmZm0yREQpMMvU3F5xk4vpTyMxMwxsq56t/Wz8TPPLHLCg1bCzWWT3btieRtzSxtAlkagGQAAAAAAAAAAAAAAAAAAAAAAAAAdh0Rp83orh66aet4tv5no9FG2CqqzzvkluyU4gAAAAAAAAAAAARfTKH2VpUy3SlHxSfyPP8AHa+zS3zWfDp62hEzzi0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFM/u5eyzph+8r84/di3aWq4HrpQGNd23Px1o/eLd19Rms7Od6czUtNPJrJo6I4AAAAAAAAAAAAAABs7G35uHOSXnSWzqRpaXfHXbrLJrfcz7CPn+7s7R3YJUtwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAexNgduwalzGCWNL1KEF+6j1GCOXHWPhCnyTveZZx1aAAAAAAAAAAAAAaHSynr4RGeW2FWL8c18yo41XfTb+kwncPnbLt6whJ5NcgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmf3cuxnTD95X5x+7Fu0tVwPXSgBgYd5ac6nUprz+K6TettnK9N+sNYbuAAAAAAAAAAAAAGZZWvOS5ya8xbl0s1tO3R0x036y2ZzSFFb7mfYcs/3dmY7sEqW4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArpU3WrU6S3zko+LyM1jedmJnaN3d4RUIRit0Vkj1cRtGyllUZAAAAAAAAAAAAANdj1LnsEu4pbVDWXc8/kQeJU59LePhv8Al1SNJblzVlzw8UvwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABVT+9h7SOmL7yvzhi3aWTd4TRuM50/sqnSlsfaj1XNsgNJcWla1llVg0uEltT7zeJ3FgDEurNVs5wyU/czattnO+PfrDWSjKEnGSaa4M6I8xs8AAAAAAAAAAMu2spVWp1E4w6OLNZts6Ux79ZbNJJJJZJbkc0h6BRW+5n2HLN93ZmO7BKluAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANno7Q8p0jw+llmufjJ9i2/I76avNmrHxc807Y5l2k9MqAAAAAAAAAAAAAAFuvTVahUpPdOLj4o0yV56TX1bVty2iXMHFxbi962M8BMbdJel336vDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAV0vvoe0jrh+8r84Yt7stwenQHkoRnFxnFSi96a2Aai7wVPOdq8n6kns7mbxb1GnqU50puFSLjJb00bC1Uo06qynFP5GYnZiaxPdh1MN406ndI2i7lOL0WJWNxH8KfYzbmhpOOyh2tdfzUhzQxyW9Hnk1f8AqpeA3g5Leh5LX/qpeA3g5Lej1Wlw/wCakOaDkt6K1YXD3xiu2Q5oZ8Oy9DDX+Ool7KMc7aMXqyaVpRpPNRzfTLaazaZdIpEL5q3AAFFX7qfYc833dmY7sEqG4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlGgNu62kqq5bKFGU+95R+bJ3Dq75t/SEbVTtj2dUL9WgAAAAAAAAAAAAAAHOMXoeT4vdU8slzjkux7fmeH12Pw9Tevx/fq9Dp7c2KssIiOwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABco7a9P2kdtPG+Wvzhrf3Zbc9MggAC1XtqVzDVqwUlwfFdjMxOw0l3g9WjnOjnVh0fiX1NosNabAAAAAAAAAAAAAFNT7qXYaZfcn5MwwCnbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADoHJva5Ur+7a3yjSi+xZv4ot+F06Wsg6y3aE8LZCAAAAAAAAAAAAAAAIVpbQ5vE6dZLZVp7e1fwaPK8bx8ueL+sfsueH33xzX0loCmTgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9aR1rmHVtJeipzZ6/Dq55Z2pLanoUMAAAAGJd4fQu83JatT147+/pMxOw0d3h9e0zclrU/Xju7+g3idxiGQAAAAAAAAAAPGs4tdKMTG8TA1+7YUsxt0dAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1vQm08l0Xtm1lKs5VX3vZ7kj0Ogpy4I+PVV6m2+SUhJjgAAAAAAAAAAAAAAAR/S235zDaddLbSqLPsez45FNxvFzYIv6T+6fw++2Sa+qFnlVwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbGyouEHOS86W7sLzQYJx057d5/ZFzX3naGUWDiAAAAAA3ga27welWznQypT6Pwv6G0WGkr29W2nqVYOL4Pg+xm8TuLQAAAAAAAAABiXFPVnrLc/iV2qxctuaO0tolZIrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXSpSr1YUoLOdSShHtbyMxEzO0MTO0bu6WtCNraUbeHo0oKC7Esj1VKxWsVjyU1p3nddNmAAAAAAAAAAAAAAADGxG28rw64t+M4NLt4e8j6rF42G2P1h0w35MkW9HNO3eeEejAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbzO24zbazeanVXZH6lrpdDO/Pl/L+UfJl8qs4tkcAAAAAAAAAU1KcKsHCpFSi+DQGnu8FaznavNepJ7e5m8W9RqJQlCTjOLjJb01kzYeAAAAAAAAeSipJprNMxasWjaRh1aMqbz3x6Stzae1OsdYbxK2R2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN/obZeW6TW2azhQzrS7t3vaJehx8+ePh1cNRblxy66eiVYAAAAAAAAAAAAAAAAAc6xq18kxe4ppZRctePY9v1PE8Qw+FqbV8u/5vQaa/PiiWAQncAAAAAAAAAAAAAAAAAAAAAAAAAAAtu7aBjXWIWVks7q8t6C/5lWMfizrTDkye5WZ+UNbXrX3p2aS5080cts1+kVWa4UKcp+/LImU4Vq7/g2+fRHtrcFfxbtRccqWGQzVvYXdbrk4wXxZLpwLNPvWiPzlxtxLHHaJlq6/KrdvPyfCrePRzlWUvgkSq8Bp+K8/k424lbyq63hFe3vsLtL+3S1LijGom9rWa3eOwY9JjwTMVjr6u/izkiJZ52YAAAAAAAAAAAAAsXFpRuo5VYZvhJbGu8zE7DSXeE1rfOVP7Wn0pbV2o3i2415kAAAAAAAANJpNiEcGwid3ThF1nOMKcZbm2/omc40mPLb0+TnlyzjruiNLT6svvsPpy64VGvimbW4VX8Nv0R41s+cM+jp1h8/vba5pdiUl8ThbhmWPdmJdY1lJ7w2VDSjBq+SV9CD6KsXD4oj20Oev4fydI1GKfNs6NxQuFnQrU6q6YTUvgR7UtX3o2dYtE9pXDVsAAAAAAAAAAAAAAAAAAAAAAAAAAAA6HycWGra3d/JbaklSg+pbX737i44Zj2ra/wBEDV26xVOS1QwAAAAAAAAAAAAAAAAAiumFpst7uK3fZy+K+Z57jmH3csfL+Fpw7J3p9UVPOrMAAAAAAAAAAAAAAAAAAAAAAAYd9i2H4ZHWvr2hb9VSaTfdvO2LT5c07Y6zLS+WlPenZF7/AJTMGts42lK4vJLio83Hxlt9xZ4uCai3vzFf1/ZDvxDFX3eqM3vKdi9fNWlva2seDydSXi9nuLHFwPBX35mf0Rb8RyT7sRCPXukuN4hmrnFLqUX+GM9SPhHIsMei0+L3KR/3zRb6jLf3rS1T86Ws9r6XtZKcQAAA7VyS4x5Zo7Wwycs6tjUziv8Alz2rwesiBqqbW5vVYaW+9eX0dBIySAAAAAAAAAAAAAAAYV3hlC6zklzdT1orf2ozFtho7qxr2j+0jnHhOO43idxjGQAAAAADnPKHiPPYjb4fB+bbx15+1Ld7viS9PXaN0DVX3tFfRDCQigAD2LcJa0W4vpTyYnr3GxttIMWtMlSv62qvwzeuvfmR76TDfvWHWufJXtLc2unV7TyV1a0ay6YNwfzREvwzHPuTMfq711lo96G7tNNMKuMlWdW2l/zI5rxRDycOzV93q711eOe/RvLe6t7uGvbV6daPTTkmQr0tSdrRskVtFu0rxq2AAAAAAAAAAAAAAAAAAAAAAHYs30AdrwHD/wBGYJaWmWUoU05+09r97PT6fH4eKKqjLfnvMtidnMAAAAAAAAAAAAAAAAAMPFbTy7DK9BLznHOPtLaiLrcHj4LU8/L5u2DJ4eSLOb+48M9CAAAAAAAAAAAAAAAAAAABZuru2saDr3dxSoUlvnUkor3m+PHfJblpG8/Bra1axvadoQ3FeU3DbXWp4dQqXtRfjl9nT9+1+CLjBwTNfrlnlj85/hBycQpXpSN0KxPTrH8T1ou78mpP+btlqe/e/EuMHC9Ni68u8/Hr/pAyazNfz2+SOylKc3OcnKT3yk82+8sIjaNoRu7wywAAAAAAAk2gWOLAtLLWrUnq21x/J674KMtz7pZPxOWanPSXbBfkvD6FKxZgAAAAAAAAAAAAAAADxpSTTSae9MDV3eDU6mc7dqEvUfov6G0W9Rpq1GpQnqVYOMuvibi2AAAWrm4pWlrVuazypUoOcn1IzEbztDEzERvLid9eVMQv693V9OtNzfVnw7lsLGsbRtCptabTMyxzLUAAAAAABVTqTozU6U5Qmt0ovJ+KMTEWjaWYmY6w3tjpfitplGpUjdU1wrLb+0tvxIWXh+G/aNp+CRTVZK9+qTYfpnht3lC41rSo/X2x/aXzK7Lw7LTrXrCVTVUt36JDCpCrBTpzjOEt0ovNPvIMxMTtKTExPWFRhkAAAAAAAAAAAAAAAAAAG60Uw79JaRW1OUc6VJ89U7I/xyJOjxeJmiPKOrjnvy0mXYj0iqAAAAAAAAAAAAAAAAAAAA59j9n5Fi9VJZQqfaQ79/vzPGcTweDqLRHaesf9819pMniYo9Y6NYV6SAAAAAAAAAAAAAAAALF5e22H20rm8r06FGO+dSWS/i+o6Y8V8tuWkby1tetI5rTtDnuOcpzzlRwShs3eU14/4YfXwL/S8E/FqJ+kf5n+Fbm4j5Yo+qA32IXmJ3Dr31zVuKvrVJZ5di3LuL3Fhx4q8uONoVt8lrzvad2MdGgAAAAAAAAAAAPoHk/0iWkGjNJ1Z615aZUK+e95LzZd696ZW58fJb4Ss8GTnp8YSo4uwAAAAAAAAAAAAAAAAAUVaNOvBwqwUo9DG40t3g04Zztm5x9R719TeLeo1bTi2pJprembDwCE8oGMc1bU8KpS8+rlUrZcILcu97e4k4KdeaUTVZNo5Ic8JSCAAAAAAAAAAADLscTvcNqa9pcTp9MVti+1bjllw48sbXjdvTJanuymOFabW9fVpYjBUJ7udhtg+1b17ypz8NtXrinf4eadj1cT0v0SqE4VIRnTlGcJLNSi8012lbMTE7SlxO/WFRhkAAAAAAAAAAAAAAAAdJ5PMN5jDa2ITj59xLVg/wAkfq8/AuuG4tqTknzV+rvvaK+iZlmiAAAAAAAAAAAAAAAAAAAAaDSqy5/DlcxXn0Hm/Ze/5Mp+M6fxMPiR3r+ydoMvLk5Z80KPKLkAAAAAAAAAAAAAAAjGk+mllo9F29NK5v2tlFPZDrm+HZv7Cz0PDcmp9qelfX1+SJqNXXD0jrP/AHdyXFsZv8buvKL+4lVkvRjujBdEVwPVafTYtPXlxxt/3mpsuW+Wd7ywDu5AAAAAAAAAAAAAAJBodpLU0Xx2nd+dK1qLm7mmvxQ6V1p7V4cTnlx89dnXFk8O276Gt7ijd21K5t6satGrFThUi81KL3NFZMTE7Ss4mJjeF0wyAAAAAAAAAAAAAAAAAADHurKhdr7SPncJrejMTMCKaRTho3h1S+uZKdGPmwyeTnJ7o5dLOuOOedoaXvFK7y4ffXtbEb2td3EtarVlrS6F1LqW4saxFY2hV2tNp3ljmWoAAAAAAAAAAAAADZYTjl7g9TOhPWot5yoz9F/R9aI+fTY88e139XXHmtjno6JhGN2mM0HOhLVqxXn0ZelH6rrKHUaa+CdrdvVZ4s1ckdGyI7qAAAAAAAAAAAAAAvWltUvbuja0VnUqzUI9rNqUm9orHm1taKxvLt9laU7Gyo2tFZU6UFCPceopSKViseSotabTMyvm7UAAAAAAAAAAAAAAAAAAACmpTjVpypzWcZJprpTNbVi1ZrPaWYmYneHNb60lY3tW2nvhLJPpXB+B4XUYZwZbY58nosWSMlIvHmxzg6AAAAAAAAAAAAAQnTXTT9EKWG4bNO/a+0qb1QT/AM3wLrhnDfH/AKuX3fL4/wCv3QNXq/D9inf9v9uTznKpOU5ylKcnnKUnm2+ls9TEREbQppnfrKkywAAAAAAAAAAAAAAAAJhoZp5daMTVrcRlc4ZOWbpJ+dSb3yh81ufUzhlwxfrHd3w55x9J7O34ZilljNjC8w+4hXoT3SjwfQ1vT6mQLVms7SsK2i0bwzDVsAAAAAAAAAAAAAAAAAGl0j0owzRmz56+q51ZL7K3htqVH1Lgut7Dpjx2vO0OeTJWkby4TpNpTf6U4gri7ahSp5qjbwfm0182+LLDHjjHG0K7JknJO8tIdHMAAAAAAAAAAAAAAAAXba5rWdxC4t6kqdWDzjJGt6VvWa2jeG1bTWd4dK0fx6ljVs1LKndU19pTXH8y6vgee1WlnBb4StMOaMkfFuSI7gAAAAAAAAAAAATXk9wrnr6tidSPmUFzdPPjN733L4lnw3Dvack+SHq77Ryx5ujl0gAAAAAAAAAAAAAAAAAAAAAAEY0tsNanTvoR2w8yp2cH4/EoON6besZ6+XSf8LLh+XaZxyiR5tagAAAAAAAAAAAjGmelC0ew5U7eSeIXCapLfqLjN/LpfYWfDdD9pyb292O/x+CJq9T4Ndo7z/27jE5zqVJVJylKcm5SlJ5tt72z2ERERtCimd+sqTLAAAAAAAAAAAAAAAAAAANlgmPYlo9eq6w65dKT9OD2wqLolHj8TS9K3jazel7UnersmjHKThWOqFteONhfvZqVJfZ1H+WT+D29pByae1esdYTseorfpPSU1OCQAAAAAAAAAAAAAApqVIUaUqtWcYU4LOU5tJRXS29wiNzs5vpRyq21qp2mAKNzX3O6mvs4eyvxPr3dpLx6aZ63RMupiOlHJby9usRu6l3eV6le4qPOdSo82/8AXQTIiIjaEKZmZ3lYMsAAAAAAAAAAAAAAAAAAAv2l3Wsbqnc289SrTeafyfUaZMdclZrbtLatprPNDqWEYpRxewhc0vNl6NSGe2EuKPNajBbDfllb4skZK80M84ugAAAAAAAAAAVU6c6tWFOnFynOSjGK4t7kZiJmdoYmdusu1YJhkMIwi3s45OUI5zkvxSe1vxPTYMUYscUVGS/PabNgdmgAAAAAAAAAAAAAAAAAAAAABbr0IXNvUo1FnCcXFo0yY65KTS3aW1LTW0Wjyc2vLWdld1bap6VOWWfSuDPC58NsOScdvJ6LHeMlItHmsHFuAAAAAAAAAMbEL+hhmH1725lq0aMHKXS+pdbew64cVs2SMdO8tb3ilZtbtDg2L4pcY1ile/uX9pVeyPCEeEV1JHudPgrgxxjp2j/t3nMuS2S83swTs5gAAAAAAAAAAAAAAAAAAAAAEq0e5QMc0fUKMayu7OP9HuG3qr8st8fh1HG+Cl/hLtjz3p07w6dgnKZgGLKNO4qvDrh7NS59BvqmtnjkRL6e9e3VMpqKW79ExhOFSnGpTlGcJbVKLzT7Gjg7qgAAAAAAAAFm6u7axoOvd3FK3orfOrNRXizMRM9IYmYiN5QTHOVjCbJSpYVSniFbcqjzhSXe9su5d5IpprT73RHvqqx7vVy/HtK8Y0jqf8Qu26KecbemtWnH+7x7XmyXTHWnZDvltfvLSnRzAAAAAAAAAAAAAAAAAAAAAANvo7jDwjEozm35NVyhWXVwl2r6kXV6fxse0d47O+DL4dvg6gmmk0009qa4nm1q9DIAAAAAAAAAmGgOD+V4lLEasc6VtshnxqP6L4oseHYOa/iT2j90TVZNq8sebpheK8AAAAAAAAAAAAAAAAAAAAAAAAI1pXh3OUI31OPnU/NqZcY8H3fMouNaXmrGeveO/wAv9LHQZtp8OfNEDzK2AAAAAAAAAHMOUzHXWuqWC0J+ZRyq18uM36Me5be89NwTS8tZz27z0j5eap4hm3mMUeXdz4vlYAAAAAAAAAAAAAAAAAAAAAAAAADPw3G8Uweeth1/cW3TGnNqL7Y7n4GtqVt3htW9q+7KYYfyuY7bJRvbe0vYr8Ti6UvGOz3HC2lpPbo711V479UltOWLCqiSvMMvKD4unKNRfJnKdLbyl2jV184behyn6KVkta+rUn0Vbea+CZpOnyR5N41OOfNlx5QdFJLP9N267YzX+U18DJ6NvHx+ryfKFonBZvGqL9mE3/lHgZPQ8fH6sG45U9FqKepc3Nd9FO2l88jaNNklrOpxw0t5yyWcU1Y4RcVHwlXqxgvBZs6RpJ85c51ceUIxiPKppJepxt529jB/1FPOX7UszrXTUjv1cbam89uiI3l9d4jW569uq1zV9etNyfv3HeIiOkOE2messcywAAAAAAAAAAAAAAAAAAAAAAAAADoWhmK+WYc7OrLOtbZKOe9we7w3eBQ8RwcmTnjtP7rLS5OavLPkkxXpYAAAAAAABcoUKlzcU6FGLnVqSUIRXFszWs2mKx3liZiI3l2nBsMp4RhVCyp5PUj50vWk978T0+DFGLHFIVGS83tNpZ51aAAAAAAAAAAAAAAAAAAAAAAAABTOEalOUJxUoyTTT4o1tWLRNZ7SzEzE7w5zilhLDb+pbvNw9KEnxjw+h4jWaadNmnHPby+T0GDLGWkWYZFdgAAAAAAGLiV9SwzDbm+rfd0Kbm105bl3vJd51w4pzZK4695aZLxSs2nyfP8AdXVW9u611XlrVq03Ob628z3mOlcdYpXtDzdrTa02nvKybtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADY4FiLwvF6Fy3lTz1KnXF7H9e4j6nD4uKa+fl83XDfkvEur9jzXSeZXAAAAAAAABO+T/BNacsXrx2RzhQT4v8AFL5eJa8N0+/9W30QtVk/BDoJcIIAAAAAAAAAAAAAAAAAAAAAAAAAAGo0hwv9IWLnTjnXo5yh1riit4no/tGLevvR2/hL0mfwr7T2lAjxy8AAAAAAAQHlQxTmcNtcMhLKVxPnai/JHd4y+Be8Dwc2S2afLpHzn/Su4jk2rFI83LT06nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp+i9+7/AAGhKTzqUvsp925+GR5zW4vDzTt2nqttPfmxx8G5IjuAAAAABn4NhdXGMUo2dLNazznP1Ire/wDXE64MM5bxSHPJeKV5pdotbalZ2tK2oQUKVKKjGK4JHpqVilYrXtCptM2neV02YAAAAAAAAAAAAAAAAAAAAAAAAAAAAQnSbCvJLryulH7Gs/OS/DL+J5Ti+j8LJ4tPdt+k/wC1zos/PXkt3j9mhKdOAAAAAA4jpviP6S0svJRlnToNUIdkd/vzPacMw+Fpax5z1/P/AEoNZk580/DojpYIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASzQS85u+uLOT2VYa8V+aO/wBz9xV8Tx70i/p/lM0dtrTVPClWIAAAAAHWNDsA/Q+G87XhleXCUqme+C4R+vWeg0Wn8Km9u8qzUZee20doSQmo4AAAAAAAAAAAAAAAAAAAAAAAAAAAABZuraleW1S3rRzhNZP6nLNirmpOO/aW+O80tFqudX9lVw+8nb1d8d0vWXBniNTp7afJOO3k9BiyxlpFoYxwdAAAAxsQvI4fht1eT3UKUqngs17zrhxzlyVpHnOzW9uSs29HzzKcqk5Tm85yblJ9Le1nvoiIjaHmZnfrLwywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGfgt35DjVpcZ5RjVSl7L2P3M46jH4mK1fg6Yrct4l1nceXXIAAAAJhoPo95dd/pK5hnbUJfZxf45rj2L49hY6DTc9vEt2j90TU5eWOWO8umF4rwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1OO4SsTtM4JK4p7YPp6iu4joo1OPevvR2/hK0uo8K3XtKBSi4ycZJqSeTT4M8dMTE7SvYnd4YAABFOUS88l0RrU08pXNSFFdmes/dEtOD4+fVRPpEyh6+/LhmPVxo9gogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwDr2GXPlmF2tznm6lKMn25bfeeVzU5Mlq+krrHbmpEso5twABs8CwatjmJwtaecaa86rU9SP16Dvp8E5r8sOeXJGOu8ux2trRsrWlbW8FClTioxiuCPSUpFKxWvaFTa02neV42YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFtJsG1tbELeO1ffRXH831PP8X0G++oxx8/5/lZ6LU/+q30/hFDzi0AAHNuVW724ZZp8J1pLwivmei4Dj9/J8o/yq+JW92v1c4PRKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADpGhlxz2j0IN7aNSUO7PNfE8/xGnLnmfVaaW2+Pb0SAgpIBdtrateXNO3t6bqVaktWMVxZtSk3tFa95YmYrG8uw6PYHRwLDY0IZSrS86tUy9KX0XA9HptPGGnLHfzVWXJOS27bEhyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANJrJrNDuINpBgrw+t5RQj/JpvcvwPo7Og8lxPQfZ7eJT3Z/T/vJdaTU+LHLbvH6tIVKaAcd5SLnn9LZ089lChTh3tOT+J67g1OXSxPrM/wo9fbfNt6QiJbIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE20BreZfW7e5wqL3p/BFPxWvWtvmn6Ke8JkVKc9SbaSTbexJcQOpaH6MrCLbyy7gvLqsdz/AJqPR29PgX2i0vhRz296f0Vuozc87R2SknowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABRWpU69GdKrBThNZSi+KNL0rkrNbRvEs1tNZ3jugGM4RUwu5yWcqE39nP5PrPHa/RW0t//wAz2n/C+02ojNX4taQEhwfSu48q0sxSrnmvKJRXZHzfke50FOTS44+H+3ndTbmzWn4tOS3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACTaD1tTHKlPhUoS9zT+pXcTrvhifSUvRztk2+DoRRLJ0LQvRV0tTFb+n9o9tvSkvR/M+vo6C40Ok2/q3+iDqM+/sVTotUIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALN3a0b22nQrw1oSXh1rrOWbDTNSaXjpLfHktjtzVc/xTDauE3WpU86k/OhUy2SS+Z43WaO+mvyz2ntPqvsGeuWvNH1fM11Vde7r1ntdSpKfi2z21K8tYr6Q89ad5mVo2agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbjRWrzWktn0SlKHjFkTXRvp7O+mnbLD6H0O0T8odPFMQp/YrzqFKS9Pok+roXEgaLR839TJ28krUZ9vYq6KXKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABi4hYUMSsqlrcRbhUi1mtjjs3p8Gcc+CmanJeG+PJbHPNV8n6daCYhoRivMV1KtY1W/JbtLZUXQ+iS4rvR0raZ6W7tJjzhFTdqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB1nkk5NbjGb220jxSEqWG0Jqpb02ttzJcfYXv7DW0RaNpbVmYneH0WkksluMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr8bwTD9IcKrYbidvGvbVVk4venwafBrgzW1YlmJ2fLmn3J9iOhGI+frXGGVZZW92lv/LPol7nw6ErbynuxMecIcbtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA61yX8k9THZUcbx+jKnhaylQtpLKVz0OXRD/F2bzOz6Ip04UqcadOEYQilGMYrJJLckjDKoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxcSw2zxfD61hiFvTuLWtHVqU6izTX+uJiYie7MTs+Z+UXkvvdDq07+yVS6wWUtlXfOhn+GfV0S8cnvxEzHSWJjzhz03agAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG8Dt/JnyPObo43pRb5RWU7fD6i39Eqq+EfHoMM7O6JKKSSySDL0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKKtKnXpTpVqcalOcXGUJrNST3prijExv3HAuUbkbq4fz2L6L0ZVbTbKrYR2zpdLp+tH8u9cM9yxvMd+xMbuNm7UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF+zsrrEbylZ2VvUuLmtLVp0qcc5SfUgPonk45IrbRzmsWxyNO5xZedTpelTtn1etPr3Lh0mGdnVAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOX8oXJDZaS87ieDc3ZYs/OnHLKlcP8ANl6MvzLv6THbsd3ztieF32DYhVsMStaltdUnlOnUWT7V0rrWxmd92rEMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABvtFdD8Y0wxHyTC7fOMWueuJ7KdFdMn09S2sD6Y0I5PcI0Js/5NHyi/qRyrXlSPny6o+rHqXfmYbJcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEe0r0MwbTHD/JsUt86kU+ZuKeyrSf5X0dT2MD5u025Nsa0LrSq1oeV4Y5ZQvaUfNXQpr8D93QwxshplgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqegnI1iOPuliGOqrh+GvKUaWWVasux+gut7ehcQzs+hMKwjD8Dw6lYYZa07a1pLzadNZLtfS+t7TDLNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoq0qdelOlVhGpTmnGUJLNST4NcQON6b8h1vd85f6KuFtWfnSsKjypy9h/gfU9nYGNnDMQw69wm+qWWIWtW1uqfp0qsdWS6+tda2GWGKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3OjmiuM6V33kmEWc60k/tKj82nSXTKW5dm/qA+hdB+SLCNFnTvb/VxHFY7VVnH7Ok/yRfH8z29hhnZ0YMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0mkmiWC6WWXkuL2UKyX3dVebUpvpjJbV8AOB6Y8i+N4A6l3hGvitgtuUI/b011xXpdsfAyxs5m002mmmnk0+DDDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX7SzucQu6dpZ29W4uKjyhSpQcpS7EgOx6G8hNau6d5pVVdGnvVjQn579ua3dkfFGGdnb8Nwuxwexp2WHWlK1tqayjTpR1Uv49YZZYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHaW8mejulynWubbya/a2XltlGbf5lul3+IHCdK+SPSTRl1K9Kj+k7CO3n7WLcor81Peu7NGWECDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5QoVrqvChb0qlatUeUKdOLlKT6ktrA6nonyG4xiupc49V/Rdq9vMxylXkuzdDvzfUGdncdHNEMD0UteYwixp0XJZTrPzqlT2pPa+zcYZbwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEO0p5MdGdKtetc2fk17L+l2uUJt/m4S70BxfSbkT0kwVzrYZq4varauZWrWS64Pf/db7DLGzm9ajVt606NelOlWg8pU6kXGUX1p7UGFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLw3CsQxi7VrhtlXu67/m6EHJrt6O1gdX0Y5BcSu3CvpHeRsaW921u1Oq+py9GPdmGdnZdHdDsB0Voc3hGHUqM2sp1n51WfbN7X2bjDLegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTY7opgWktHm8Xwy3usllGco5Tj2TW1eIHKNIf8AZ/hLWraO4q4cVb3q1l3Tjt8U+0MbOWY9oLpNo25PE8IuIUY/z9Nc5S/ajml35GWEeTzWaea6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD1JykopNylsSW1vsQEywDkr0u0g1J0sMlZ28v5+9fNLLpUfSfgGXVdHuQXBbLUrY5eVsSqra6NPOlS9z1n4rsMGzqGG4Th+D2kbXDbKhaUFup0aaiu/LeGWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8aTWTQEUx3k10T0gcp3eEUadeX8/bfYz7c47+9MDnGNf7Pj86eB412Ub2n/nj/APUMbOfYvyXaY4NrSrYLVuKS/nLNqssuxed7jIiNWnOhVdKtCVOot8JxcZLue0MKQAAAAAAAAAAAAAAAAAAAAAAGRZWN5iVZUbG0r3VV/goU5VH7kBNsH5HNMsWcZVLCnh9J/jvKii/2Y5y9yDOzoWC/7P8AhlDVqY1itxdy3ulbRVGHjtk/cYNnSME0O0e0civ0VhFrbzX86oa1R9s3nL3hlvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCxDB8MxanzeI4fa3cMssq9KM/igIXifIvoXiObp2FWxm/xWlaUV+y817gxsiGI/wCzzB5ywzSCceiF1bqX70WvgDZFb/kM0xtG/J42F6uHNXGq33TS+Jk2Ru95PNMLBvn9HMQaW+VKnzq/cbDDQ3FheWcnG6s7mg1wq0ZQ+KAxtaPrR8QPcgAAAAAAMgD2bwPFKLeSkm+hMDOtMGxS/aVnhl7cN7uat5y+CAkNlyYaa37XNaPXVNPjcONJfvNMMpLh/ILpTc5O7usOs48U6kqsvBLL3g2SvDf9nvDabjLE8cu7jpjb0o0l4vWZg2THC+SbQvC9WUMFp3NSP47uUqz8JPL3BnZL7aztrKiqVrb0qFJboUoKCXcgLwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeSjGcXGSTT3p7QNdcaPYLd5+U4RYVs9/OW0JfFAamvycaG3P3mjeG/3KKj8MgbMGpyRaC1f/IKUfYrVI/CQNmLPkX0HluwytH2bur/APYMbLX+5HQn/wBHd/8A+yf1BsLkR0JTz8iun1O8qfUGy/DkY0GhvwmpL2ruq/8AMDZlU+SbQalllo9by9upOXxkGdmxt9ANEbVp0tG8LTXGVtGXxzA21vg+GWf6th1pQ/sqEY/BAZuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/9k=';
    ConfigHelper.storageKeys = {
        token: 'landme.token',
        user: 'landme.user',
        selectCategory: 'landme.select.category',
        oneSignalUid: 'landme.onesignal'
    };
    ConfigHelper.Events = {
        atualizaoQuantidadeProduto: 'atualizacao.quantidade.produto'
    };
    return ConfigHelper;
}());

//# sourceMappingURL=configHelper.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__network_network__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpProvider = /** @class */ (function () {
    function HttpProvider(http, spinnerSrv, alertSrv, networkSrv) {
        this.http = http;
        this.spinnerSrv = spinnerSrv;
        this.alertSrv = alertSrv;
        this.networkSrv = networkSrv;
    }
    HttpProvider.prototype.createHeader = function (header) {
        if (!header) {
            header = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]();
        }
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        var token = __WEBPACK_IMPORTED_MODULE_0__usuario_usuario__["a" /* UsuarioProvider */].GetTokenAccess;
        if (token) {
            header = header.append('x-access-token', token);
        }
        return header;
    };
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Carregando os dados...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.get(url, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser carregado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.post = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Salvando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.post(url, model, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_1 = '';
                        err.error.validation.forEach(function (_err) {
                            msg_1 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_1);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert('Informação', err.error.message);
                    }
                    else
                        _this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.put = function (url, model) {
        var _this = this;
        this.spinnerSrv.Show("Atualizando informações...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.put(url, model, { headers: header })
                    .subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    console.log(err);
                    if (err.status == 400) {
                        var msg_2 = '';
                        err.error.validation.forEach(function (_err) {
                            msg_2 += "<li>" + _err.message + "</li>";
                        });
                        _this.alertSrv.alert(err.error.message, msg_2);
                    }
                    else if (err.status == 404) {
                        _this.alertSrv.alert('Informação', err.error.message);
                    }
                    else
                        _this.alertSrv.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
                    resolve({ success: false, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider.prototype.delete = function (url) {
        var _this = this;
        this.spinnerSrv.Show("Removendo registro...");
        var header = this.createHeader();
        return new Promise(function (resolve) {
            if (_this.networkSrv.IsOnline) {
                _this.http.delete(url, { headers: header }).subscribe(function (_res) {
                    _this.spinnerSrv.Hide();
                    resolve({ success: true, data: _res, err: undefined });
                }, function (err) {
                    _this.spinnerSrv.Hide();
                    _this.alertSrv.toast('Não foi possível realizar a exclusão do registro!', 'bottom');
                    resolve({ success: true, data: undefined, err: err });
                });
            }
            else {
                _this.alertSrv.toast('Você está Offline, e infelizmente não pode ser enviado os dados!', 'bottom');
                resolve({ success: true, data: [], err: undefined });
            }
        });
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1__spinner_spinner__["a" /* SpinnerProvider */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* AlertProvider */],
            __WEBPACK_IMPORTED_MODULE_5__network_network__["a" /* NetworkProvider */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__http_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__ = __webpack_require__(33);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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




var UsuarioProvider = /** @class */ (function (_super) {
    __extends(UsuarioProvider, _super);
    function UsuarioProvider(http) {
        var _this = _super.call(this, __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario", http) || this;
        _this.http = http;
        _this.url = __WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].Url + "usuario";
        return _this;
    }
    UsuarioProvider.prototype.autenticate = function (email, senha) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/autenticar", { email: email, senha: senha })];
            });
        });
    };
    UsuarioProvider.prototype.register = function (usuario) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.http.post(this.url + "/register", usuario)];
            });
        });
    };
    UsuarioProvider.RegisterLogin = function (result) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token, result.token);
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.user, JSON.stringify(result.usuario));
    };
    Object.defineProperty(UsuarioProvider, "GetTokenAccess", {
        get: function () {
            return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UsuarioProvider, "IsLogado", {
        get: function () {
            return (localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__app_helpers_configHelper__["a" /* ConfigHelper */].storageKeys.token) != undefined);
        },
        enumerable: true,
        configurable: true
    });
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__http_http__["a" /* HttpProvider */]])
    ], UsuarioProvider);
    return UsuarioProvider;
}(__WEBPACK_IMPORTED_MODULE_1__app_base_providerBase__["a" /* ProviderBase */]));

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderBase; });
var ProviderBase = /** @class */ (function () {
    function ProviderBase(url, http) {
        this.url = url;
        this.http = http;
    }
    ProviderBase.prototype.get = function () {
        return this.http.get(this.url);
    };
    ProviderBase.prototype.getByUid = function (uid) {
        return this.http.get(this.url + "/" + uid);
    };
    ProviderBase.prototype.post = function (model) {
        return this.http.post(this.url, model);
    };
    ProviderBase.prototype.put = function (uid, model) {
        return this.http.put(this.url + "/" + uid, model);
    };
    ProviderBase.prototype.delete = function (uid) {
        return this.http.delete(this.url + "/" + uid);
    };
    return ProviderBase;
}());

//# sourceMappingURL=providerBase.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map