import { Component } from '@angular/core';
import { PostRoleDTO } from '../../Models/DTOs/RoleDTO/PostRoleDTO';

@Component({
  selector: 'role',
  standalone: true,
  imports: [],
  templateUrl: './post-role-dto.component.html',
  styleUrl: './post-role-dto.component.css'
})
export class PostRoleDTOComponent {

  public postRoleDTO: PostRoleDTO = {
    roleName: "",
    displayName: "",
    roleDescription:"",
    isSuperAdmin: false,
    isAdmin: false,
    isParent: false,
    isWaza: false,
    isActive: false
  }

  bind() {

    let txtRoleName = document.getElementById('txtroleName') as HTMLInputElement;
    let txtDisplayName = document.getElementById('txtdisplayName') as HTMLInputElement;
    let roleDescription = document.getElementById('roleDescription') as HTMLInputElement;
    let chkisSuperAdmin = document.getElementById('chkisSuperAdmin') as HTMLInputElement;
    let chkisAdmin = document.getElementById('chkisAdmin') as HTMLInputElement;
    let chkisParent = document.getElementById('chkisParent') as HTMLInputElement;
    let chkisWaza = document.getElementById('chkisWaza') as HTMLInputElement;
    let chkisActive = document.getElementById('chkisActive') as HTMLInputElement;

    this.postRoleDTO.roleName = txtRoleName.value;
    this.postRoleDTO.displayName = txtDisplayName.value;
    this.postRoleDTO.roleDescription = roleDescription.value;
    this.postRoleDTO.isSuperAdmin = chkisSuperAdmin.checked;
    this.postRoleDTO.isAdmin = chkisAdmin.checked;
    this.postRoleDTO.isParent = chkisParent.checked;
    this.postRoleDTO.isWaza = chkisWaza.checked;
    this.postRoleDTO.isActive = chkisActive.checked;

    this.Validate();
    this.save(this.postRoleDTO);

  }

  Validate() {
    let txtRoleName = document.getElementById('txtroleName') as HTMLInputElement;
    let txtDisplayName = document.getElementById('txtdisplayName') as HTMLInputElement;

    let VtxtRoleName = document.getElementById('validateRoleName') as HTMLInputElement;
    let VtxtDisplayName = document.getElementById('validateDisplayName') as HTMLInputElement;

    if (txtDisplayName.value.length > 3) {
      VtxtDisplayName.innerHTML = "";
    } else {
      VtxtDisplayName.innerHTML = "*Min Length 5";
    }

    if (txtRoleName.value.length > 4) {
      VtxtRoleName.innerHTML = "";
    } else {
      VtxtRoleName.innerHTML = "*Min length 5";
    }

    if (txtDisplayName.value == "") {
      VtxtDisplayName.innerHTML = "*Enter Display Name";
    }

    if (txtRoleName.value == "") {
      VtxtRoleName.innerHTML = "*Enter Role Name";
    }

    if (VtxtDisplayName.innerHTML == "" && VtxtRoleName.innerHTML == "") {
      alert('Successfully Saved');
    }

  }

  save(postRoleDTO: PostRoleDTO) {
    let body = JSON.stringify(postRoleDTO);
    // alert("success");
    console.log(body);
    let xhr = new XMLHttpRequest();

    let methodName = 'POST';
    let actionURL = 'https://localhost:7102/api/Role';

    xhr.open(methodName, actionURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {

      if (xhr.DONE == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      }
      else {
        window.console.log("There is error");
      }
    };

    xhr.send(JSON.stringify(this.postRoleDTO));
  }

}
