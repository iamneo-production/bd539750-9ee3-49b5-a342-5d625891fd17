import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-booked-event',
  templateUrl: './view-booked-event.component.html',
  styleUrls: ['./view-booked-event.component.css']
})
export class ViewBookedEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickBookEvent() {
    this.router.navigateByUrl('user/bookevent')
  }
}
