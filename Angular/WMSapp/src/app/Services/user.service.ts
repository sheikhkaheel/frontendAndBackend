import { Injectable } from '@angular/core';
import { User } from '../Models/WmsModels/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  lists: User[] = [];

  get(user: User) {


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
