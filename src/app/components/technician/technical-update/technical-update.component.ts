import { Component, OnInit } from '@angular/core';
import { Technical } from '../../../models/technical';
import { FormControl, Validators } from '@angular/forms';
import { TechnicalService } from '../../../services/technical.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-technical-update',
  templateUrl: './technical-update.component.html',
  styleUrl: './technical-update.component.css'
})
export class TechnicalUpdateComponent implements OnInit {

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
    private service:  TechnicalService,
    private toast:    ToastrService,
    private router:   Router,
    private route:   ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.technical.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.technical.id).subscribe(response => {
      response.profiles = []
      this.technical = response;
    })
  }

  update(): void {
    this.service.update(this.technical).subscribe(() => {
      this.toast.success('Cliente atualizado com sucesso', 'Atualizado');
      this.router.navigate(['technicals']);
    }, ex => {
      console.log(ex)
      if(ex.error.status === 500){
        this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido')
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
