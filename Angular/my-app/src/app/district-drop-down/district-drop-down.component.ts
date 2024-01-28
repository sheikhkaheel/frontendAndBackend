import { Component, Input } from '@angular/core';
import { GeneralDropDownComponent } from "../general-drop-down/general-drop-down.component";

@Component({
    selector: 'DistrictDropDown',
    standalone: true,
    templateUrl: './district-drop-down.component.html',
    styleUrl: './district-drop-down.component.css',
    imports: [GeneralDropDownComponent]
})
export class DistrictDropDownComponent {
  DistrictList = [
    {
      key:1,
      val:'Sringar'
    },{
      key:2,
      val:'Pulwama'
    },{
      key:3,
      val:'Ganderbal'
    },{
      key:4,
      val:'Anantnag'
    },{
      key:5,
      val:'Bandipora'
    }
]}