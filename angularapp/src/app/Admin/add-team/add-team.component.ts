import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TeamsService } from 'src/app/Services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor(private teamService: TeamsService,
  ) { }

  teamForm: FormGroup;
  teamCount: any;
  idx = 1;
  ngOnInit(): void {
    this.teamForm = new FormGroup({
      teamName: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9\s]+$/), Validators.minLength(5)
      ]),
      teamImage: new FormControl('', [Validators.required]),
      playerCounts: new FormControl('', [Validators.required, Validators.pattern(/^(?!0+$)\d+$/)]),
      teamLocation: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
      teamDescription: new FormControl('', [Validators.required]),
      Players: new FormArray([
        new FormGroup({
          playerFirstName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
          playerLastName: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]),
          playerAge: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
          playerGender: new FormControl('', [Validators.required]),
        }),
      ]),
    });
  }

  addPlayer() {
    const control = <FormArray>this.teamForm.controls['Players'];
    control.push(
      new FormGroup({
        playerFirstName: new FormControl('', Validators.required),
        playerLastName: new FormControl('', Validators.required),
        playerAge: new FormControl('', Validators.required),
        playerGender: new FormControl('', Validators.required),
      })
    );

    this.idx++;
  }

  removePlayer(index: any) {
    console.log(index);

    const control = <FormArray>this.teamForm.controls['Players'];
    control.removeAt(index);
    this.idx--;
  }

  submitTeam() {

    console.log(this.teamForm.value);
    if (this.teamForm.valid) {

      if (this.idx == this.teamCount) {
        this.teamService.setTeamDetails(<any>this.teamForm.value).subscribe({
          next: (result) => {
            alert("Team Added Successfully");
          },
          error: (err) => {
            alert(err?.error.message);
          },
        });

      }
      else {
        if (this.teamCount - this.idx > 0) {
          alert('Enter ' + (this.teamCount - this.idx) + ' more Players');
        }
        else {
          alert('Remove ' + (this.idx - this.teamCount) + ' more Players');
        }
      }
    }
    else {
      this.teamForm.markAllAsTouched();
      alert("Please fill all the required fields");
    }
  }

}


