import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatAutocompleteModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.api.test().subscribe(res => this.username = res.toString());
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
