import { Component } from '@angular/core';
import {PostWazaDTO} from '../../Models/DTOs/WazaDTO/PostWazaDTO';


@Component({
  selector: 'waza',
  standalone: true,
  imports: [],
  templateUrl: './post-waza-dto.component.html',
  styleUrl: './post-waza-dto.component.css'
})
export class PostWazaDTOComponent {
  postWazaDTO: PostWazaDTO = {
      userId: '',
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
      phoneNo: '',
      yearOfExp: '',
  }

  bind() {
    let userId = document.getElementById('w-userId') as HTMLInputElement;
    let firstName = document.getElementById('w-fname') as HTMLInputElement;
    let middleName = document.getElementById('w-mname') as HTMLInputElement;
    let lastName = document.getElementById('w-lname') as HTMLInputElement;
    let companyName = document.getElementById('w-companyName') as HTMLInputElement;
    let phoneNo = document.getElementById('w-phoneNo') as HTMLInputElement;
    let YearsOfExp = document.getElementById('w-yearsOfExp') as HTMLInputElement;

    this.postWazaDTO.userId = userId.value;
    this.postWazaDTO.firstName = firstName.value;
    this.postWazaDTO.middleName = middleName.value;
    this.postWazaDTO.lastName = lastName.value;
    this.postWazaDTO.companyName = companyName.value;
    this.postWazaDTO.phoneNo = phoneNo.value;
    this.postWazaDTO.yearOfExp = YearsOfExp.value;

    this.Save(this.postWazaDTO);
  }

  Save(postWazaDTO: PostWazaDTO) {
    const Url = 'https://localhost:7102/api/Waza';

    const xhr = new XMLHttpRequest;

    xhr.open('Post', Url, true);

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status == 200 || xhr.readyState == 4) {
        console.log(xhr.responseText);
      } else {
        console.log('Error Cought');
      }
    }

    xhr.send(JSON.stringify(this.postWazaDTO));
  }
}
