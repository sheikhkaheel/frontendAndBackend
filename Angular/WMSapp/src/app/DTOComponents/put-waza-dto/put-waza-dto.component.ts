import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PostWazaDTO } from '../../Models/DTOs/WazaDTO/PostWazaDTO';

@Component({
  selector: 'getWazas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './put-waza-dto.component.html',
  styleUrl: './put-waza-dto.component.css'
})
export class PutWazaDTOComponent {
  postWazaDTO: PostWazaDTO = {
      firstName: '',
      middleName: '',
      lastName: '',
      companyName: '',
      phoneNo: '',
      yearOfExp: '',
      userId: ''
  }

  wazas: PostWazaDTO[] = [];

  get() {
    const Url = 'https://localhost:7102/api/Waza';

    const xhr = new XMLHttpRequest;

    xhr.open('Get', Url, true);

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 200) {
        this.wazas = JSON.parse(xhr.responseText);
      } else {
        throw Error('Server Error');
      }
    }

    xhr.send();
  }
}
