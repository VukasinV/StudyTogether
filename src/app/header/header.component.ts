import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { MatAutocompleteModule, 
  MatInputModule, 
  MatFormFieldModule, 
  MatAutocompleteSelectedEvent, 
  MatOptionSelectionChange } from '@angular/material';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selectedProfile = new EventEmitter<any>();

  username: string;
  myControl: FormControl = new FormControl();
  profiles;
  filteredProfiles: Observable<any[]>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }

  filterProfiles(event: any) {
    this.api.getProfilesByName(event.target.value).subscribe(data => this.profiles = data);
    console.log(event.target.value);
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onProfileSelected (event, profile) {
    if (event.isUserInput) {
      this.selectedProfile.emit(profile.ProfileId);
    }
  }
}
