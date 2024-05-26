import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { TechnicalService } from '../../../services/technical.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Technical } from '../../../models/technical';

@Component({
  selector: 'app-technical-create',
  templateUrl: './technical-create.component.html',
  styleUrl: './technical-create.component.css'
})
export class TechnicalCreateComponent implements OnInit {

  ngOnInit(): void {
   
  }

  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    creationDate: ''
  }

  name: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  password: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: TechnicalService,
    private toast: ToastrService,
    private router: Router
  ) {}

  create(): void {
    this.service.create(this.technical).subscribe(() => {
      this.toast.success('Técnico cadastrado com sucesso!', 'Cadastro')
      this.router.navigate(['technicals'])
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

  addProfile(profile: any): void {
    if(this.technical.profiles.includes(profile)){
      this.technical.profiles.splice(this.technical.profiles.indexOf(profile), 1)
    } else {
      this.technical.profiles.push(profile);
    }
  }

  fieldValidate(): boolean {
    return this.name.valid && this.cpf.valid
     && this.email.valid && this.password.valid;
  }

}
