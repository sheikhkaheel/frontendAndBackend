import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParentComponent } from './Parent/parent.component';
import { GeneralDropDownComponent } from './general-drop-down/general-drop-down.component';
import { DistrictDropDownComponent } from './district-drop-down/district-drop-down.component';
import { StudentsDropdownComponent } from './students-dropdown/students-dropdown.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ParentComponent,GeneralDropDownComponent,DistrictDropDownComponent,StudentsDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
