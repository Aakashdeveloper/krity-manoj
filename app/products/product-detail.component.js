"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProductDetail = /** @class */ (function () {
    function ProductDetail(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.pageTitle = "Detail page";
    }
    ProductDetail.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ":" + id;
        this._route
            .queryParams
            .subscribe(function (params) {
            _this.name = params['name'];
            _this.desc = params['desc'];
            _this.imgurl = params['imgUrl'];
        });
    };
    ProductDetail.prototype.onBack = function () {
        this._router.navigate(['/products']);
    };
    ProductDetail = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], ProductDetail);
    return ProductDetail;
}());
exports.ProductDetail = ProductDetail;
//# sourceMappingURL=product-detail.component.js.map