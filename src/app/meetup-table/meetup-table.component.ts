import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MeetupDatailsComponent } from '../meetup-datails/meetup-datails.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-meetup-table',
  templateUrl: './meetup-table.component.html',
  styleUrls: ['./meetup-table.component.css']
})
export class MeetupTableComponent implements OnInit {

  meetups;

  constructor(private api: ApiService, public dialog: MatDialog, public snackBar: MatSnackBar) {

  }

  ngOnInit(): void {
    this.refreshTable();    
  }
  
  refreshTable() {
    this.api.getMeetups().subscribe(data => this.meetups = data);
    console.log('Table is refreshed!');
  }

  showDetails (meetup) {
    console.log(meetup);
    const dialogRef = this.dialog.open(MeetupDatailsComponent, {
      height: '450px',
      width: '600px',
      data: {
        meetup: meetup
      }
    });

    dialogRef.afterClosed().subscribe( result => {
      this.refreshTable();
      if (result !== undefined) {
        this.snackBar.open(`${result}`, null, {
          duration: 3000,
        });
      }
    });
  }
}
