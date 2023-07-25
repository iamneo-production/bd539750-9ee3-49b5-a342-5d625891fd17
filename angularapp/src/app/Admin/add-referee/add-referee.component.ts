import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RefereeService } from 'src/app/Services/referee.service';

@Component({
  selector: 'app-add-referee',
  templateUrl: './add-referee.component.html',
  styleUrls: ['./add-referee.component.css']
})
export class AddRefereeComponent implements OnInit {

  refereeForm: any;
  RefreeList = [];

  EditrefereeForm = new FormGroup({
    refereeId: new FormControl(''),
    refereeName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    refereeImage: new FormControl('', [Validators.required]),
    noOfMatches: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
    refereeLocation: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
  });

  constructor( private refereeService: RefereeService  ) { }

  ngOnInit(): void {

    this.refereeForm = new FormGroup({
      refereeName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      refereeImage: new FormControl('', [Validators.required]),
      noOfMatches: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
      refereeLocation: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
    });

    //Get All Refree Details
    this.refereeService.getAllRefreeDetails().subscribe((result) => {
      this.RefreeList = result;
    });

  }

  //Fetch particular Referee detail for update
  RefDetails(id: any) {
    this.refereeService.getRefreeDetails(id).subscribe((result) => {
      this.EditrefereeForm.get('refereeId').setValue(result.refereeId);
      this.EditrefereeForm.get('refereeName').setValue(result.refereeName);
      this.EditrefereeForm.get('noOfMatches').setValue(result.noOfMatches);
      this.EditrefereeForm.get('refereeImage').setValue(result.refereeImage);
      this.EditrefereeForm.get('refereeLocation').setValue(result.refereeLocation);
    });
  }


  UpdateRefree() {
    this.refereeService.updateRefree(this.EditrefereeForm.get('refereeId').value, this.EditrefereeForm.value).subscribe({
      next: (response) => {
        alert("Referee Updated Successfully!");
        location.reload();
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }


  addRefreeList() {
    if (this.refereeForm.valid) {
      this.refereeService
        .setRefreeDetails(this.refereeForm.value)
        .subscribe({
          next: (result) => {
            alert("Referee Added Successfully!");
            location.reload();
          },
          error: (err) => {
            alert(err.message);
          }
        });
    }
  }


  deleteRefreeDetails(id: any) {
    console.log(id);
    this.refereeService.deleteRefree(id).subscribe({
      next: (result) => {
        alert("Referee Deleted Successfully!");
        location.reload();
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }

  input = '';
  searchInput = '';
  onSearch() {
    this.searchInput = this.input;
  }

}