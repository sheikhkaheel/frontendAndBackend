import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ParentService } from '../../../../Services/parent.service';
import { Parent } from '../../../../Models/WmsModels/Parent';


@Component({
  selector: 'getParents',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-parents.component.html',
  styleUrl: './manage-parents.component.css'
})
export class ManageParentsComponent {
  parent: Parent = {
    parentId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNo: '',
    dob: '',
    gender: '',
    familyHead: '',
    email: '',
    userId: '',
    wifeFirstName: '',
    wifeLastName: '',
    prefix: '',
    dateTime: '',
    address: '',
    latituteAndLongitute: '',
    houseImg: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: ''
  }
  
  constructor(private parentService: ParentService){
    parentService.get(this.parent);
    this.parents = parentService.list;
  }

  parents:Parent[] = [];
}
