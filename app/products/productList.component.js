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
var product_service_1 = require("./product.service");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(_productService) {
        this._productService = _productService;
        this.title = "***PRODUCT LIST***";
        this.showImage = false;
        this.filterProduct = "Apple";
        this.imageWidth = 50;
    }
    ProductListComponent.prototype.KrityManoj = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.onRatingClicked = function (message) {
        this.title = "Product List   " + message;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        console.log("hi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        this.products = this._productService.getProducts();
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-product',
            templateUrl: 'app/products/productList.component.html',
            //styles:['thead{color:red}']
            styleUrls: ['app/products/product-list.component.css']
        }),
        __metadata("design:paramtypes", [product_service_1.ProductService])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
/*binding
-One Way Binding Ts ==> HTML
    ~Data
    ~Property
    ~event
-Two way binding TS <==> HTML
*/ 
//# sourceMappingURL=productList.component.js.map