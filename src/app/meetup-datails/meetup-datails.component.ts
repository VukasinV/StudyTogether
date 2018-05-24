import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-meetup-datails',
  templateUrl: './meetup-datails.component.html',
  styleUrls: ['./meetup-datails.component.css']
})
export class MeetupDatailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private api: ApiService) {
   }

  ngOnInit() {
    console.log(this.data.meetup.Description);
  }

  alreadyOnMeetup() {
    let userId;
    this.api.getUserId().subscribe(data => userId = data);
  }
}
