import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
    private toast: ToastrService
  ) { }
  UpdateEvent = {
    eventId: '',
    eventName: '',
    applicantName: '',
    applicantAddress: '',
    applicantMobile: '',
    applicantEmail: '',
    eventAddress: '',
    eventFromDate: '',
    eventToDate: '',
    time: '',
    members: '',
    eventPrice: '',
  };

  ngOnInit() {
    this.router.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.eventService.getEventDetails(id).subscribe((result) => {
            this.UpdateEvent = result;
            console.log(this.UpdateEvent);
          });
        }
      },
    });
  }

  Update() {
    this.eventService
      .updateEvent(this.UpdateEvent.eventId, this.UpdateEvent)
      .subscribe({
        next: (response) => {
          this.toast.success(
            'SUCCESS',
            'Update successfully',
          );
          this.route.navigate(['/user-homepage']);
        },
      });
  }

}
