import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }


  setTeamDetails(data: any) {
    return this.http.post<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/admin/addTeam`, data);
  }

  setPlayer(id, data: any) {
    data.teamId = id;
    return this.http.post<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/saveplayer`, data);
  }

  updateTeam(id: any, data: any) {
    return this.http.put(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/admin/editTeam/` + id, data);
  }

  updatePlayers(id: any, data: any) {
    return this.http.put(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/editPlayers/` + id, data);
  }

  getAllTeamDetails() {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/admin/getTeam`);
  }

  getTeamDetails(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/admin/getTeamById/` + id);
  }

  getPlayerDetails(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/getplayerDetails_using_TeamId/` + id);
  }

  getPlayerDetailsUsingPlayerId(id: any) {
    return this.http.get<any>(
      `https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/playerDetail_Using_PlayerId/` + id
    );
  }

  deleteTeam(id: any) {
    return this.http.delete(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/admin/deleteTeam/` + id);
  }

  deletePlayer(id: any) {
    return this.http.delete(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/deletePlayers/` + id);
  }
}
