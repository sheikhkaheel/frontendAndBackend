import {Component} from '@angular/core';
import { ChildComponent } from '../Child/child.component';

@Component({
selector:"Parent",
standalone:true,
imports:[ChildComponent],
templateUrl:"./parent.component.html",
styleUrl:"./parent.component.css"
})

export class ParentComponent{
    parentName:string = "Kaheel";
    parentAge:number = 21;
    parentFullName:string = "";

    GetData(val:string){
        alert("Working...");
        this.parentFullName = val;
    }
}