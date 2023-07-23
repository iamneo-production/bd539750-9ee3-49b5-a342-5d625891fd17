import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/components/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  users : User[] = [];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
    console.log(this.users);
  }

  onClickVenue() {
    this.router.navigateByUrl('admin/addvenues');
  }

  onClickTeams() {
    this.router.navigateByUrl('admin/addteams')
  }

  onClickReferee() {
    this.router.navigateByUrl('admin/addreferee')
  }

  logout() {
    this.router.navigateByUrl('user/login')
  }

  loadUsers() {
    this.users.splice(0);
    this.usersService.getAllUserDetails().subscribe((result) => {
        for(let user of result){
          this.users.push(user);
        }
      });
  }

  deleteUser(id){
    this.usersService.deleteUser(id).subscribe({
      next: (result) => {
        this.loadUsers();
      },
      error : (respose) => {
        console.log(respose);
      } 
    });
  }
  
}

type User = {
    id: number,
    userName: string,
    mobileNumber: number,
    email: string,
    password: string,
    userRole: string
  }