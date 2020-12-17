import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { DashboardComponent } from './user-pages/dashboard/dashboard.component';
import { LoginComponent } from './user-pages/login/login.component';
import { RegisterComponent } from './user-pages/register/register.component';
import { UserProfileComponent } from './user-pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // {
  //   path: 'events',
  //   component: EventsComponent
  // },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard] // authentication guard
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'spinner',
    component: SpinnerComponent
  },
  {
    path: 'profile-page',
    component: UserProfileComponent
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
