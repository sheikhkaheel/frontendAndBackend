import { Component, OnInit } from '@angular/core';
import { PutUserDTO } from '../../Models/DTOs/UserDTO/PutUserDTO';
import { CommonModule, } from '@angular/common';
import { UserService } from '../../Services/user.service';

@Component({
  selector: 'getUsers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './put-user-dto.component.html',
  styleUrl: './put-user-dto.component.css'
})
export class PutUserDTOComponent implements OnInit {

  putUserDTO: PutUserDTO = {
      userId: '',
      roleId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      userName: '',
      password: ''
  }

  constructor(private userService: UserService){ }

  users: PutUserDTO[] = [];

    ngOnInit(): void {
    this.userService.get(this.putUserDTO);
    this.users = this.userService.lists
  }
  
}
