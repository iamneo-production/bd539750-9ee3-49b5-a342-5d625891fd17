import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public title: string = 'No Title';
  public hidelogout: boolean = false;

  constructor(private router: Router) {

  }

  ngOnInit(): void {}

  onActivate(component: any) {
    this.title = component.title;
    this.hidelogout = component.hidelogout ? true : false;
  } 
}
