import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-meetup-create',
  templateUrl: './meetup-create.component.html',
  styleUrls: ['./meetup-create.component.css']
})

export class MeetupCreateComponent implements OnInit {
  @Output() meetupCreated = new EventEmitter<void>();

  form: FormGroup;
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'short',
    defaultOpen: false,
};

  constructor(public dialogRef: MatDialogRef<MeetupCreateComponent>, 
              private fb: FormBuilder, 
              private api: ApiService,
            private datePipe: DatePipe) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      startsAt: new FormControl(new Date(), Validators.required),
      capacity: new FormControl('', Validators.required)
    });
  }

  createMeetup(newMeetup) {
    const datePipe  = new DatePipe('en-US');
    const formattedDate = datePipe.transform(newMeetup.startsAt, 'short');
    newMeetup.startsAt = formattedDate;
    this.api.createMeetup(newMeetup).subscribe(
      data => {
        this.meetupCreated.emit();
        this.dialogRef.close();
      },
      error => console.log(error)
    );
  }

  close() {
    this.dialogRef.close();
  }

}
