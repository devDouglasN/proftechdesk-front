import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technical } from '../../../models/technical';


@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrl: './technician-list.component.css'
})
export class TechnicianListComponent {
  ELEMENT_DATA: Technical[] = [
    {
      id: 1,
      name: 'Douglas',
      cpf: '335.437.860-32',
      email: 'douglas@.com',
      password: '1234',
      profiles: ['0'],
      creationDate: '15/08/2023'
    }
  ]

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'action'];
  dataSource = new MatTableDataSource<Technical>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}



