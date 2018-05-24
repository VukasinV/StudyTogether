import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-meetup-table',
  templateUrl: './meetup-table.component.html',
  styleUrls: ['./meetup-table.component.css']
})
export class MeetupTableComponent implements OnInit {

  meetups;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.refreshTable();    
  }
  
  refreshTable() {
    this.api.getMeetups().subscribe(data => this.meetups = data);
    console.log('Table is refreshed!');
  }


}
