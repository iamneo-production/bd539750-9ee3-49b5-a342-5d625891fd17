import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeamsService } from 'src/app/Services/teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  constructor(private teamService: TeamsService,
    private route: Router, private toast: ToastrService
  ) { }

  teamForm: FormGroup;
  teamCount: any;
  idx = 1;
  ngOnInit(): void {
    this.teamForm = new FormGroup({
      teamName: new FormControl('', [Validators.required]),
      teamImage: new FormControl('', [Validators.required]),
      playerCounts: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
      teamLocation: new FormControl('', [Validators.required]),
      teamDescription: new FormControl('', [Validators.required]),
      Players: new FormArray([
        new FormGroup({
          playerFirstName: new FormControl('', Validators.required),
          playerLastName: new FormControl('', Validators.required),
          playerAge: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]),
          playerGender: new FormControl('', Validators.required),
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
    if (this.idx == this.teamCount) {
      console.log(this.teamForm.value);
      if (this.teamForm.valid) {
        this.teamService.setTeamDetails(<any>this.teamForm.value).subscribe({
          next: (result) => {
            this.toast.success("Team Added Successfully", "Success");
            this.route.navigate(['/teams']);
          },
          error: (err) => {
            this.toast.error(err.message, "Error");
          },
        });
      }
    } else {

      this.toast.error('Enter ' + (this.teamCount - this.idx) + ' more Players', "Error");
    }
  }

}
