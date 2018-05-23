import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { headersToString } from 'selenium-webdriver/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {
  
  // Development link
  URL_API = 'http://localhost:59105/api';

  // Production link
  // URL_API = 'http://studytogetherbackend.azurewebsites.net/api';
  
  constructor (private http: HttpClient) { }

  // get list of all users
  getAllUsers () {
    return this.http.get(`${this.URL_API}/User`, 
    { headers: {
      'conformationNeeded': 'false'}
    });
  }

  // api call for creating new user
  createUser(newUser) {
    return this.http.post(`${this.URL_API}/User`, newUser);
  }

  login(username, password) {
  return this.http.post(`${this.URL_API}/Account`, {},
    { headers: {
      'username': username,
      'password': password
    }});
  }

  test() {
    return this.http.get(`${this.URL_API}/Test`);
  }

  getMeetups() {
    return this.http.get(`${this.URL_API}/Meeting`);
  }
}
