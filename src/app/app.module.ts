import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// To work with forms in Angular 17
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// To make HTTP requests
import { HttpClientModule } from '@angular/common/http';

//Imports for Angular Material components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

// Project component
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TechnicianListComponent } from './components/technician/technician-list/technician-list.component';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { TechnicalCreateComponent } from './components/technician/technical-create/technical-create.component';
import { TechnicalUpdateComponent } from './componentstechnician/technical-update/technical-update.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    TechnicianListComponent,
    LoginComponent,
    TechnicalCreateComponent,
    TechnicalUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,

      // Forms
      FormsModule,
      ReactiveFormsModule,

      // Requests http
      HttpClientModule,
      
      // Angular Material
      MatFormFieldModule,
      MatPaginatorModule,
      MatCheckboxModule,
      MatSnackBarModule,
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatSelectModule,
      MatInputModule,
      MatRadioModule,
      MatTableModule,
      MatIconModule,
      MatListModule,
      MatCardModule,
      ToastrModule.forRoot({
        timeOut: 3200,
        closeButton: true,
        progressBar: true
      })
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
