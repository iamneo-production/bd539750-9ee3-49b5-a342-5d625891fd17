import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthServiceService, private route: Router,private toast:ToastrService) { }
  canActivate(): boolean {
    if (this.auth.isloggedIn()) {
      return true;
    } else {
      this.toast.error("Please Login First","Error")
      this.route.navigate(['/login']);
      return false;
    }
  }

}
