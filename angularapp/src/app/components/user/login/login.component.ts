import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  loginStatus = '';
  
  req = {
    method: 'GET',
    url: 'https://localhost:7241/api/user'
  };

  constructor(private router: Router, private usersservice: UsersService) { }

  ngOnInit(): void {
  }

  onClickLogin() {
    this.usersservice.getAllUserDetails().subscribe(res => {
      this.loginStatus = res.toString();
    })
    console.log(this.email, this.password, this.loginStatus);
    this.router.navigateByUrl('user/homepage');
  }
}
