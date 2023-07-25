import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VenueServiceService {

  constructor(private http: HttpClient) { }

  addVenue(data: any) {
    return this.http.post<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/admin/addVenue`, data);
  }

  getAllVenue() {
    return this.http.get(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/admin/getVenue`);
  }

  getVenue(id: any) {
    return this.http.get<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/admin/getVenueById/` + id);
  }

  updateVenue(id: any, updateVenueRequest: any) {
    return this.http.put<any>(
      `https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/admin/editVenue/` + id,
      updateVenueRequest
    );
  }

  deleteVenue(id: any) {
    return this.http.delete<any>(`https://8080-dffcfdfcebbadcdbbaadcffdbacbaecbeeec.project.examly.io/admin/deleteVenue/` + id);
  }
}
