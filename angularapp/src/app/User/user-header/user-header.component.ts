import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private auth: AuthServiceService) { }

  greetings: any;
  icons: any;
  animation: any;
  name: any;
  userId: any;
  ngOnInit() {
    this.greetings = this.getGreeting();
    this.userId = this.auth.getIdFromToken();
    this.auth.getSingleOrganiser(this.userId).subscribe((result) => {
      this.name = result.username;
    })
  }

  getGreeting(): string {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting: string;

    if (currentHour >= 0 && currentHour < 12) {
      greeting = 'Good morning';
      this.icons = 'fa-mug-hot'
      this.animation = "fa-beat"
    } else if (currentHour >= 12 && currentHour < 16) {
      greeting = 'Good afternoon';
      this.icons = 'fa-sun'
      this.animation = "fa-spin"
    }
    else if (currentHour >= 16 && currentHour < 20) {
      greeting = 'Good Evening';
      this.icons = 'fa-cloud-sun'
      this.animation = "fa-beat"
    }
    else {
      greeting = 'Good evening';
      this.icons = 'fa-moon'
      this.animation = 'fa-beat'
    }

    return greeting;
  }

  logout() {
    this.auth.signout();
  }
}
