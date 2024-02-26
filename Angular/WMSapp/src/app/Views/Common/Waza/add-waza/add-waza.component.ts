import { Component } from '@angular/core';
import { Waza } from '../../../../Models/WmsModels/Waza';


@Component({
  selector: 'waza',
  standalone: true,
  imports: [],
  templateUrl: './add-waza.component.html',
  styleUrl: './add-waza.component.css'
})
export class AddWazaComponent {
  waza: Waza = {
    userId: '',
    firstName: '',
    middleName: '',
    wazaId: '',
    lastName: '',
    companyName: '',
    address: '',
    latitudeAndLongitude: '',
    age: '',
    phoneNo: '',
    yearsOfExp: '',
    rateOfMeatPer100Kg: '',
    rateOfChickenPer100Kg: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: ''
  }

  bind() {
    let userId = document.getElementById('w-userId') as HTMLInputElement;
    let firstName = document.getElementById('w-fname') as HTMLInputElement;
    let middleName = document.getElementById('w-mname') as HTMLInputElement;
    let lastName = document.getElementById('w-lname') as HTMLInputElement;
    let companyName = document.getElementById('w-companyName') as HTMLInputElement;
    let phoneNo = document.getElementById('w-phoneNo') as HTMLInputElement;
    let YearsOfExp = document.getElementById('w-yearsOfExp') as HTMLInputElement;

    this.waza.userId = userId.value;
    this.waza.firstName = firstName.value;
    this.waza.middleName = middleName.value;
    this.waza.lastName = lastName.value;
    this.waza.companyName = companyName.value;
    this.waza.phoneNo = phoneNo.value;
    this.waza.yearsOfExp = YearsOfExp.value;

    this.Save(this.waza);
  }

  Save(waza: Waza) {
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

    xhr.send(JSON.stringify(this.waza));
  }
}
