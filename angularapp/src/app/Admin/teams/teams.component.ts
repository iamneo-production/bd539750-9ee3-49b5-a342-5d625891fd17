import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService: TeamsService) {}
  TeamList:any = [];
  ngOnInit() {
    console.log(this.TeamList.values);

    this.teamService.getAllTeamDetails().subscribe((result) => {
      this.TeamList = result;
    });
  }

  deleteTeamDetails(id: any) {
    this.teamService.deleteTeam(id).subscribe({
      next: (result) => {
       
        location.reload();
      },
    });
  }

}
