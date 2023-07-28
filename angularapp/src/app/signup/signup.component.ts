import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private auth: AuthServiceService, private route: Router) { }
  registerForm: FormGroup;
  UserRole: any = "";

  ngOnInit() {
    this.registerForm = new FormGroup(
      {
        userRole: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        username: new FormControl(''),
        mobileNumber: new FormControl('', [Validators.required,Validators.pattern('^(\\+91)?[6-9]\\d{9}$')]),
        password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/)]),
        confirmpassword: new FormControl('', [Validators.minLength(8)]),
      },
      { validators: this.checkPasswords}
    );

  }

  type: string = 'password';
  isTest: boolean = false;
  eyeIcon: string = 'fa-eye-slash';

  hideShow() {
    this.isTest = !this.isTest;
    if (this.isTest) {
      this.eyeIcon = 'fa-eye';
      this.type = 'text';
    }
    else{
      this.eyeIcon = 'fa-eye-slash';
      this.type = 'password';
    }
  }

  type1: string = 'password';
  isTest1: boolean = false;
  eyeIcon1: string = 'fa-eye-slash';

  hideShow1() {
    this.isTest1 = !this.isTest1;
    if (this.isTest1) {
      this.eyeIcon1 = 'fa-eye';
      this.type1 = 'text';
    }
    else{
      this.eyeIcon1 = 'fa-eye-slash';
      this.type1 = 'password';
    }
  }

  //Password Check, bot are same or not
  checkPasswords(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmpassword').value;

    return password === confirmPassword ? null : { notSame: true };
  }

  get Role(): FormControl {
    return this.registerForm.get('userRole') as FormControl;
  }
  get Email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }
  get Username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }
  get Mobilenumber(): FormControl {
    return this.registerForm.get('mobileNumber') as FormControl;
  }
  get Password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }
  get Confirmpassword(): FormControl {
    return this.registerForm.get('confirmpassword') as FormControl;
  }

  onSignup() {
    this.auth.CheckRole = this.UserRole;
    if (this.registerForm.valid) {
      console.log(this.registerForm.value);
      this.auth.signUp(<any>this.registerForm.value).subscribe({
        next: (result) => {
          alert(result.message);
          this.route.navigate(['/login']);
        },
        error: (err) => {
          alert("registered");
          this.route.navigate(['/login']);
        },
      });
    }
    else {
      this.registerForm.markAllAsTouched();
      alert("Please fill all the required fields");
    }
  }
}