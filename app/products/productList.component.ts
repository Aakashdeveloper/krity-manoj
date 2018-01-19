import {Component,OnInit} from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    selector:'pm-product',
    templateUrl:'app/products/productList.component.html',
    //styles:['thead{color:red}']
    styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    title:string="***PRODUCT LIST***";
    showImage:boolean=false;
    filterProduct:string="Apple";
    imageWidth:number=50;
    products:IProduct[];

    KrityManoj(): void{
        this.showImage = !this.showImage
    }
    
    constructor(){}

    onRatingClicked(message:string):void{
        this.title= "Product List   "+ message
    }

    ngOnInit(): void{
        console.log("hi>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
    }


}



/*binding
-One Way Binding Ts ==> HTML
    ~Data
    ~Property
    ~event
-Two way binding TS <==> HTML
*/