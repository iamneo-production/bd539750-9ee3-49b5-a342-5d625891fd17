import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { BookEventService } from 'src/app/Services/book-event.service';
import { EmailService } from 'src/app/Services/email.service';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-viewbook-event',
  templateUrl: './viewbook-event.component.html',
})
export class ViewbookEventComponent implements OnInit {

  EventDetails = [];
  SingleEventDetails = [];
  constructor(
    private bookEventService: BookEventService,
    private venueService: VenueServiceService,
    private auth: AuthServiceService,
    private emailService: EmailService
  ) { }

  userId: any;
  ngOnInit() {
    this.userId = this.auth.getIdFromToken();

    //Request to backend to fetch the event details
    this.bookEventService.getAllEventDetails().subscribe((result) => {
      this.EventDetails = result;
    });
  }

  getEventDetails(id) {
    this.bookEventService.getEventDetails(id).subscribe((result) => {
      this.SingleEventDetails = result;
      console.log(this.SingleEventDetails);
      console.log(typeof(this.SingleEventDetails));
      
      
    })
  }

  //Email
  emailDetails = {
    applicantName: '',
    To: '',
    Subject: ' Cancellation of the Baseball Event!',
    Message: '',
  };

  //Function to delete an Event and send Email
  deleteEvent(id: any, email: any, name: any) {
    //set data to email Object
    this.emailDetails.To = email;
    this.emailDetails.applicantName = name;
    this.emailDetails.Message =
    '<p> Dear <b>' +
    this.emailDetails.applicantName +
    '</b>, </p>   <p>I hope this email finds you well. I am writing to inform you with regret that the baseball event, which you were selected to head, has been cancelled by the organizer.</p> <p>This decision comes with deep disappointment, as we were looking forward to having you lead the event and contribute your valuable expertise and passion for baseball. Unfortunately, due to unforeseen circumstances beyond our control, the organizer has had to make the difficult decision to cancel the event.</p> <p>If you have any questions or concerns regarding the cancellation or any other matter, please feel free to reach out to us at [organiser@gmail.com].</p> <p>Once again, we extend our sincere apologies for the cancellation of the event. We truly value your interest and involvement in our initiatives, and we hope to have the chance to collaborate with you in the future.</p>  <p><b>Best Regards</b>,<br><b>Admin</b><br><b>Baseball Event Management</b><br><b>+91-9876543210</b></p>';

    //Delete Event
    this.bookEventService.deleteEvent(id).subscribe({
      next: (result) => {
        location.reload();
        this.emailService.sendEmail(<any>this.emailDetails).subscribe({
          next: (result) => { },
        });
      },
    });
  }

}
