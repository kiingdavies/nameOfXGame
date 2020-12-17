import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
// import { TokenInterceptorService } from './token-interceptor.service';
import { NgxSpinnerModule } from "ngx-spinner"; 

import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './user-pages/login/login.component';
import { RegisterComponent } from './user-pages/register/register.component';
import { DashboardComponent } from './user-pages/dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SpinnerComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [AuthService, AuthGuard, UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
