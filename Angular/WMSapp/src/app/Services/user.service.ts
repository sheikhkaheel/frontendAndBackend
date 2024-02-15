import { Injectable } from '@angular/core';
import { PutUserDTO } from '../Models/DTOs/UserDTO/PutUserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  lists: PutUserDTO[] = [];

  get(putUserDTO: PutUserDTO) {


    const url = 'https://localhost:7102/api/User';

    const xhr = new XMLHttpRequest();

    xhr.open("Get", url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');


    xhr.onload = () => {

      if (xhr.status >= 200) {
        this.lists = JSON.parse(xhr.responseText);
      }
      else {
        throw Error("Server Error");
      }
    }
    xhr.send();
  }
}
