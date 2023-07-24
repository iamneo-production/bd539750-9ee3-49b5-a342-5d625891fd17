import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../Services/auth-service.service';
import { UserStoreService } from '../Services/user-store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  type: string = 'password';
  isTest: boolean = false;
  eyeIcon: string = 'fa-eye-slash';


  //Hide and Show password
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

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+$/)]),
  });


  get Email(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }
  get Password(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  constructor(private auth: AuthServiceService, private route: Router, private toast: ToastrService, private userStore: UserStoreService) { }

  public role: string = '';
  onLogin() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe({
        next: (result) => {

          this.auth.storeToken(result.token);
          this.userStore.getRoleFromStore().subscribe((val) => {
            let roleFromToken = this.auth.getRoleFromToken();
            this.role = val || roleFromToken;

            if (this.role == 'user') {
              this.route.navigate(['/user-homepage']).then(() => {
                location.reload();
              });

            } else if (this.role == 'admin') {
              this.route.navigate(['/admin-venue-list']);
            }
          });

          this.toast.success(result.message, "Success");
        },
        error: (err) => {
          this.toast.error("Incorrect email or password", "Failed");
        },
      });
    }
    else {
      this.loginForm.markAllAsTouched();
      this.toast.error("Please fill all the required fields", "ERROR");
    }
  }
}
