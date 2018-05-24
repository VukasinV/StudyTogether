import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-meetup-create',
  templateUrl: './meetup-create.component.html',
  styleUrls: ['./meetup-create.component.css']
})

export class MeetupCreateComponent implements OnInit {
  @Output() meetupCreated = new EventEmitter<void>();

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<MeetupCreateComponent>, 
              private fb: FormBuilder, 
              private api: ApiService) { }

  ngOnInit() {
    this.form = this.fb.group({
      description: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      startsAt: new FormControl('', Validators.required),
      capacity: new FormControl('', Validators.required)
    });
  }

  createMeetup(newMeetup) {
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
