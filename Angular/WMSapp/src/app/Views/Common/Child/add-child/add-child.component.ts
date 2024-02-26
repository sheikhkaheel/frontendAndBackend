import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ChildService } from '../../../../Services/child.service';
import { Child } from '../../../../Models/WmsModels/Child';

@Component({
  selector: 'child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-child.component.html',
  styleUrl: './add-child.component.css'
})
export class AddChildComponent {
  child:Child = {
    firstName: '',
    middleName: '',
    lastName: '',
    qualification: '',
    dob: '',
    gender: '',
    email: '',
    childId: '',
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

  constructor(private roleService: ChildService){
    
  }

  Create(item : NgForm){
    console.log(this.child.email);
    this.roleService.save(this.child);
  }


}
