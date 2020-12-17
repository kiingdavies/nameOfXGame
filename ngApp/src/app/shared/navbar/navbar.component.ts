import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../auth.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  // this function calls the loggedin method in auth.service
  login() {

    return this._authService.loggedIn();
  }

  // this function calls the logoutUser method in auth.service
  logout() {
    return this._authService.logoutUser();
  }

}
