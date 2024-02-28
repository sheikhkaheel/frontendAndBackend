import { Component, OnInit } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { UserService } from '../../../../Services/user.service';
import { User } from '../../../../Models/WmsModels/User';

@Component({
  selector: 'getUsers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {

  user: User = {
    userId: '',
    roleId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    password: '',
    userCode: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: '',
    email: '',
    phoneNo: '',
    dob: ''
  }

  constructor(private userService: UserService){
    this.userService.get(this.user);
    this.users = this.userService.lists;
  }

  users: User[] = [];
  
}
