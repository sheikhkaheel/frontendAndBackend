import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'Dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './general-drop-down.component.html',
  styleUrl: './general-drop-down.component.css'
})
export class GeneralDropDownComponent {
@Input()  StateList = [
  {
    key:1,
    val:'JammuANDKashmir'
  },{
    key:2,
    val:'Dehli'
  },{
    key:3,
    val:'Mumbai'
  },{
    key:4,
    val:'Bangalore'
  },{
    key:5,
    val:'Hyderabad'
  }
]

  
}
