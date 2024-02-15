import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PutParentDTO } from '../../Models/DTOs/ParentDTO/PutParentDTO';

@Component({
  selector: 'getParents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './put-parent-dto.component.html',
  styleUrl: './put-parent-dto.component.css'
})
export class PutParentDTOComponent {
  putParentDTO: PutParentDTO = {
      parentId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      phoneNo: '',
      dob: '',
      gender: '',
      familyHead: '',
      email: '',
      userId: ''
  }
  parents: PutParentDTO[] = [];

  save(putParentDTO: PutParentDTO) {


    const Url = 'https://localhost:7102/api/Parent';

    const xhr = new XMLHttpRequest;

    xhr.open('Get', Url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 200) {
        this.parents = JSON.parse(xhr.responseText);
      } else {
        throw Error("Server Error")
      }
    }
    xhr.send();
  }
}
