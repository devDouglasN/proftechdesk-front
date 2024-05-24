import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Technical } from '../../../models/technical';
import { TechnicalService } from '../../../services/technical.service';


@Component({
  selector: 'app-technician-list',
  templateUrl: './technician-list.component.html',
  styleUrl: './technician-list.component.css'
})
export class TechnicianListComponent implements OnInit {

  ngOnInit(): void {
    this.findAll();
  }

  ELEMENT_DATA: Technical[] = []

  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'action'];
  dataSource = new MatTableDataSource<Technical>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: TechnicalService
  ) {}

  findAll () {
    this.service.findAll().pipe().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Technical>(resposta);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  }
  
}


