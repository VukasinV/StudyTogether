import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule,
FormGroup,
FormControl,
ReactiveFormsModule,
Validators,
FormBuilder,
NgForm
 } from '@angular/forms';
import { Observable } from 'rxjs/Observable'; 
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createUserForm: FormGroup;

  registered = false;
  
  constructor(private api: ApiService, private fb: FormBuilder, private router: Router) { }

  
  ngOnInit() {
    this.createUserForm = this.fb.group({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      Email: new FormControl('', Validators.required),
      Fullname: new FormControl('', Validators.required)
    });
  }
  
  createUser(newUser) {
    this.api.createUser(newUser).subscribe(res => {
      console.log(res);
      this.registered = true;
    });
  }

  goToLogin() {
    this.router.navigate(['']);
  }

  showWarning() {

  }
}
