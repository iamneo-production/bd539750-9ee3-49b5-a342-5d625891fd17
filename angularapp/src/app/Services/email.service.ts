import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http:HttpClient) { }

  sendEmail(data: any) {
    return this.http.post<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Email/sendEmail`, data);
  }
}
