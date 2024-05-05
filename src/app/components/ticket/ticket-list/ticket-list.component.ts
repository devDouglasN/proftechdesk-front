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
applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  
  ELEMENT_DATA: Ticket[] = []
  FILTERED_DATA: Ticket[] = []

  displayedColumns: string[] = ['id', 'title', 'customerName', 'technicianName', 'openingDate', 'priority', 'status', 'action'];
  dataSource = new MatTableDataSource<Ticket>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

}
