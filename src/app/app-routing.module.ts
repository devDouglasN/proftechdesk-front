import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { AuthGuard } from './auth/auth.guard';
import { TechnicalCreateComponent } from './components/technician/technical-create/technical-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: NavComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'technical', component: TechnicianListComponent},
      {path: 'technical/create', component: TechnicalCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
