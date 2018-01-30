import {NgModule} from '@angular/core'
import { ProductListComponent } from './productList.component';
import { ProductDetail } from './product-detail.component';
import { ProductService } from './product.service';

import {RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations:[
        ProductListComponent,
        ProductDetail
    ],
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'products/:id',component:ProductDetail}
        ])
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{};