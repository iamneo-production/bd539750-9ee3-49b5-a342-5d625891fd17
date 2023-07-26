import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { BookEventService } from 'src/app/Services/book-event.service';
import { EmailService } from 'src/app/Services/email.service';
import { RefereeService } from 'src/app/Services/referee.service';
import { TeamsService } from 'src/app/Services/teams.service';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css'],
  providers: [DatePipe],
})
export class BookEventComponent implements OnInit {

  VenueId: any;
  //In teamArray we store all the team details which we get from backend
  teamArray = [];

  //In refereeArray we store all the team details which we get from backend
  refreeArray = [];

  //In refereeOptions we store all the names of Referee who are present in refereeArray
  refreeOptions = [];

  //In firstTeamOptions we store all the names of TeamOne name who are present in teamArray
  firstTeamOptions = [];

  selectedTeam1: any;
  //In secondTeamOptions we store all the names of Teamtwo name who are present in teamArray
  secondTeamOptions = [];

  Events = [];
  // In EventsTeamOne we store all the events which are booked for teamOne Name
  EventsTeamOne = [];

  // In EventsTeamOne we store all the events which are booked for teamTwo Name
  EventsTeamTwo = [];

  // In EventsReferee we store all the events which are booked for teamTwo Name
  EventsReferee = [];

  // In dateArrayStore all the dates in which the venue is booked from Event array
  dateArray = [];

  // In dateArrayTeamOne all the dates in which the TeamOne is booked is booked
  dateArrayTeamOne = [];

  // In dateArrayTeamTwo all the dates in which the TeamOne is booked is booked
  dateArrayTeamTwo = [];

  // In dateArrayReferee all the dates in which the TeamOne is booked is booked
  dateArrayReferee = [];

  fromDate: any;
  toDate: any;
  minDate: any;
  constructor(
    private venueService: VenueServiceService,
    private router: ActivatedRoute,
    private route: Router,
    private eventService: BookEventService,
    private toast: ToastrService,
    private emailService: EmailService,
    private teamService: TeamsService,
    private refreeService: RefereeService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    const currentDate = new Date();
    const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');
    this.minDate = formattedDate;

    //get a particular event Venue Details
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        this.VenueId = id;


        if (id) {
          this.venueService.getVenue(id).subscribe((result) => {
            this.bookEventForm.eventName = result.venueName;
            this.bookEventForm.eventAddress = result.venueLocation;
            this.bookEventForm.eventPrice = result.venuePrice;
            this.emailDetails.eventVenueName = result.venueName;
            console.log(this.bookEventForm);

          });

          //used to fetch Book Dates from praticular Venue Booked-Event Details using venueID
          this.eventService.getEventsUisngVenueID(id).subscribe((result) => {
            this.Events = result;
            console.log(this.Events);

            //pushed the dates to dateArray[]
            for (let event of this.Events) {
              this.fromDate = event.eventFromDate;
              this.toDate = event.eventToDate;

              while (this.fromDate <= this.toDate) {
                this.dateArray.push(this.fromDate);
                const incrementedDate = moment(this.fromDate, 'YYYY-MM-DD').add(
                  1,
                  'days'
                );
                this.fromDate = incrementedDate.format('YYYY-MM-DD');
                const formattedDate = this.datePipe.transform(
                  this.fromDate,
                  'yyyy-MM-dd'
                );
                this.fromDate = formattedDate;
              }
            }
            console.log(this.dateArray);
          });
        }
      },
    });

    //Send request to backend to fetch Team Details
    this.teamService.getAllTeamDetails().subscribe((result) => {
      this.teamArray = result;

      for (let team of this.teamArray) {
        this.firstTeamOptions.push(team.teamName);
        this.secondTeamOptions.push(team.teamName);
      }

    });

    //Send request to backend to fetch Refree Details

    this.refreeService.getAllRefreeDetails().subscribe((result) => {
      this.refreeArray = result;


      for (let referee of this.refreeArray) {
        this.refreeOptions.push(referee.refereeName);

      }


    });
  }

  disableTeam2Option(team: string): boolean {
    this.selectedTeam1 = this.bookEventForm.get('team1').value;
    return team === this.selectedTeam1;
  }


  //Emails Variables
  to: '';
  name: '';
  number: '';
  selectedFromDate: any;
  emailDetails = {
    eventVenueName: '',
    applicantName: '',
    mobileNumber: '',
    To: '',
    Subject:
      ' Booking Confirmation - Successfully Book Event',
    Message: '',
  };

  //Book Event
  bookEventForm: any = new FormGroup({
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


  onRefereeChange() {
    const selectedReferee = this.bookEventForm.get('ReefreeName').value;
    this.dateArrayReferee.splice(0, this.dateArrayReferee.length);


    //used to fetch Book Dates from praticular Team Booked-Event Details using team1
    this.eventService.getEventsUisngRefereeName(selectedReferee).subscribe((result) => {
      this.EventsReferee = result;



      //pushed the dates to dateArrayReferee[]
      for (let eventreferee of this.EventsReferee) {
        this.fromDate = eventreferee.eventFromDate;
        this.toDate = eventreferee.eventToDate;

        while (this.fromDate <= this.toDate) {
          this.dateArrayReferee.push(this.fromDate);
          const incrementedDate = moment(this.fromDate, 'YYYY-MM-DD').add(
            1,
            'days'
          );
          this.fromDate = incrementedDate.format('YYYY-MM-DD');
          const formattedDate = this.datePipe.transform(
            this.fromDate,
            'yyyy-MM-dd'
          );
          this.fromDate = formattedDate;
        }
      }

    });
  }

  //Choose Teams Methods
  onFirstTeamFieldChange() {
    const selectedOption = this.bookEventForm.get('team1').value;
    console.log(selectedOption);
    this.dateArrayTeamOne.splice(0, this.dateArrayTeamOne.length);


    //used to fetch Book Dates from praticular Team Booked-Event Details using team1
    this.eventService.getEventsUisngTeamOneName(selectedOption).subscribe((result) => {
      this.EventsTeamOne = result;



      //pushed the dates to dateArrayTeamOne[]
      for (let eventTeamOne of this.EventsTeamOne) {
        this.fromDate = eventTeamOne.eventFromDate;
        this.toDate = eventTeamOne.eventToDate;

        while (this.fromDate <= this.toDate) {
          this.dateArrayTeamOne.push(this.fromDate);
          const incrementedDate = moment(this.fromDate, 'YYYY-MM-DD').add(
            1,
            'days'
          );
          this.fromDate = incrementedDate.format('YYYY-MM-DD');
          const formattedDate = this.datePipe.transform(
            this.fromDate,
            'yyyy-MM-dd'
          );
          this.fromDate = formattedDate;
        }
      }
      console.log(this.dateArrayTeamOne);

    });
  }

  onSecondTeamFieldChange() {
    const selectedOption = this.bookEventForm.get('team2').value;
    this.dateArrayTeamTwo.splice(0, this.dateArrayTeamTwo.length);

    //used to fetch Book Dates from praticular Team Booked-Event Details using team1
    this.eventService.getEventsUisngTeamTwoName(selectedOption).subscribe((result) => {
      this.EventsTeamTwo = result;



      //pushed the dates to dateArrayTeamTwo[]
      for (let eventTeamTwo of this.EventsTeamTwo) {
        this.fromDate = eventTeamTwo.eventFromDate;
        this.toDate = eventTeamTwo.eventToDate;

        while (this.fromDate <= this.toDate) {
          this.dateArrayTeamTwo.push(this.fromDate);
          const incrementedDate = moment(this.fromDate, 'YYYY-MM-DD').add(
            1,
            'days'
          );
          this.fromDate = incrementedDate.format('YYYY-MM-DD');
          const formattedDate = this.datePipe.transform(
            this.fromDate,
            'yyyy-MM-dd'
          );
          this.fromDate = formattedDate;
        }
      }
      console.log(this.dateArrayTeamTwo);

    });
  }

  selectedDateArray = [];
  check: boolean;
  checkFromDate: any;
  checkToDate: any;
  checkDatesPresent(dateArray: any, selectedDateArray: any): boolean {
    for (const date of this.selectedDateArray) {
      if (this.dateArray.includes(date)) {
        return true;
      }

      if (this.dateArrayTeamOne.includes(date)) {
        return true;
      }

      if (this.dateArrayTeamTwo.includes(date)) {
        return true;
      }

      if (this.dateArrayReferee.includes(date)) {
        return true;
      }
    }
    return false;
  }

  sendBookEventDetails() {
    //pushed user Date in SelectedDateArray
    this.checkFromDate = this.selectedFromDate;
    this.checkToDate = this.selectedToDate;
    while (this.checkFromDate <= this.checkToDate) {
      this.selectedDateArray.push(this.checkFromDate);
      const incrementedDate = moment(this.checkFromDate, 'YYYY-MM-DD').add(
        1,
        'days'
      );
      this.checkFromDate = incrementedDate.format('YYYY-MM-DD');
      const formattedDate = this.datePipe.transform(
        this.checkFromDate,
        'yyyy-MM-dd'
      );
      this.checkFromDate = formattedDate;
    }

    console.log(this.selectedDateArray);

    //set value to EmailDeatils Variables
    this.emailDetails.applicantName = this.name;
    this.emailDetails.To = this.to;
    this.emailDetails.mobileNumber = this.number;
    this.emailDetails.Message =
      '<p> Dear <b>' +
      this.emailDetails.applicantName +
      '</b>,</p> <p>I am delighted to inform you that you have been selected as the Head for the upcoming baseball event at <b>' +
      this.bookEventForm.eventName +
      '</b> from <b>' + this.selectedFromDate +
      '</b> to <b>' + this.selectedToDate +
      '</b> . Congratulations on being chosen for this important role! We are confident that your passion for baseball and organizational skills will make this event a grand success.</p> <p>As the Head of the event, you will be leading a team of dedicated individuals, including team members, who will work collaboratively to ensure that every aspect of the baseball event is meticulously planned and executed.</p> <p>Please feel free to reach out to me at [organiser@gmail.com] if you need any assistance or have any questions before our kick-off meeting. I look forward to working closely with you and the rest of the team to make this baseball event an unforgettable experience for all participants.</p> <p><b>Best Regards</b>,<br><b>Organiser</b><br><b>Baseball Event Management</b><br><b>+91-98765432010</b></p>';

    console.log(this.emailDetails);


    //check that the dates between the selected dates are already booked or not
    this.check = this.checkDatesPresent(this.dateArray, this.selectedDateArray);
    console.log(this.check);


    //send bookeventData to service file

    if (!this.check) {
      if (this.bookEventForm.valid) {
        console.log('hello hello');
        this.eventService
          .setEventDetails(this.bookEventForm.value, this.VenueId)
          .subscribe({
            next: (result) => {
              this.toast.success(
                'SUCCESS',
                'Event Booked!',
              );
            },
            error: (err) => {
              this.toast.error(
                'ERROR',
                err?.error.message,
              );
            },
          });

        //Send email Data to service file

        this.emailService.sendEmail(<any>this.emailDetails).subscribe({
          next: (result) => {
            this.route.navigate(['/user-homepage']);
          },
        });
      }
    } else {
      this.toast.error(
        'Dates are booked in between your selected dates. Choose another Dates!',
      );
      this.selectedDateArray.splice(0, this.selectedDateArray.length);
    }
  }



  //Code to hide EventFromDate
  checkDateValidityFrom(): void {
    const selectedDateTime = new Date(this.selectedFromDate).setHours(
      0,
      0,
      0,
      0
    );
    const isHidden = this.dateArray.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden1 = this.dateArrayTeamOne.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden2 = this.dateArrayTeamTwo.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden3 = this.dateArrayReferee.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );


    if (isHidden && isHidden1 && isHidden2 && isHidden3) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue, Teams and referee already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && isHidden2 && (!isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue, Team-1, Team-2 already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && isHidden3 && (!isHidden2)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error('Venue, Team-1 and Referee already booked for this date!');
    }

    else if (isHidden && isHidden2 && isHidden3 && (!isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error('Venue, Team-2 and Referee already booked for this date!');
    }

    else if (isHidden1 && isHidden2 && isHidden3 && !isHidden) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-1, Team-2 and Referee already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && (!isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue, Team-1 already booked for this date!',
      );
    }

    else if (isHidden && isHidden2 && (!isHidden1 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue, Team-2 already booked for this date!',
      );
    }

    else if (isHidden && isHidden3 && (!isHidden2 && !isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue, Referee already booked for this date!',
      );
    }

    else if (isHidden1 && isHidden2 && (!isHidden && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-1, Team-2 already booked for this date!',
      );
    }

    else if (isHidden1 && isHidden3 && (!isHidden2 && !isHidden)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-1, Referee already booked for this date!',
      );
    }

    else if (isHidden2 && isHidden3 && (!isHidden && !isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-2, Referee already booked for this date!',
      );
    }

    else if (isHidden && (!isHidden1 && !isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Venue already booked for this date!',
      );
    }

    else if (isHidden1 && (!isHidden && !isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-1 already booked for this date!',
      );
    }

    else if (isHidden2 && (!isHidden && !isHidden1 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Team-2 already booked for this date!',
      );
    }

    else if (isHidden3 && (!isHidden && !isHidden1 && !isHidden2)) {
      // Clear the selected date if it's hidden
      this.selectedFromDate = null;

      this.toast.error(
        'Referee already booked for this date!',
      );
    }
  }


  //Code to hide EventToDate
  selectedToDate: any;
  checkDateValidityTo(): void {
    const selectedDateTime = new Date(this.selectedToDate).setHours(0, 0, 0, 0);
    const isHidden = this.dateArray.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden1 = this.dateArrayTeamOne.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden2 = this.dateArrayTeamTwo.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    const isHidden3 = this.dateArrayReferee.some(
      (hiddenDate) =>
        new Date(hiddenDate).setHours(0, 0, 0, 0) === selectedDateTime
    );

    if (isHidden && isHidden1 && isHidden2 && isHidden3) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue, Teams and referee already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && isHidden2 && (!isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue, Team-1, Team-2 already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && isHidden3 && (!isHidden2)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error('Venue, Team-1 and Referee already booked for this date!');
    }

    else if (isHidden && isHidden2 && isHidden3 && (!isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error('Venue, Team-2 and Referee already booked for this date!');
    }

    else if (isHidden1 && isHidden2 && isHidden3 && !isHidden) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-1, Team-2 and Referee already booked for this date!',
      );
    }

    else if (isHidden && isHidden1 && (!isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue, Team-1 already booked for this date!',
      );
    }

    else if (isHidden && isHidden2 && (!isHidden1 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue, Team-2 already booked for this date!',
      );
    }

    else if (isHidden && isHidden3 && (!isHidden2 && !isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue, Referee already booked for this date!',
      );
    }

    else if (isHidden1 && isHidden2 && (!isHidden && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-1, Team-2 already booked for this date!',
      );
    }

    else if (isHidden1 && isHidden3 && (!isHidden2 && !isHidden)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-1, Referee already booked for this date!',
      );
    }

    else if (isHidden2 && isHidden3 && (!isHidden && !isHidden1)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-2, Referee already booked for this date!',
      );
    }

    else if (isHidden && (!isHidden1 && !isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Venue already booked for this date!',
      );
    }

    else if (isHidden1 && (!isHidden && !isHidden2 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-1 already booked for this date!',
      );
    }

    else if (isHidden2 && (!isHidden && !isHidden1 && !isHidden3)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Team-2 already booked for this date!',
      );
    }

    else if (isHidden3 && (!isHidden && !isHidden1 && !isHidden2)) {
      // Clear the selected date if it's hidden
      this.selectedToDate = null;

      this.toast.error(
        'Referee already booked for this date!',
      );
    }
  }

}
