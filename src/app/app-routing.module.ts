import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { AuthGuard } from './auth/auth.guard';
import { TechnicalCreateComponent } from './components/technician/technical-create/technical-create.component';
import { TechnicalDeleteComponent } from './components/technician/technical-delete/technical-delete.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},

      {path: 'technical/list', component: TechnicianListComponent},
      {path: 'technical/create', component: TechnicalCreateComponent},
      {path: 'technical/update:id', component: TechnicalCreateComponent},
      {path: 'technical/delete:id', component: TechnicalDeleteComponent},

      {path: 'customer/list', component: CustomerListComponent},
      {path: 'customer/create', component: CustomerCreateComponent},
      {path: 'customer/update:id', component: CustomerUpdateComponent},
      {path: 'customer/delete:id', component: CustomerDeleteComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
