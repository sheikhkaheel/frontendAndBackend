import { Component } from '@angular/core';
import { User } from '../../../../Models/WmsModels/User';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'user',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {

  public user: User = {
    userId: '',
    roleId: '',
    userCode: `Par${Math.floor(Math.random() * 900 )+ 100}`,
    firstName: '',
    middleName: '',
    lastName: '',
    userName: '',
    password: '',
    createdBy: '',
    createdOn: '',
    modifiedBy: '',
    modifiedOn: '',
    isDeleted: '',
    email: '',
    phoneNo: '',
    dob: ''
  }

  bind() {
    alert(Math.floor(Math.random() * 900 )+ 100);
    let txtfname = document.getElementById('txtfname') as HTMLInputElement;
    let txtmname = document.getElementById('txtmname') as HTMLInputElement;
    let txtlname = document.getElementById('txtlname') as HTMLInputElement;
    let txtuserName = document.getElementById('txtuserName') as HTMLInputElement;
    let txtpassword = document.getElementById('txtpassword') as HTMLInputElement;
    let roleId = document.getElementById('roleId') as HTMLInputElement;

    this.user.firstName = txtfname.value;
    this.user.middleName = txtmname.value;
    this.user.lastName = txtlname.value;
    this.user.userName = txtuserName.value;
    this.user.password = txtpassword.value;
    this.user.roleId = roleId.value;

    this.validate();
    this.save(this.user);
  }

  validate() {
    let txtfname = document.getElementById('txtfname') as HTMLInputElement;
    let txtmname = document.getElementById('txtmname') as HTMLInputElement;
    let txtlname = document.getElementById('txtlname') as HTMLInputElement;
    let txtuserName = document.getElementById('txtuserName') as HTMLInputElement;
    let txtpassword = document.getElementById('txtpassword') as HTMLInputElement;
    let roleId = document.getElementById('roleId') as HTMLInputElement;

    let error1 = document.getElementById('error1') as HTMLInputElement;
    let error2 = document.getElementById('error2') as HTMLInputElement;
    let error3 = document.getElementById('error3') as HTMLInputElement;
    let error4 = document.getElementById('error4') as HTMLInputElement;
    let error5 = document.getElementById('error5') as HTMLInputElement;
    let roleError = document.getElementById('roleError') as HTMLInputElement;

    if (txtpassword.value.length > 7) {
      error5.innerHTML = "";
    } else {
      error5.innerHTML = "*Max lenth 8"
    }

    if (txtuserName.value.length > 4) {
      error4.innerHTML = "";
    } else {
      error4.innerHTML = "*Max lenth 5"
    }

    if (txtpassword.value == "") {
      error5.innerHTML = "*Please enter your password";
    }

    if (roleId.value == "") {
      roleError.innerHTML = "*Enter Role Id";
    }

    if (txtuserName.value == "") {
      error4.innerHTML = "*Enter UserName";
    }

    if (txtlname.value == "") {
      error3.innerHTML = "*Enter LastName";
    } else {
      error3.innerHTML = "";
    }

    if (txtmname.value == "") {
      error2.innerHTML = "*Enter MiddleName";
    } else {
      error2.innerHTML = "";
    }

    if (txtfname.value == "") {
      error1.innerHTML = "*Enter FisrtName";
    } else {
      error1.innerHTML = "";
    }

    if (error4.innerHTML == "" && error5.innerHTML == "") {
      alert("Sucessfully Saved");
    }

  }

  save(user: User) {
    
    let xhr = new XMLHttpRequest();

    let methodName = 'POST';
    let actionURL = 'https://localhost:7102/api/User';
    
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

    xhr.send(JSON.stringify(this.user));
  }
}

