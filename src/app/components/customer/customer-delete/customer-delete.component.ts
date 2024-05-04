import { Component } from '@angular/core';
import { Customer } from '../../../models/customer';
import { CustomerService } from '../../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrl: './customer-delete.component.css'
})
export class CustomerDeleteComponent {

  customer: Customer = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    creationDate: ''
  }

  constructor(
    private service:  CustomerService,
    private toast:    ToastrService,
    private router:   Router,
    private route:   ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.customer.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void {
    this.service.findById(this.customer.id).subscribe(response => {
      response.profiles = []
      this.customer = response;
    })
  }

  delete(): void {
    this.service.delete(this.customer.id).subscribe(() => {
      this.toast.success('Cliente atualizado com sucesso', 'Atualizado');
      this.router.navigate(['customer']);
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
