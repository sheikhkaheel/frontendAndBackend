import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Waza } from '../../../../Models/WmsModels/Waza';
import { WazaService } from '../../../../Services/waza.service';

@Component({
  selector: 'getWazas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-wazas.component.html',
  styleUrl: './manage-wazas.component.css'
})
export class ManageWazasComponent {
  waza: Waza = {
    wazaId: '',
    userId: '',
    firstName: '',
    middleName: '',
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

  constructor(private wazaService:WazaService) {
    wazaService.get(this.waza);
    this.wazas = wazaService.list;
  }
  
  wazas:Waza[] = [];
}
