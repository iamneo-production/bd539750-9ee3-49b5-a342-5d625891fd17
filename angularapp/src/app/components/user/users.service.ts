import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  protected url = "https://localhost:7241/api/User";

  getData() {
    return this.http.get(this.url);
  }
}
