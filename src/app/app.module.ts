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

const appRoutes = [
  { path: '', 
  component: WelcomeComponent,
   children: [
     { path : '', component: LoginComponent },
     { path : 'register', component: RegisterComponent }
   ]
}];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    ProfileComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
