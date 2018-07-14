import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo;
  admin: boolean;
  adminInfo;
  image;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( 
      params => {
        this.api.getProfile(params.id).subscribe(
          data => {
            this.profileInfo = data;
            if (this.profileInfo.RoleName === "Admin") {
              console.log(this.profileInfo.RoleName);
              this.admin = true;
            } else {
              console.log(this.profileInfo.RoleName);
              this.admin = false;
            }
            console.log(data);
          }
        );

        this.api.test().subscribe(data => this.adminInfo = data);
    });
  }

  prikazi (event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (onLoadEvent: any) => {
        this.image = onLoadEvent.target.result;
      };
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

}
