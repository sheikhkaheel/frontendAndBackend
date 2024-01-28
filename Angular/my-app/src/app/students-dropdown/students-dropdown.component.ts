import { Component } from '@angular/core';
import { GeneralDropDownComponent } from '../general-drop-down/general-drop-down.component';

@Component({
  selector: 'StudentDropDown',
  standalone: true,
  imports: [GeneralDropDownComponent],
  templateUrl: './students-dropdown.component.html',
  styleUrl: './students-dropdown.component.css'
})
export class StudentsDropdownComponent {
  StudentsList = [
    {
      key:1,
      val:'Kaheel'
    },{
      key:2,
      val:'Zaid'
    },{
      key:3,
      val:'Zubair'
    },{
      key:4,
      val:'Saalim'
    },{
      key:5,
      val:'Kafeel'
    },{
      key:6,
      val:'Yasir'
    }
  ]
}
