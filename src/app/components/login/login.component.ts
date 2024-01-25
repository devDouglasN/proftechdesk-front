import { Component } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private toast: ToastrService) { }

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.toast.error('user or password invalid!', 'Login');
    this.creds.password = '';
  }

  validateFields(): boolean {
    if (this.email.valid && this.password.valid) {
      return true;
    } else {
      return false;
    }
  }

}
