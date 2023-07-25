import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RefereeService {

  constructor(private http: HttpClient) {}

  setRefreeDetails(data: any) {
    return this.http.post<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee/`, data);
  }

  updateRefree(id: any, data: any) {
    return this.http.put(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee/` + id, data);
  }

  getAllRefreeDetails() {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee`);
  }

  getRefreeDetails(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee/` + id);
  }

  deleteRefree(id: any) {
    return this.http.delete(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Referee/` + id);
  }
}
