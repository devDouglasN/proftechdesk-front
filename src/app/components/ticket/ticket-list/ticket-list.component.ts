import { Component, ViewChild } from '@angular/core';
import { Ticket } from '../../../models/ticket';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.css'
})
export class TicketListComponent {
  service: any;

applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  
  ELEMENT_DATA: Ticket[] = []
  FILTERED_DATA: Ticket[] = []

  displayedColumns: string[] = ['id', 'title', 'customerName', 'technicianName', 'openingDate', 'priority', 'status', 'action'];
  dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  findAll(): void {
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response
      this.dataSource = new MatTableDataSource<Ticket>(response);
      this.dataSource.paginator = this.paginator;
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

  orderByStatus(status: any): void {
    let list: Ticket[] = []
    this.ELEMENT_DATA.forEach(element => {
      if (element.status == status)
        list.push(element)
    });
    if (status !== '') {
      this.FILTERED_DATA = list;
      this.dataSource = new MatTableDataSource<Ticket>(list);
      this.dataSource.paginator = this.paginator;
    } else {
      this.dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    }
  }


}