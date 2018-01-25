"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var car_component_1 = require("./car.component");
var productList_component_1 = require("./products/productList.component");
var star_component_1 = require("./shared/star.component");
var product_service_1 = require("./products/product.service");
var product_detail_component_1 = require("./products/product-detail.component");
var order_component_1 = require("./orders/order.component");
var notFound_component_1 = require("./shared/notFound.component");
var home_component_1 = require("./home/home.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'products', component: productList_component_1.ProductListComponent },
                    { path: 'products/:id', component: product_detail_component_1.ProductDetail },
                    { path: 'orders', component: order_component_1.orderComponent },
                    { path: 'home', component: home_component_1.homePage },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', component: notFound_component_1.notFound }
                ])
            ],
            declarations: [
                app_component_1.AppComponent,
                car_component_1.CarComponent,
                productList_component_1.ProductListComponent,
                star_component_1.StarComponent,
                product_detail_component_1.ProductDetail,
                order_component_1.orderComponent,
                notFound_component_1.notFound,
                home_component_1.homePage
            ],
            providers: [
                product_service_1.ProductService
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map