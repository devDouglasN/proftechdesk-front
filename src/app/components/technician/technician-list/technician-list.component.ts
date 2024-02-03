import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technical } from '../../../models/technical';
import { TechnicalService } from '../../../services/technical.service';


@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrl: './technician-list.component.css'
})
export class TechnicianListComponent {
  ELEMENT_DATA: Technical[] = []

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'action'];
  dataSource = new MatTableDataSource<Technical>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: TechnicalService
  ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(response => {
      this.ELEMENT_DATA = response;
      this.dataSource = new MatTableDataSource<Technical>(response);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  }
  
}


