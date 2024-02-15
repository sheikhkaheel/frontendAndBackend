import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PostParentDTO } from '../../Models/DTOs/ParentDTO/PostParentDTO';


@Component({
  selector: 'parent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-parent-dto.component.html',
  styleUrl: './post-parent-dto.component.css'
})
export class PostParentDTOComponent {
  public postParentDTO: PostParentDTO = {
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNo: '',
    dob: '',
    gender: '',
    familyHead: '',
    email: '',
    userId: ''
  }

  bind() {
    let pEmail = document.getElementById('p-email') as HTMLInputElement;
    let txtfname = document.getElementById('tfname') as HTMLInputElement;
    let txtmname = document.getElementById('tmname') as HTMLInputElement;
    let txtlname = document.getElementById('tlname') as HTMLInputElement;
    let txtphone = document.getElementById('tphone') as HTMLInputElement;
    let datedob = document.getElementById('datedob') as HTMLInputElement;
    let userId = document.getElementById('numuserId') as HTMLInputElement;
    let Malegender = document.getElementById('male') as HTMLInputElement;
    let Femalegender = document.getElementById('female') as HTMLInputElement;
    let Head = document.getElementById('head') as HTMLInputElement;
    let notHead = document.getElementById('notHead') as HTMLInputElement;

    // Reset error messages
    let er1 = document.getElementById('er1') as HTMLElement;
    let er2 = document.getElementById('er2') as HTMLElement;
    let er3 = document.getElementById('er3') as HTMLElement;
    let er4 = document.getElementById('er4') as HTMLElement;
    let er5 = document.getElementById('er5') as HTMLElement;
    let er6 = document.getElementById('er6') as HTMLElement;
    let er7 = document.getElementById('er7') as HTMLElement;
    let er8 = document.getElementById('er8') as HTMLElement;
    let er9 = document.getElementById('er9') as HTMLElement;

    // Validate and set values
    if (datedob.value == "") {
      er6.innerHTML = "Add Date";
    }
    if (pEmail.value.trim() === '') {
      er1.innerHTML = 'Email is required';
      return;
    }
    if (!(Head.checked) || !(notHead.checked)) {
      er8.innerHTML = "Select one Field";
    }
    if (!(Malegender.checked) || !(Femalegender.checked)){
      er9.innerHTML = "Select one Field";
    }
    // Add similar checks for other fields

    this.postParentDTO.email = pEmail.value;
    this.postParentDTO.firstName = txtfname.value;
    this.postParentDTO.middleName = txtmname.value;
    this.postParentDTO.lastName = txtlname.value;
    this.postParentDTO.phoneNo = txtphone.value;
    this.postParentDTO.dob = datedob.value;
    this.postParentDTO.userId = userId.value;

    // Check the selected gender and assign the corresponding value
    if (Malegender.checked) {
      this.postParentDTO.gender = Malegender.value;
    } else if (Femalegender.checked) {
      this.postParentDTO.gender = Femalegender.value;
    }

    // Check the selected familyHead and assign the corresponding value
    if (Head.checked) {
      this.postParentDTO.familyHead = Head.value;
    } else if (notHead.checked) {
      this.postParentDTO.familyHead = notHead.value;
    }

    this.save(this.postParentDTO);
  }



  save(postParentDTO: PostParentDTO) {
    let body = JSON.stringify(postParentDTO);
    alert("success");
    console.log(body);
    let xhr = new XMLHttpRequest();

    let methodName = 'POST';
    let actionURL = 'https://localhost:7102/api/Parent';

    xhr.open('POST', actionURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {

      if (xhr.DONE == 4 && xhr.status == 200) {
        console.log(xhr.responseText);
      }
      else {
        window.console.log("There is error");
      }
    };

    xhr.send(JSON.stringify(this.postParentDTO));
  }

  SaveIT(myForm: NgForm) {
    alert("Working..")
    console.log(myForm)
  }
}
