import { Injectable } from '@angular/core';
import { Waza } from '../Models/WmsModels/Waza';

@Injectable({
  providedIn: 'root'
})
export class WazaService {

  constructor() { }

  list: Waza[] = [];

  get(waza: Waza) {
    const Url = 'https://localhost:7102/api/Waza';

    const xhr = new XMLHttpRequest;

    xhr.open('Get', Url, true);

    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.onload = () => {
      if (xhr.status >= 200) {
        this.list = JSON.parse(xhr.responseText);
      } else {
        throw Error('Server Error');
      }
    }

    xhr.send();
  }
}
