import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Here we import modules
import { FormsModule,
ReactiveFormsModule,
 } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';

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
import { MeetupTableComponent } from './meetup-table/meetup-table.component';

const appRoutes = [
  { path: '', 
  component: WelcomeComponent,
   children: [
     { path : '', component: LoginComponent },
     { path : 'register', component: RegisterComponent }
   ]
},
{ path: 'home', component: HomeComponent },
{ path: 'profile', component: ProfileComponent },
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
    MeetupTableComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    AgGridModule.withComponents([]),
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
