import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { EmailService } from 'src/app/Services/email.service';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.css']
})
export class OrganiserListComponent implements OnInit {

  constructor(private authService: AuthServiceService, private emailService: EmailService) { }

  OrganiserDetails = [];
  //Emails Variables
  to: '';
  emailDetails = {
    To: '',
    Subject:
      'Account Deleted! ',
    Message: '',
  };

  ngOnInit(): void {
    this.authService.getAllorganiser().subscribe((result) => {
      this.OrganiserDetails = result;
    });
  }

  deleteOrganiser(id) {

    //this service get the particular organiser 
    this.authService.getSingleOrganiser(id).subscribe((response) => {
      this.to = response.email;

      this.emailDetails.To = this.to;

      //this service delete the organiser
      this.authService.deleteOrganiser(id).subscribe((result) => {
        this.emailDetails.Message = '<p><b> Dear User</b>,</p><p>We hope this email finds you well. We are writing to inform you that your account was deleted by our Administration Team.</p><p>If you have any questions or require further assistance, please feel free to contact our customer support team at <b>[+91-9876543210]</b>. We are here to help!</p> <p>Thank you for choosing our services.</p><p><b>Best Regards</b>,<br><b>Admin</b><br><b>Baseball Event Management</b><br><b>+91-98765432010</b></p>';

        console.log(this.emailDetails);

        //this service send the mail to the organiser
        this.emailService.sendEmail(this.emailDetails).subscribe((result) => {
          location.reload();
        })
      });
    })
  }

}