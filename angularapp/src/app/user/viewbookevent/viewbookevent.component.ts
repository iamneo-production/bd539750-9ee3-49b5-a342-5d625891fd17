import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewbookevent',
  templateUrl: './viewbookevent.component.html',
  styleUrls: ['./viewbookevent.component.css']
})
export class ViewbookeventComponent implements OnInit {

  @Input() title: string = "View Book Event";

  constructor() { }

  ngOnInit(): void {
  }

}
