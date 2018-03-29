import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule,
FormGroup,
FormControl,
ReactiveFormsModule,
Validators
 } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private api: ApiService) { }

  createUserForm: FormGroup;


  createUser(newUser) {
    this.api.postUser(newUser);
  }

  ngOnInit() {
    this.createUserForm = new FormGroup({
      Username: new FormControl('', Validators.required),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      Email: new FormControl('',Validators.required),
      Fullname: new FormControl('',Validators.required)
    })
  }
}
