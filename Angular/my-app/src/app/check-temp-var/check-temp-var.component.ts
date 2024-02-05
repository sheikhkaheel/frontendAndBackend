import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'tempVar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './check-temp-var.component.html',
  styleUrl: './check-temp-var.component.css'
})
export class CheckTempVarComponent {
  lastname:string = ""; 
  firstname:string = "";
  ExecuteFun(val1:any,val2:any){
    alert("Sheikh" + val1  + " " + val2);
  }
//   OnSave(frm:HTMLFormElement){
//    // alert("hello!");
// console.log(frm);
// }
  OnSave(frm:NgForm){
   // alert("hello!");
console.log(frm);
}

  }