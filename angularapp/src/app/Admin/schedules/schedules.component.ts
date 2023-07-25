import { Component, OnInit } from '@angular/core';
// import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { BookEventService } from 'src/app/Services/book-event.service';
import { EmailService } from 'src/app/Services/email.service';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css']
})
export class SchedulesComponent implements OnInit {

  EventDetails = [];
  constructor(
    private bookEventService: BookEventService,
    private venueService: VenueServiceService,
    // private auth: AuthServiceService,
    private emailService: EmailService
  ) {}

  userId: any;
  ngOnInit() {
    // this.userId = this.auth.getIdFromToken();

    //Request to backend to fetch the event details
    this.bookEventService.getAllEventDetails().subscribe((result) => {
      this.EventDetails = result;
    });
  }

  //Email
  emailDetails = {
    applicantName: '',
    To: '',
    Subject: 'Successfullt Delete the Booking!',
    Message: '',
  };

  //Function to delete an Event and send Email to organiser
  deleteEvent(id: any, email: any, name: any) {
    //set data to email Object
    this.emailDetails.To = email;
    this.emailDetails.applicantName = name;
    this.emailDetails.Message =
      '<p>Dear ' +
      this.emailDetails.applicantName +
      ',</p>   <p>You have successfully delete the Event which you booked.</p>  <p><b>Best Regards</b>,<br><b>Admin</b><br><b>Baseball Event Management</b><br><b>+91-9876543210</b></p>';

    //Delete Event
    this.bookEventService.deleteEvent(id).subscribe({
      next: (result) => {
        location.reload();
        this.emailService.sendEmail(<any>this.emailDetails).subscribe({
          next: (result) => {},
        });
      },
    });
  }


}