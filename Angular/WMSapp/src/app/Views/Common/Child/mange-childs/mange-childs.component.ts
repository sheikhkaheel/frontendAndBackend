import { Component } from '@angular/core';
import { ChildService } from '../../../../Services/child.service';
import { CommonModule } from '@angular/common';
import { Child } from '../../../../Models/WmsModels/Child';

@Component({
  selector: 'app-mange-childs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mange-childs.component.html',
  styleUrl: './mange-childs.component.css'
})
export class MangeChildsComponent {
  child: Child = {
    childId: '',
    firstName: '',
    middleName: '',
    lastName: '',
    qualification: '',
    dob: '',
    gender: '',
    email: '',
    parentId: '',
    spouseFirstName: '',
    spouseLastName: '',
    prefix: '',
    address: '',
    latituteAndLongitute: '',
    phoneNo: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: ''
  }

constructor(private childService: ChildService){
  childService.get(this.child);
  this.childs = childService.list;
}

childs:Child[] = [];

}
