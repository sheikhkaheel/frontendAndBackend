import { Injectable } from '@angular/core';
import { Child } from '../Models/WmsModels/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildService {
  
  constructor() { }
  
  list: Child[] = [];

  get(child:Child){
    const Url = 'https://localhost:7102/api/Child';

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


  save(child : Child){
    let body = JSON.stringify(child);
    console.log(body);
    let xhr = new XMLHttpRequest();

    let methodName = 'POST';
    let actionURL = 'https://localhost:7102/api/Child';

    xhr.open(methodName, actionURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {

      if (xhr.DONE == 4 && xhr.status == 200) {
        console.log('succcess')
      }
      else {
        window.console.log("There is error");
      }
    };

    xhr.send(JSON.stringify(child));
  }
  
}
