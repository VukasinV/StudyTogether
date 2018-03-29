import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  
  URL_API = 'http://localhost:59105/api';
  
  constructor (private http: HttpClient) { }

  // test api call
  getAllUsers () {
    return this.http.get(`${this.URL_API}/User`, 
    { headers: {
      'conformationNeeded': 'false'}
    });
  }

  postUser(newUser) {
    console.log(newUser);
    this.http.post(`${this.URL_API}/User`, JSON.stringify(newUser),
      { headers: {
        'Content-Type': 'application/json'
      }})
      .subscribe(res => console.log(res));
  }
}
