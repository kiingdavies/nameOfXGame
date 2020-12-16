import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usersUrl = 'http://localhost:3000/api/users'; // this holds the url to events endpoint
  // private _specialEventsUrl = 'http://localhost:3000/api/special'; // this holds the url to special events endpoint

  constructor(private http: HttpClient) {}
  // method to get the list of all events
  getUsers() {
    return this.http.get<any>(this._usersUrl);
  }
}
