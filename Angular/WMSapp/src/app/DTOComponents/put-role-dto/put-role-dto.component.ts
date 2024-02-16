import { Component } from '@angular/core';
import { PutRoleDTO } from '../../Models/DTOs/RoleDTO/PutRoleDTO';
import { CommonModule } from '@angular/common';
import { throwError } from 'rxjs';



@Component({
  selector: 'getRoles',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './put-role-dto.component.html',
  styleUrl: './put-role-dto.component.css'
})
export class PutRoleDTOComponent {
  putRoleDTO: PutRoleDTO = {
    roleId: '',
    roleName: '',
    displayName: '',
    isSuperAdmin: false,
    isAdmin: false,
    isParent: false,
    isWaza: false,
    isActive: true,
    roleDescription: ''
  };

  roles: PutRoleDTO[] = [];

  save(putRoleDTO: PutRoleDTO) {

    const Url = 'https://localhost:7102/api/Role';

    const xhr = new XMLHttpRequest();

    xhr.open('Get', Url, true)

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 200) {
        this.roles = JSON.parse(xhr.responseText);
      }
      else {
        throw Error('Server Error');
      }
    }
    xhr.send();
  }
}
