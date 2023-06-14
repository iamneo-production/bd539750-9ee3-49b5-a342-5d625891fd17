import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-edit-venue',
  templateUrl: './edit-venue.component.html',
  styleUrls: ['./edit-venue.component.css']
})
export class EditVenueComponent implements OnInit {

  constructor(
    private router: ActivatedRoute,
    private route: Router,
    private venueService: VenueServiceService,
  ) { }

  EditVenue = {
    venueId: '',
    venueName: '',
    venueImageURL: '',
    venueLocation: '',
    venuePrice: '',
    venueCapacity: '',
    venueDescription: '',
  };

  ngOnInit(): void {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.venueService.getVenue(id).subscribe((result) => {
            this.EditVenue = result;
          });
        }
      },
    });
  }


  UpdateVenue() {
    this.venueService.updateVenue(this.EditVenue.venueId, this.EditVenue).subscribe({
      next: (response) => {
        this.route.navigate(['/admin-venue-list']);
      },
    });
  }
}
