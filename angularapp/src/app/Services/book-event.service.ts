import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {

  constructor(private http: HttpClient, private userIdService: AuthServiceService) { }

  userid: any;

  setEventDetails(data: any, VenueID) {
    this.userid = this.userIdService.getIdFromToken();
    data.matchingId = this.userid;
    data.venueID = VenueID;

    return this.http.post<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/user/bookEvent`, data);
  }

  updateEvent(id: any, data: any) {
    return this.http.put(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/user/editEvent/` + id, data);
  }

  getAllEventDetails() {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/user/getSchedule`);
  }

  getEventDetails(id: any) {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/getEventUsingID/` + id);
  }

  deleteEvent(id: any) {
    return this.http.delete(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/user/deleteEvent/` + id);
  }


  getEventsUisngVenueID(id: any) {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_VenueId/` + id);
  }

  getEventsUisngTeamOneName(name: any) {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_TeamOneName/` + name);
  }

  getEventsUisngTeamTwoName(name: any) {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_TeamTwoName/` + name);
  }

  getEventsUisngRefereeName(name: any) {
    return this.http.get<any>(`https://8080-baaddbcbfbacadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_RefereeeeName/` + name);
  }
}
