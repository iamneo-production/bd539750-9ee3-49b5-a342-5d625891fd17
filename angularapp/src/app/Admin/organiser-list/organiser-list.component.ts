import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from 'src/app/Services/auth-service.service';

@Component({
  selector: 'app-organiser-list',
  templateUrl: './organiser-list.component.html',
  styleUrls: ['./organiser-list.component.css']
})
export class OrganiserListComponent implements OnInit {

  constructor(private authService: AuthServiceService,private toast:ToastrService,private route:Router) { }

  OrganiserDetails = [];
  pass:any;
  registerForm: FormGroup;
  ngOnInit(): void {



    this.registerForm = new FormGroup(
      {
        userRole: new FormControl('user', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl(''),
        password: new FormControl(''),
        confirmpassword: new FormControl(''),
        mobileNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ]),
      },

    );

    this.authService.getAllorganiser().subscribe((result) => {
      this.OrganiserDetails = result;
    });
  }

  deleteOrganiser(id) {
    console.log(id);

    this.authService.deleteOrganiser(id).subscribe((result) => {
      location.reload();
    });
  }
  

  onSignup() {
    this.authService.CheckRole = "user";
    if (this.registerForm.valid) {
      this.authService.signUp(<any>this.registerForm.value).subscribe({
        next: (result) => {
          this.toast.success(result.message,"Success");
          location.reload();
        },
      });
    }
  }

}
