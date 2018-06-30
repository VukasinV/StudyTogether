import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Route, Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  failedLogin: boolean;

  // Testing
  base64image;
  base64image1;
  prikazi (event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
  
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => {
        this.base64image1 = event.target.result;
      };
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login(credentials) {
    this.api.login(credentials.username, credentials.password).subscribe(
      data => {
        localStorage.setItem('token', data.toString());
        this.router.navigate(['home']);
      }, 
      error => {
        this.failedLogin = true;
    });
  }
  goToRegister() {
    this.router.navigate(['register']);
  }

  getRoute() {
    return this.router.url;
  }

}
