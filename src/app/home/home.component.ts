import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MeetupCreateComponent } from '../meetup-create/meetup-create.component';
import { ViewChild } from '@angular/core';
import { MeetupTableComponent } from '../meetup-table/meetup-table.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(MeetupTableComponent) meetupTable: MeetupTableComponent;

  constructor(private api: ApiService, public dialog: MatDialog) { }

  
  ngOnInit() {
  }
  
  openCreateMeetupDialog () {
      const dialogRef = this.dialog.open(MeetupCreateComponent, {
      height: '450px',
      width: '600px',
    });

    const afterMeetupCreated = dialogRef.componentInstance.meetupCreated.subscribe(red => this.meetupTable.refreshTable());
  }

  test() {
    this.api.test().subscribe(res => console.log(res));
  }

}
