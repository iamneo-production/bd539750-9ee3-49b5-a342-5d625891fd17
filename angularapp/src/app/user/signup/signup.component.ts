import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @Input() title = "Signup";
  @Input() hidelogout = true;

  constructor() { }

  ngOnInit(): void {}

}
