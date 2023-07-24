import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private route: Router) { }
  CheckRole: any;
  baseUrl: string = 'https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Auth/';


  signUp(userObj: any) {
    if (this.CheckRole == 'user') {
      return this.http.post<any>(`${this.baseUrl}registerUser`, userObj);
    }
    return this.http.post<any>(`${this.baseUrl}registerAdmin`, userObj);
  }

  getAllorganiser() {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Organiser`);
  }

  getSingleOrganiser(id) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Organiser/` + id);
  }

  deleteOrganiser(id) {
    return this.http.delete<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Organiser/` + id);
  }

  updateOrganiser(data, id) {
    return this.http.put<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Organiser/` + id, data);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isloggedIn() {
    return !!localStorage.getItem('token');
  }

  signout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  


}