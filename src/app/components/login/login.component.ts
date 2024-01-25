import { Component } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  validateFields(): boolean {
    if (this.email.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }

}
