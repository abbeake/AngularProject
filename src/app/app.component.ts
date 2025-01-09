import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Member1Component } from './member1/member1.component';
import { Member2Component } from './member2/member2.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    AboutComponent,
    RouterLink,
    RouterLinkActive,
    Member1Component,
    Member2Component,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    NavbarComponent,
    RouterModule,
    NgbModule,
    FormsModule,
    SignupComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';

  constructor(firebaseTest: Firestore){

  }
}
