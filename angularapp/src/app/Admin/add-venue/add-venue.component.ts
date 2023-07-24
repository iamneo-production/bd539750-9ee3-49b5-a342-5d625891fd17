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
      venueName: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z0-9\s]+$/), Validators.minLength(5)]),
      venueImageURL: new FormControl('', [Validators.required]),
      venueDescription: new FormControl('', [Validators.required]),
      venueCapacity: new FormControl('', [Validators.required,Validators.pattern(/^(?!0+$)\d+$/)]),
      venuePrice: new FormControl('', [Validators.required,Validators.pattern(/^(?!0+$)\d+$/)]),
      venueLocation: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$'), Validators.minLength(3)]),
    });
  }

  get Name(): FormControl {
    return this.addVenueForm.get('venueName') as FormControl;
  }

  get Image(): FormControl {
    return this.addVenueForm.get('venueImageURL') as FormControl;
  }

  get Location(): FormControl {
    return this.addVenueForm.get('venueLocation') as FormControl;
  }

  get Capacity(): FormControl {
    return this.addVenueForm.get('venueCapacity') as FormControl;
  }

  get Price(): FormControl {
    return this.addVenueForm.get('venuePrice') as FormControl;
  }

  get Discription(): FormControl {
    return this.addVenueForm.get('venueDescription') as FormControl;
  }


  addVenueList() {
    if (this.addVenueForm.valid) {
      this.venueService.addVenue(<any>this.addVenueForm.value).subscribe({
        next: (result) => {
          this.route.navigate(['/admin-venue-list']);
        },
        error: (err) => {
        },
      });
    }
  }

}