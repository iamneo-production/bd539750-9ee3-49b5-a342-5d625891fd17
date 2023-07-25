import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

 constructor(private http: HttpClient) {}

  
  setTeamDetails(data: any) {
    return this.http.post<any>(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team`, data);
  }

  updateTeam(id: any, data: any) {
    return this.http.put(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team/` + id, data);
  }

  getAllTeamDetails() {
    return this.http.get<any>(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team`);
  }

  getTeamDetails(id: any) {
    return this.http.get<any>(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team/` + id);
  }

  getPlayerDetails(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/getplayerDetails/` + id);
  }

  deleteTeam(id: any) {
    return this.http.delete(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team/` + id);
  }

  deletePlayer(id:any){
    return this.http.delete(`https://8080-fafdcbdfadfbdeadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Team/players/` + id);
  }
}