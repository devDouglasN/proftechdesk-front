import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Customer } from '../../../models/customer';
import { Technical } from '../../../models/technical';
import { TicketService } from '../../../services/ticket.service';
import { CustomerService } from '../../../services/customer.service';
import { TechnicalService } from '../../../services/technical.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css'
})
export class TicketCreateComponent {

ticket: Ticket = {   
    priority:         '',      
    status:           '',         
    title:            '',          
    observations:     '',   
    technical:        '',      
    customer:         '',       
    technicianName:   '', 
    customerName:     '', 
  }

  customer: Customer[] = []
  technical: Technical[] = []

  title: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  priority: FormControl = new FormControl(null, [Validators.required])
  technicianName: FormControl = new FormControl(null, [Validators.required])
  customerName: FormControl = new FormControl(null, [Validators.required])
  observations: FormControl = new FormControl(null, [Validators.required])

  constructor(
    private ticketService:      TicketService,
    private customerService:    CustomerService,
    private technicalService:   TechnicalService,
    private toast:              ToastrService,
    private router:             Router,
  ) {

  }

  ngOnInit(): void {
    this.findAllCustomer();
    this.findAllTechnical();
  }

  create(): void {
    this.ticketService.create(this.ticket).subscribe(response => {
      this.toast.success('Chamado criado com sucesso', 'Cadastro');
      this.router.navigate(['ticket'])
    }, ex => {
      console.log(ex)
      this.toast.error(ex.error.error);
    })
  }

  findAllCustomer(): void {
    this.customerService.findAll().subscribe(response => {
      this.customer = response
    })
  }

  findAllTechnical(): void {
    this.technicalService.findAll().subscribe(response => {
      this.technical = response;
    })
  }

  fieldValidate(): boolean {
    return this.title.valid &&
      this.status.valid &&
      this.priority.valid &&
      this.technicianName &&
      this.customerName.valid &&
      this.observations.valid
  }

}
