import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-meetup-datails',
  templateUrl: './meetup-datails.component.html',
  styleUrls: ['./meetup-datails.component.css']
})
export class MeetupDetailsComponent implements OnInit {

  userAlreadyOnMeetup: boolean; 

  constructor(@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<MeetupDetailsComponent>, private api: ApiService) {}

  ngOnInit() {
    console.log(this.data.meetup.Description);
    this.alreadyOnMeetup(this.data.meetup.MeetingId);
  }

  alreadyOnMeetup(meetupId) {
    this.api.getParticipant(meetupId).subscribe(
      data => this.userAlreadyOnMeetup = true,
      error => this.userAlreadyOnMeetup = false
    );
  }

  joinMeetup () {
    const meetingId = JSON.stringify(this.data.meetup.MeetingId);
    this.api.postParticipant(meetingId).subscribe(
      data => this.dialogRef.close('Successfuly joined meetup :-D')
    );
  }

  leaveMeetup () {
    const meetingId = JSON.stringify(this.data.meetup.MeetingId);
    this.api.deleteParticipant(meetingId).subscribe(
      data => this.dialogRef.close('You left this one, but there are another, waiting')
    );
  }
}
