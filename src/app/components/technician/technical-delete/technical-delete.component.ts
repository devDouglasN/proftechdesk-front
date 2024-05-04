import { Component } from '@angular/core';
import { Technical } from '../../../models/technical';
import { TechnicalService } from '../../../services/technical.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technical-delete',
  templateUrl: './technical-delete.component.html',
  styleUrl: './technical-delete.component.css'
})
export class TechnicalDeleteComponent {

  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    creationDate: ''
  }

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

  delete(): void {
    this.service.delete(this.technical.id).subscribe(() => {
      this.toast.success('Cliente atualizado com sucesso', 'Atualizado');
      this.router.navigate(['technical']);
    }, ex => {
      console.log(ex)
      if(ex.error.status === 500){
        this.toast.error('Número do Cadastro de Pessoa Física (CPF) brasileiro inválido')
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

}
