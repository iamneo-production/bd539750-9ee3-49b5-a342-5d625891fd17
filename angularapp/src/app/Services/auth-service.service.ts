import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient, private route: Router) { }
  CheckRole: any;
  baseUrl: string = 'https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/';


  signUp(userObj: any) {
    if (this.CheckRole == 'user') {
      return this.http.post<any>(`${this.baseUrl}registerUser`, userObj);
    }
    return this.http.post<any>(`${this.baseUrl}registerAdmin`, userObj);
  }

  getAllorganiser() {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/api/Organiser`);
  }

  getSingleOrganiser(id) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/api/Organiser/` + id);
  }

  deleteOrganiser(id) {
    return this.http.delete<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/api/Organiser/` + id);
  }

  updateOrganiser(data, id) {
    return this.http.put<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/api/Organiser/` + id, data);
  }

  login(loginObj: any) {
    return this.http.post<any>(`${this.baseUrl}admin/login`, loginObj);
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

  decodeToken() {
    const jwtHelper = new JwtHelperService();
    const token = this.getToken();
    return jwtHelper.decodeToken(token);
  }

  getRoleFromToken() {
    const x = this.decodeToken();
    return x['role'];
  }

  getIdFromToken() {
    const y = this.decodeToken();
    return y['nameid'];
  }
}
