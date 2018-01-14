import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { ProductListComponent } from './products/productList.component';


@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        AppComponent,
        CarComponent,
        ProductListComponent
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule
{}
