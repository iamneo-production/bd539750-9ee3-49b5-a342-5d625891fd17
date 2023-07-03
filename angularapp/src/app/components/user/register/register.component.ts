import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userType = '';
  email = '';
  username = '';
  mobileNumber = '';
  password = '';
  confirmPassword = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickSubmit() {
    this.router.navigateByUrl('user/login')
  }

}
