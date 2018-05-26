import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  myControl: FormControl = new FormControl();
  profiles;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.test().subscribe(res => this.username = res.toString());
    this.api.getAllProfiles().subscribe(
      data => this.profiles = data
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
