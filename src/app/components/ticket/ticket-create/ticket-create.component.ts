import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css'
})
export class TicketCreateComponent {
ticket: any;
customer: any;
technical: any;
create() {
throw new Error('Method not implemented.');
}

  title: FormControl = new FormControl(null, [Validators.required])
  status: FormControl = new FormControl(null, [Validators.required])
  priority: FormControl = new FormControl(null, [Validators.required])
  technicianName: FormControl = new FormControl(null, [Validators.required])
  customerName: FormControl = new FormControl(null, [Validators.required])
  observations: FormControl = new FormControl(null, [Validators.required])

  constructor(
  ) {

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
