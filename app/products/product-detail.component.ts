import {Component,OnInit} from '@angular/core'
import {ActivatedRoute,Router} from '@angular/router';


@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetail implements OnInit{
    pageTitle:string="Detail page"
    name:string;
    desc:string;
    imgurl:string;

    constructor(private _route:ActivatedRoute,
                private _router:Router){}

    ngOnInit():void{
        let id= +this._route.snapshot.params['id']
        this.pageTitle += `:${id}`

        this._route
            .queryParams
            .subscribe(params=>{
                this.name=params['name'];
                this.desc=params['desc'];
                this.imgurl=params['imgUrl']
            })
    }

    onBack():void{
        this._router.navigate(['/products'])
    }

}