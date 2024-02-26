import { Component} from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms';
import { RoleService } from '../../../../Services/role.service';
import { Role } from '../../../../Models/WmsModels/Role';

@Component({
  selector: 'role',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-role.component.html',
  styleUrl: './add-role.component.css'
})
export class AddRoleComponent {

  public role: Role = {
    roleName: "",
    displayName: "",
    roleDescription: "",
    roleId: '',
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
  }

  constructor(private roleService: RoleService){
    
  }

  Create(){
    this.roleService.save(this.role);
  }



}
