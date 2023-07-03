import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-event',
  templateUrl: './book-event.component.html',
  styleUrls: ['./book-event.component.css']
})
export class BookEventComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickViewBookedEvent() {
    this.router.navigateByUrl('user/viewbookedevent')
  }
}
