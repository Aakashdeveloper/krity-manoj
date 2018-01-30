import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component'
import {CarComponent} from './car.component'
import { orderComponent } from './orders/order.component';
import { notFound } from './shared/notFound.component';
import { homePage } from './home/home.component';
import { ProductModule } from './products/product.module';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        ProductModule,
        RouterModule.forRoot([
            {path:'orders',component:orderComponent},
            {path:'home',component:homePage},
            {path:'',redirectTo:'home',pathMatch:'full'},
            {path:'**',component:notFound}

        ])
    ],
    declarations:[
        AppComponent,
        CarComponent,
        orderComponent,
        notFound,
        homePage
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule
{}
