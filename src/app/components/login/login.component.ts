import { Component } from '@angular/core';
import { Credentials } from '../../models/credentials';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  creds: Credentials = {
    email: '',
    password: ''
  }

  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router
  ) { }

  email = new FormControl(null, Validators.email);
  password = new FormControl(null, Validators.minLength(3));

  login() {
    this.service.authenticate(this.creds).pipe().subscribe(res => {
      let token = JSON.parse(JSON.stringify(res)).token
      this.service.successfulLogin(token, this.creds.email)
      this.router.navigate(['']);
      this.toast.success("Login realizado com sucesso!", "Login", { timeOut: 7000})
    }, ((err) => {
      console.log(err.status);
      if (err.status === 403) {
        this.toast.error('Acesso expirado ou login incorreto');
        //this.service.logout();
        this.router.navigate(['login']);
      }else{
        this.toast.error("Usuário e/ou senha inválidos")
      }
     })
    );
  }
  validateFields(): boolean {
    return this.email.valid && this.password.valid;
  }

}
