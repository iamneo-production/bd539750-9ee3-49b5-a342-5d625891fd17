import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  protected url = "https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/api/user";

  getAllUserDetails() {
    return this.http.get<any>(this.url);
  }

  getUserDetails(id: any) {
    return this.http.get<any>(this.url + "/" + id);
  }

  deleteUser(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}


