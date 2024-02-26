import { Injectable } from '@angular/core';
import { Parent } from '../Models/WmsModels/Parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor() { }

  list: Parent[] = [];

  get(parent: Parent) {


    const Url = 'https://localhost:7102/api/Parent';

    const xhr = new XMLHttpRequest;

    xhr.open('Get', Url, true);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (xhr.status >= 200) {
        this.list = JSON.parse(xhr.responseText);
      } else {
        throw Error("Server Error")
      }
    }
    xhr.send();
  }
}
