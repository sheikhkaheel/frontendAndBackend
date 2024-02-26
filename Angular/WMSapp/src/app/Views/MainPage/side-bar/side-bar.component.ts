import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoleComponent } from "../../Common/MenuItems/menu-role/menu-role.component";

@Component({
    selector: 'SideBar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css',
    imports: [RouterLink, MenuRoleComponent]
})
export class SideBarComponent {
  
}
