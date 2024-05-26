import { Component, OnInit } from '@angular/core';
import { Technical } from '../../../models/technical';
import { TechnicalService } from '../../../services/technical.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-technical-delete',
  templateUrl: './technical-delete.component.html',
  styleUrl: './technical-delete.component.css'
})
export class TechnicalDeleteComponent implements OnInit {

  technical: Technical = {
    id: '',
    name: '',
    cpf: '',
    email: '',
    password: '',
    profiles: [],
    creationDate: ''
  };

  constructor(
    private service:  TechnicalService,
    private toast:    ToastrService,
    private router:   Router,
    private route:    ActivatedRoute,
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
    this.service.delete(this.technical.id).subscribe((response: any) => {
      this.toast.success(response.message, 'Delete');
      this.router.navigate(['technicals']);
    }, ex => {
      console.log(ex);
      if (ex.error.message) {
        this.toast.error(ex.error.message);
      } else if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error('Erro desconhecido ao tentar deletar o técnico.');
      }
    });
  }
}
