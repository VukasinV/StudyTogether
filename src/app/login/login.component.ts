import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failedLogin: boolean;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }

  login(credentials) {
    this.api.login(credentials.Username, credentials.Password).subscribe(data => {
        localStorage.setItem('token', data.toString());
        this.router.navigate(['home']);
      },
      error => {
        this.failedLogin = true;
        console.log(error);
  });
  }
  goToRegister() {
    this.router.navigate(['register']);
  }

  getRoute() {
    return this.router.url;
  }

}
