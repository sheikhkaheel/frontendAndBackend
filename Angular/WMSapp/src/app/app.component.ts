import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SideBarComponent } from './Views/MainPage/side-bar/side-bar.component';
import { ContentComponent } from './Views/MainPage/content/content.component';
import { FotterComponent } from './Views/MainPage/fotter/fotter.component';
import { NavbarComponent } from './Views/MainPage/navbar/navbar.component';
import { ManageUsersComponent } from './Views/Common/User/manage-users/manage-users.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ManageUsersComponent,RouterModule,SideBarComponent,ContentComponent,FotterComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WMSapp';
}
