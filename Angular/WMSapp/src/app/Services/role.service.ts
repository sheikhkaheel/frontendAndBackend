import { Injectable } from '@angular/core';
import { Role } from '../Models/WmsModels/Role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  list: Role[] = [];
  
  get(role: Role): Promise<any> {
    return new Promise((resolve, reject) => {
      const Url = 'https://localhost:7102/api/Role';
      const xhr = new XMLHttpRequest();
      
      xhr.open('GET', Url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          const responseData = JSON.parse(xhr.responseText);
          console.log(responseData);
          resolve(responseData);
        } else {
          reject(new Error('Server Error'));
        }
      };
  
      xhr.onerror = () => {
        reject(new Error('Network Error'));
      };
  
      xhr.send();
    });
  }
  

  save(role: Role) {
    console.log(role);
    let body = JSON.stringify(role);
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

    xhr.send(JSON.stringify(role));
  }
}
