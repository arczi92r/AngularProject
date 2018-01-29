import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'appchild',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public email= "arek@pl";
public name= "Arek";
public surname = "";

    constructor() { }
    @Input('') blabla: Array<any>;
     @Input('') zmienna: string;
    @Output() change = new EventEmitter();

    ngOnInit() {
    } 
    onKeyUpEmail(x){
        console.log("Enter clik email" , x);
    }
     onKeyUpName(x){
        console.log("Enter clik name" , x);
        this.name = "ziomeczek";
  
    }
     onKeyUpSureName(x){
         this.blabla = [
    {
        "id": 1,
        "type": "Condo",
        "price": 220000,
        "address": "Areczko",
        "description": "Excellent place, really nice view!",
        "bedrooms": 2,
        "bathrooms": 1.5,
        "area": 921,
        "image": "crib-1"
         }];

        console.log("Enter clik surename" , x);
        this.surname = "Tchorzeski";
        this.zmienna = "wartosc z child";
        this.change.emit();
    }
}
