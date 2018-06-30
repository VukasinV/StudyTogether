import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Here we import modules
import { 
FormsModule,
ReactiveFormsModule,
 } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { 
  MatDialogModule,
  MatAutocompleteModule,
  MatInputModule,
  MatFormFieldModule,
 } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaModule } from 'ng-recaptcha';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';

// Here we import custom components
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth.interceptor';
import { ReviewComponent } from './review/review.component';
import { MeetupTableComponent } from './meetup-table/meetup-table.component';
import { MeetupCreateComponent } from './meetup-create/meetup-create.component';
import { MeetupDetailsComponent } from './meetup-datails/meetup-datails.component';
import { DatePipe } from '@angular/common';

const appRoutes = [
  { path: '', 
  component: WelcomeComponent,
   children: [
     { path : '', component: LoginComponent },
     { path : 'register', component: RegisterComponent }
   ]
},
  { path: 'home', component: HomeComponent,
    children: [
      { path: '', component: MeetupTableComponent },
      { path: 'profile/:id', component: ProfileComponent },
    ]
  },
  { path: 'review', component: ReviewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProfileComponent,
    LoginComponent,
    HomeComponent,
    ReviewComponent,
    MeetupTableComponent,
    MeetupCreateComponent,
    MeetupDetailsComponent,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    MatDialogModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule,
    MatSnackBarModule,
    RecaptchaModule.forRoot(),
    AngularDateTimePickerModule
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DatePipe
  ],
  entryComponents: [
    MeetupCreateComponent,
    MeetupDetailsComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
