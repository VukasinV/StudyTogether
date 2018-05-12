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

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required)
    });
  }

  login(credentials) {
    this.api.login(credentials.Username, credentials.Password).subscribe(data => {
      console.log('success', data);
      this.router.navigate(['home']);
    },
  error => console.log(error));
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  test () {
    console.log(this.router.url);
  }

  getRoute() {
    return this.router.url;
  }

}
