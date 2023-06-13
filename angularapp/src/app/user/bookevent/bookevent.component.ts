import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookevent',
  templateUrl: './bookevent.component.html',
  styleUrls: ['./bookevent.component.css']
})
export class BookeventComponent implements OnInit {

  @Input() title: string = "Book Event";

  constructor() { }

  ngOnInit(): void {
  }

}
