import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ngApp';

  constructor(
    private _spinnerService: NgxSpinnerService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    
  }

  loading() {
    if (!this._authService.loggedIn()) {
      this._spinnerService.show();
    } else {
      this._spinnerService.hide();
    }
  }
}
