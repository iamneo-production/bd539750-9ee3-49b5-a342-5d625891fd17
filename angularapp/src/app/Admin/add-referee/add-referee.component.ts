import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RefereeService } from 'src/app/Services/referee.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.component.html',
  styleUrls: ['./add-referee.component.css']
})
export class AddRefereeComponent implements OnInit {

  refereeForm: any;
  RefreeList = [];
  EditRefree = {
    refereeId: '',
    refereeName: '',
    refereeImage: '',
    noOfMatches: '',
    refereeLocation: '',
  };

  constructor(
    private refereeService: RefereeService,
    private toast: ToastrService,
    private route:Router,
  ) { }

  ngOnInit(): void {

    this.refereeForm = new FormGroup({
      refereeName: new FormControl('', [Validators.required]),
      refereeImage: new FormControl('', [Validators.required]),
      noOfMatches: new FormControl('', [Validators.required]),
      refereeLocation: new FormControl('', [Validators.required]),
    });

    //Get All Refree Details
    this.refereeService.getAllRefreeDetails().subscribe((result) => {
      this.RefreeList = result;
    });

  }

  //Fetch particular Referee detail for update
  RefDetails(id: any) {
    this.refereeService.getRefreeDetails(id).subscribe((result) => {
      this.EditRefree = result;
      console.log(this.EditRefree);
    });
  }


  UpdateRefree() {
    this.refereeService.updateRefree(this.EditRefree.refereeId, this.EditRefree).subscribe({
      next: (response) => {
        this.toast.success("Referee Updated Successfully!","Success");
       location.reload();
      },
    });
  }


  addRefreeList() {
    if (this.refereeForm.valid) {
      this.refereeService
        .setRefreeDetails(this.refereeForm.value)
        .subscribe({
          next: (result) => {
            this.toast.success("Referee Added Successfully!", "Success");

            location.reload();
          },
          error: (err) => {
            this.toast.error(err.message, "Error");
          },
        });
    }
  }


  deleteRefreeDetails(id: any) {
    this.refereeService.deleteRefree(id).subscribe({
      next: (result) => {
        location.reload();
      },
    });
  }

}
