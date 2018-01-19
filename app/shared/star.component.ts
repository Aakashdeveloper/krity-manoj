import {Component,OnChanges,Input,
        Output,EventEmitter} from '@angular/core';

@Component({
    selector:'sai-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    starWidth:number
    @Input() rating:number
    @Output() ratingClciked: EventEmitter<string> = new EventEmitter<string>()
    ngOnChanges(): void{
        this.starWidth = this.rating*86/5
    }

    onStar():void{
        this.ratingClciked.emit(`The rating clicked is ${this.rating}`)
    }


}

/*
function add(a,b){
    return a+b
}

var a = add(1,2)*/