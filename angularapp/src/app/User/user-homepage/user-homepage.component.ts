import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  text: string = 'Welcome to Baseball League Manangement...';
  typedText: string = '';
  forward: boolean = true;

  constructor(private route: ActivatedRoute) { }

  typeWriter() {
    let i = 0;
    const speed = 150; // Delay between characters in milliseconds

    const typeForward = () => {
      if (i < this.text.length) {
        this.typedText += this.text.charAt(i);
        i++;
        setTimeout(typeForward, speed);
      } else {
        this.forward = false;
        setTimeout(typeBackward, 200);
      }
    };

    const typeBackward = () => {
      if (i > 0) {
        this.typedText = this.text.substring(0, i - 1);
        i--;
        setTimeout(typeBackward, speed);
      } else {
        this.forward = true;
        setTimeout(typeForward, 200);
      }
    };

    if (this.forward) {
      typeForward();
    } else {
      typeBackward();
    }
  }

  ngOnInit() {
    AOS.init({
      offset: 20,
    });
    this.typeWriter();

  }

}