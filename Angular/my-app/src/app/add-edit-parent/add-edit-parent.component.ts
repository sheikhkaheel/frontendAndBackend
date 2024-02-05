import { Component, EventEmitter, Input, Output } from '@angular/core';
import { parentModel } from '../parentModel';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'addParent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-edit-parent.component.html',
  styleUrl: './add-edit-parent.component.css'
})
export class AddEditParentComponent {

addParent: parentModel = { email: '',firstName: '',lastName: '' };

@Output()   
  angularEvt: EventEmitter<parentModel> = new EventEmitter<parentModel>();
  
@Input()
  SendData(){
    this.angularEvt.emit(this.addParent);
    this.addParent = { email: '', firstName: '', lastName: ''};
  }
}
