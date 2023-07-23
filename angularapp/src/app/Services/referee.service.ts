import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private http: HttpClient) {}

  protected url = 'https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee';

  setRefreeDetails(data: any) {
    return this.http.post<any>(this.url, data);
  }

  updateRefree(id: any, data: any) {
    return this.http.put(this.url + id, data);
  }

  getAllRefreeDetails() {
    return this.http.get<any>(this.url);
  }

  getRefreeDetails(id: any) {
    return this.http.get<any>(this.url + id);
  }

  deleteRefree(id: any) {
    return this.http.delete(this.url + id);
  }
}