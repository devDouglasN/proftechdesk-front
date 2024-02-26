import { Component } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) { }

  creds: Credentials = {
    email: '',
    password: ''
  }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.service.authenticate(this.creds).subscribe({
      next: (response) => {
        this.service.sucessfulLogin(response.headers.get('Authorization').substring(7));
        this.router.navigate(['']);
      },
      error: () => {
        this.toast.error('User or password invalid!');
      }
    });
  }

  validateFields(): boolean {
    return this.email.valid && this.password.valid
  }

}
