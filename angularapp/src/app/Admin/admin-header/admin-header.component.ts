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
      greeting = 'Good Morning';
      this.icons = 'fa-mug-hot'
      this.animation="fa-beat"
    } else if (currentHour >= 12 && currentHour < 16) {
      greeting = 'Good Afternoon';
      this.icons = 'fa-sun'
      this.animation="fa-spin"
    } 
    else if (currentHour >= 16 && currentHour < 20) {
      greeting = 'Good Evening';
      this.icons = 'fa-cloud-sun'
      this.animation="fa-beat"
    }
    
    else {
      greeting = 'Good Evening';
      this.icons = 'fa-moon'
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
