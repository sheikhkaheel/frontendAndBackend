import { Component, Input, Output, ViewChild } from '@angular/core';
import { parentModel } from '../parentModel';
import { AddEditParentComponent } from "../add-edit-parent/add-edit-parent.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'listParent',
    standalone: true,
    templateUrl: './list-patent.component.html',
    styleUrl: './list-patent.component.css',
    imports: [AddEditParentComponent,CommonModule,FormsModule],
})
export class ListPatentComponent {
 isedit: boolean=false;

@ViewChild('child')
child:AddEditParentComponent = new AddEditParentComponent();

parentList:parentModel[] = [];

addParent: parentModel = { email: '',firstName: '',lastName: '' };

user:parentModel=  { email: '',firstName: '',lastName: '' };

addUserToList(user: parentModel)
{
  this.parentList.push(user);
}

editdata(item:parentModel)
{
  this.isedit = true;  
  alert(item.firstName);
  this.addParent =item;
  this.child.SendData()
}

SendData()
{
  this.parentList.push(this.addParent);
}
    
  
}

