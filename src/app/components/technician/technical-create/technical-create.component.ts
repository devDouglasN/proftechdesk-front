import { Component } from '@angular/core';

@Component({
  selector: 'app-technical-create',
  templateUrl: './technical-create.component.html',
  styleUrl: './technical-create.component.css'
})
export class TechnicalCreateComponent {
  technical: any;

  addProfile(profile: any): void {

    if(this.technical.profiles.includes(profile)){
      this.technical.profiles.splice(this.technical.profiles.indexOf(profile), 1)
    } else {
      this.technical.profiles.push(profile);
    }

  }

}
