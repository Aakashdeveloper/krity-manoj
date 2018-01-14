import {Component} from '@angular/core';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/productList.component.html'
})

export class ProductListComponent{
    title:string="***PRODUCT LIST***"

}



/*binding
-One Way Binding Ts ==> HTML
    ~Data
    ~Property
    ~event
-Two way binding TS <==> HTML
*/