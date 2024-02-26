import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../../../Services/role.service';
import { Role } from '../../../../Models/WmsModels/Role';



@Component({
  selector: 'getRoles',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './manage-roles.component.html',
  styleUrl: './manage-roles.component.css'
})
export class ManageRolesComponent  {
  
  role: Role = {
    roleId: '',
    roleName: '',
    displayName: '',
    roleDescription: '',
    isSuperAdmin: '',
    isAdmin: '',
    isParent: '',
    isChild: '',
    isWaza: '',
    isActive: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: '',
    isGuest: ''
  };

  
  constructor(private roleservice: RoleService) {
    roleservice.get(this.role)
      .then(data => {
        this.roles = data;
        console.log(this.roles);
      })
      .catch(error => {
        console.error(error);
      });
  }
  
  
  roles:Role[] = [];

}
