import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookEventService {

  constructor(private http: HttpClient) { }

  userid: any;

  setEventDetails(data: any, VenueID) {
    
    data.matchingId = this.userid;
    data.venueID = VenueID;

    return this.http.post<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/bookEvent`, data);
  }

  updateEvent(id: any, data: any) {
    return this.http.put(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/editEvent/` + id, data);
  }

  getAllEventDetails() {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/user/getSchedule`);
  }

  getEventDetails(id: any) {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/getEventUsingID/` + id);
  }

  deleteEvent(id: any) {
    return this.http.delete(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/deleteEvent/` + id);
  }


  getEventsUisngVenueID(id: any) {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_VenueId/` + id);
  }

  getEventsUisngTeamOneName(name: any) {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_TeamOneName/` + name);
  }

  getEventsUisngTeamTwoName(name: any) {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_TeamTwoName/` + name);
  }

  getEventsUisngRefereeName(name: any) {
    return this.http.get<any>(`https://8080-edeeaedbafcceadcdbbaadcffdfcbdfeeeb.project.examly.io/FetchEvent_Using_RefereeeeName/` + name);
  }
}