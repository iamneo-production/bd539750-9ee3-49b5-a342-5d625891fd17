import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookEventService } from 'src/app/Services/book-event.service';

@Component({
  selector: 'app-update-book-event',
  templateUrl: './update-book-event.component.html',
  styleUrls: ['./update-book-event.component.css']
})
export class UpdateBookEventComponent implements OnInit {

  constructor(
    private eventService: BookEventService,
    private router: ActivatedRoute,
    private route: Router,
  ) { }
  //Book Event
  EditEventForm: any = new FormGroup({
    eventId: new FormControl(''),
    eventName: new FormControl('', [Validators.required]),
    applicantName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    applicantAddress: new FormControl('', [Validators.required, Validators.pattern(/^(?!.*\s$)(?=.*[a-zA-Z])[a-zA-Z0-9\s,]+$/), Validators.minLength(20)]),
    applicantMobile: new FormControl('', [Validators.required, Validators.pattern('^(\\+91)?[6-9]\\d{9}$')]),
    applicantEmail: new FormControl('', [Validators.required, Validators.email]),
    eventAddress: new FormControl('', [Validators.required]),
    eventFromDate: new FormControl('', [Validators.required]),
    eventToDate: new FormControl('', [Validators.required]),
    eventPrice: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
    time: new FormControl('', [Validators.required]),
    members: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
    ReefreeName: new FormControl('', [Validators.required]),
    team1: new FormControl('', [Validators.required]),
    team2: new FormControl('', [Validators.required]),
    matchingId: new FormControl('', [Validators.required]),
    venueId: new FormControl('', [Validators.required]),
  }, { validators: this.dateRangeValidator });


  //this function check if the FromDate is greater than ToDate or not
  dateRangeValidator(control: FormGroup): { [key: string]: boolean } | null {
    const fromDate = control.get('eventFromDate').value;
    const toDate = control.get('eventToDate').value;

    if (fromDate && toDate && fromDate > toDate) {
      return { 'dateRangeInvalid': true };
    }

    return null;
  }

  ngOnInit() {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.eventService.getEventDetails(id).subscribe((result) => {
            this.EditEventForm.get('eventId').setValue(result.eventId);
            this.EditEventForm.get('eventName').setValue(result.eventName);
            this.EditEventForm.get('applicantName').setValue(result.applicantName);
            this.EditEventForm.get('applicantMobile').setValue(result.applicantMobile);
            this.EditEventForm.get('applicantAddress').setValue(result.applicantAddress);
            this.EditEventForm.get('applicantEmail').setValue(result.applicantEmail);
            this.EditEventForm.get('eventAddress').setValue(result.eventAddress);
            this.EditEventForm.get('eventFromDate').setValue(result.eventFromDate);
            this.EditEventForm.get('eventToDate').setValue(result.eventToDate);
            this.EditEventForm.get('eventPrice').setValue(result.eventPrice);
            this.EditEventForm.get('time').setValue(result.time);
            this.EditEventForm.get('members').setValue(result.members);
            this.EditEventForm.get('team1').setValue(result.team1);
            this.EditEventForm.get('team2').setValue(result.team2);
            this.EditEventForm.get('ReefreeName').setValue(result.ReefreeName);
            this.EditEventForm.get('matchingId').setValue(result.matchingId);
            this.EditEventForm.get('venueId').setValue(result.venueId);
          });
        }
      },
    });
  }

  Update() {
    this.eventService
      .updateEvent(this.EditEventForm.get('eventId').value, this.EditEventForm.value)
      .subscribe({
        next: (response) => {
          alert(
            'SUCCESS',
          );
          this.route.navigate(['/user-homepage']);
        },
      });
  }

}