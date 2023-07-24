import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-admin-venue-list',
  templateUrl: './admin-venue-list.component.html',
  styleUrls: ['./admin-venue-list.component.css']
})
export class AdminVenueListComponent implements OnInit {

  constructor(
    private venueService: VenueServiceService,
    private route: Router,
  ) { }

  VenueList = [];
  ngOnInit() {
    this.venueService.getAllVenue().subscribe((result) => {
      this.VenueList = <any>result;
    });
  }

  deleteVenue(id: any) {
    this.venueService.deleteVenue(id).subscribe({
      next: (result) => {
        location.reload();
      },
    });
  }
}