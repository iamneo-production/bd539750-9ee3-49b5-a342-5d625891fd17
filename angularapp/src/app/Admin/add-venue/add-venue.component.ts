import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-add-venue',
  templateUrl: './add-venue.component.html',
  styleUrls: ['./add-venue.component.css']
})
export class AddVenueComponent implements OnInit {

  constructor(
    private venueService: VenueServiceService,
    private route: Router,
  ) { }

  addVenueForm: FormGroup;
  ngOnInit(): void {

    this.addVenueForm = new FormGroup({
      venueName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/), Validators.minLength(5)]),
      venueImageURL: new FormControl('', [Validators.required]),
      venueDescription: new FormControl('', [Validators.required]),
      venueCapacity: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
      venuePrice: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
      venueLocation: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(3)]),
    });
  }


  addVenueList() {
    if (this.addVenueForm.valid) {
      this.venueService.addVenue(<any>this.addVenueForm.value).subscribe({
        next: (result) => {
          this.route.navigate(['/admin-venue-list']);
        },
        error: (err) => {
          alert(err);
        },
      });
    }
    else {
      this.addVenueForm.markAllAsTouched();
      alert("Please fill all required fields.")
    }
  }

}