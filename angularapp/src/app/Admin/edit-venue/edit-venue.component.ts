import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  EditVenue = new FormGroup({
    venueId: new FormControl(''),
    venueName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+([a-zA-Z0-9]*)$'), Validators.minLength(5)]),
    venueImageURL: new FormControl('', [Validators.required]),
    venueDescription: new FormControl('', [Validators.required]),
    venueCapacity: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
    venuePrice: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
    venueLocation: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(10)]),
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.venueService.getVenue(id).subscribe((result) => {
            this.EditVenue.get('venueId').setValue(result.venueId);
            this.EditVenue.get('venueImageURL').setValue(result.venueImageURL);
            this.EditVenue.get('venueName').setValue(result.venueName);
            this.EditVenue.get('venueCapacity').setValue(result.venueCapacity);
            this.EditVenue.get('venueLocation').setValue(result.venueLocation);
            this.EditVenue.get('venuePrice').setValue(result.venuePrice);
            this.EditVenue.get('venueDescription').setValue(result.venueDescription);

          });
        }
      },
    });
  }


  UpdateVenue() {
    if (this.EditVenue.valid) {
      this.venueService.updateVenue(this.EditVenue.get('venueId').value, this.EditVenue.value).subscribe({
        next: (response) => {
          this.route.navigate(['/admin-venue-list']);
        },
      });

    }
  }
}
