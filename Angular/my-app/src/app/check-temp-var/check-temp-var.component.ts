import { Component } from '@angular/core';

@Component({
  selector: 'tempVar',
  standalone: true,
  imports: [],
  templateUrl: './check-temp-var.component.html',
  styleUrl: './check-temp-var.component.css'
})
export class CheckTempVarComponent {
  ExecuteFun(val1:any,val2:any){
    alert("Sheikh" + val1  + " " + val2);
  }
}
