import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'States',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './states-ndistricts.component.html',
  styleUrls: ['./states-ndistricts.component.css']
})
export class StatesNDistrictsComponent {
  selectedState: string = ''; // Property to hold the selected state

  constructor() { }

  SelectState(event: any) {
    this.selectedState = event.target.value; // Update selectedState property
  }
}
