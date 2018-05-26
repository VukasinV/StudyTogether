import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ViewChild } from '@angular/core';
import { MeetupTableComponent } from '../meetup-table/meetup-table.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(MeetupTableComponent) meetupTable: MeetupTableComponent;

  constructor(private api: ApiService, private router: Router) { }

  
  ngOnInit() {
  }

  openProfile (profileId) {
    this.router.navigate(['home/profile', profileId]);
  }

  test() {
    this.api.test().subscribe(res => console.log(res));
  }

}
