import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TeamsService } from 'src/app/Services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService: TeamsService, private toast: ToastrService) { }
  TeamList: any = [];

  PlayerList: any = [];
  playerForm: FormGroup;

  //this variable is used to set teamId in playerForm
  TeamID: any;

  EditPlayer = {
    playerId: '',
    playerFirstName: '',
    playerLastName: '',
    playerGender: '',
    playerAge: '',
    teamId: '',
  };

  EditTeam = {
    teamId: '',
    teamName: '',
    teamDescription: '',
    teamImage: '',
    teamLocation: '',
  };

  EditPlayerCount = {
    teamId: '',
    teamName: '',
    teamDescription: '',
    teamImage: '',
    teamLocation: '',
    playerCounts: '',
  };
  ngOnInit() {
    console.log(this.TeamList.values);

    this.teamService.getAllTeamDetails().subscribe((result) => {
      this.TeamList = <any>result;
    });

    this.playerForm = new FormGroup({
      playerFirstName: new FormControl('', Validators.required),
      playerLastName: new FormControl('', Validators.required),
      playerAge: new FormControl('', Validators.required),
      playerGender: new FormControl('', Validators.required),
      teamId: new FormControl(''),
    });
  }

  //get all players belongs to particular team using teamId
  getPlayers(teamID) {
    this.TeamID = teamID;
    this.teamService.getPlayerDetails(teamID).subscribe((result) => {
      this.PlayerList = result;
    });
  }

  //get particular player using playerId
  getPlayer(playerID) {
    this.teamService
      .getPlayerDetailsUsingPlayerId(playerID)
      .subscribe((result) => {
        this.EditPlayer = result;
        console.log(this.EditPlayer);
      });
  }

  //get particular team
  getTeam(id: any) {
    this.teamService.getTeamDetails(id).subscribe((result) => {
      this.EditTeam = result;
      console.log(this.EditTeam);
    });
  }

  deleteTeamDetails(id: any) {
    this.teamService.deleteTeam(id).subscribe({
      next: (result) => {
        location.reload();
      },
    });
  }

  //delete player using player id
  deletePlayer(id) {
    //Decrease playerCount when we delete particular player
    this.teamService.getTeamDetails(this.TeamID).subscribe((result) => {
      this.EditPlayerCount.teamId = result.teamId;
      this.EditPlayerCount.teamName = result.teamName;
      this.EditPlayerCount.teamImage = result.teamImage;
      this.EditPlayerCount.teamLocation = result.teamLocation;
      this.EditPlayerCount.teamDescription = result.teamDescription;
      this.EditPlayerCount.teamId = result.teamId;
      var x = Number(result.playerCounts) - 1;
      this.EditPlayerCount.playerCounts = String(x);
      console.log(this.EditPlayerCount);

      this.teamService.updateTeam(this.TeamID, this.EditPlayerCount).subscribe({
        next: (result) => { },
      });
    });

    // send delete request to backend
    this.teamService.deletePlayer(id).subscribe({
      next: (result) => {
        location.reload();
      },
    });
  }

  updatePlayer() {
    this.teamService
      .updatePlayers(this.EditPlayer.playerId, this.EditPlayer)
      .subscribe({
        next: (result) => {
          location.reload();
        },
      });
  }

  updateTeam() {
    this.teamService.updateTeam(this.EditTeam.teamId, this.EditTeam).subscribe({
      next: (result) => {
        location.reload();
      },
    });
  }


  addPlayer() {
    if (this.playerForm.valid) {
      this.teamService.setPlayer(this.TeamID, this.playerForm.value).subscribe({
        next: (result) => {

          this.toast.success("Player Added Successfully", "Success");
          //Increase playerCount when we delete particular player
          this.teamService.getTeamDetails(this.TeamID).subscribe((result) => {
            this.EditPlayerCount.teamId = result.teamId;
            this.EditPlayerCount.teamName = result.teamName;
            this.EditPlayerCount.teamImage = result.teamImage;
            this.EditPlayerCount.teamLocation = result.teamLocation;
            this.EditPlayerCount.teamDescription = result.teamDescription;
            this.EditPlayerCount.teamId = result.teamId;
            var x = Number(result.playerCounts) + 1;
            this.EditPlayerCount.playerCounts = String(x);
            console.log(this.EditPlayerCount);

            this.teamService
              .updateTeam(this.TeamID, this.EditPlayerCount)
              .subscribe({
                next: (result) => {

                  location.reload();
                },
              });
          });

        },
        error: (err) => {
          this.toast.error(err.message,"Failed");
        },
      });
    }
  }

}
