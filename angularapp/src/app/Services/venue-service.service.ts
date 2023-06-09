import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VenueServiceService {

  constructor(private http: HttpClient) { }

  addVenue(data: any) {
    return this.http.post<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Venue`, data);
  }

  getAllVenue() {
    return this.http.get(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Venue`);
  }

  getVenue(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Venue/` + id);
  }

  updateVenue(id: any, updateVenueRequest: any) {
    return this.http.put<any>(
      `https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Venue/` + id,
      updateVenueRequest
    );
  }

  deleteVenue(id: any) {
    return this.http.delete<any>(`https://8080-dffcfdfcebbadcdbbaadcffdfcbdfeeeb.project.examly.io/api/Venue/` + id);
  }
}
