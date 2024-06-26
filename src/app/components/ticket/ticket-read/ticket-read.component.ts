import { Component } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { TicketService } from '../../../services/ticket.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-read',
  templateUrl: './ticket-read.component.html',
  styleUrl: './ticket-read.component.css'
})
export class TicketReadComponent {

  ticket: Ticket = {
    priority: '',
    status: '',
    title: '',
    observations: '',
    technical: '',
    customer: '',
    technicianName: '',
    customerName: '',
  }

  constructor(
    private ticketService: TicketService,
    private toast: ToastrService,
    private route: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.ticket.id = this.route.snapshot.paramMap.get('id');
    this.read();
  }

  read(): void {
    this.ticketService.findById(this.ticket.id).subscribe(response =>{
      this.ticket = response;
    }, ex => {
      console.log(ex)
      this.toast.error(ex.error.error);
    })
  }

  statusReturn(status: any): string {
    if (status == '0') {
      return 'ABERTO';
    } else if (status == '1') {
      return 'EM ANDAMENTO';
    } else {
      return 'ENCERRADO';
    }
  }

  statusPriority(priority: any): string {
    if (priority == '0') {
      return 'BAIXA';
    } else if (priority == '1') {
      return 'MEDIA';
    } else {
      return 'ALTA';
    }
  } 

}
