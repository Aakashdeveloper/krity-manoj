import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { ProductListComponent } from './products/productList.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { ProductDetail } from './products/product-detail.component';
import { orderComponent } from './orders/order.component';
import { notFound } from './shared/notFound.component';
import { homePage } from './home/home.component';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products',component:ProductListComponent},
            {path:'products/:id',component:ProductDetail},
            {path:'orders',component:orderComponent},
            {path:'home',component:homePage},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:notFound}

        ])
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductListComponent,
        StarComponent,
        ProductDetail,
        orderComponent,
        notFound,
        homePage
    ],
    providers:[
        ProductService
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule
{}
