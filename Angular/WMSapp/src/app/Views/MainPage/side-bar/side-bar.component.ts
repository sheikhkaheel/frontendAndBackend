import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PutUserDTOComponent } from '../../../DTOComponents/put-user-dto/put-user-dto.component';

@Component({
  selector: 'SideBar',
  standalone: true,
  imports: [RouterLink,PutUserDTOComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  
}
