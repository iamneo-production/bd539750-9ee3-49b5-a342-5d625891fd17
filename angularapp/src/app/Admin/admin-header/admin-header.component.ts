import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  greetings: any;
  icons: any;
  animation:any;
  ngOnInit() {
    this.greetings = this.getGreeting();
  }


  getGreeting(): string {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting: string;

    if (currentHour >= 0 && currentHour < 12) {
      greeting = 'Good morning';
      this.icons = 'fa-mug-hot'
      this.animation="fa-beat"
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = 'Good afternoon';
      this.icons = 'fa-sun'
      this.animation="fa-spin"
    } else {
      greeting = 'Good evening';
      this.icons = 'fa-star-and-crescent'
      this.animation='fa-beat'
    }

    return greeting;
  }

  logOut() {
    this.auth.signout();
  }

  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

}
