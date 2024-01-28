import { CommonModule, NgFor } from '@angular/common';
import {Component, Output, Input, EventEmitter} from '@angular/core';

@Component({
selector: 'Child',
standalone: true,
imports:[CommonModule],
templateUrl: './child.component.html',
styleUrl: './child.component.css'
})

export class ChildComponent{
@Input()
    childName:string = "muhashim";
@Input() 
    childAge:number = 10;
@Output()   
    angularEvt: EventEmitter<string> = new EventEmitter<string>();
@Input()
    obj=[{
        id:1,
        product:"Product",
        productName:"Himaliya"
    }]
    SentData(){
        this.childName = "sheikh" + this.childName;
        this.angularEvt.emit(this.childName);
    }
}