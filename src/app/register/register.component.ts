import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule,
FormGroup,
FormControl,
ReactiveFormsModule,
Validators,
FormBuilder
 } from '@angular/forms';
import { Observable } from 'rxjs/Observable'; 
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  createUserForm: FormGroup;
  username = '';
  password = '';
  email = '';
  fullname = '';
  
  constructor(private api: ApiService, private fb: FormBuilder) { }

  createUser(newUser) {
    this.api.createUser(newUser).subscribe(res => console.log(res));
  }

  ngOnInit() {
    this.createUserForm = this.fb.group({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      Email: new FormControl('', Validators.required),
      Fullname: new FormControl('', Validators.required)
    });
  }

  // Vukasin commit
  


  // Lana commit
  
}
