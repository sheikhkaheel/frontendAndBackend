import { Component, Input, Output } from '@angular/core';
import { parentModel } from '../parentModel';
import { AddEditParentComponent } from "../add-edit-parent/add-edit-parent.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'listParent',
    standalone: true,
    templateUrl: './list-patent.component.html',
    styleUrl: './list-patent.component.css',
    imports: [AddEditParentComponent,CommonModule]
})
export class ListPatentComponent {
 
parentList:parentModel[] = [];

addUserToList(user: parentModel){
  this.parentList.push(user);
}
}
