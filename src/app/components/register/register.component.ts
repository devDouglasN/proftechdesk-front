import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register.model';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  register: Register = {
    name: '',
    cpf: '',
    email: '',
    password: ''
  }

  name = new FormControl(null, Validators.minLength(3))
  cpf = new FormControl(null, Validators.minLength(3))
  email = new FormControl(null, Validators.minLength(3))
  password = new FormControl(null, Validators.minLength(3))


  constructor(private toast: ToastrService, private service: AuthService, private router: Router) { }

  registers(): void {
    this.service.register(this.register).subscribe(() => {
      this.toast.success('Cadastrado com sucesso!', 'Registro')
      this.router.navigate(['login'])
    }, ex => {
      console.log(ex);
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validateFields(): boolean{
    return this.name.valid && this.cpf.valid && this.email.valid && this.password.valid;
  }
}
