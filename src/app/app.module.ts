import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Here we import modules
import { FormsModule,
ReactiveFormsModule,
 } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

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

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    RouterModule.forRoot([
      { path: '', component: WelcomeComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'profile', component: ProfileComponent },
    ])
=======
    RouterModule.forRoot(appRoutes),
>>>>>>> 932434f91cd703c97bc5562fbfa75d877d7a83d0
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
