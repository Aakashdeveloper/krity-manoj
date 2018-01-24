import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http'

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { ProductListComponent } from './products/productList.component';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductListComponent,
        StarComponent
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
