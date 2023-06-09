import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/Services/teams.service';
import { VenueServiceService } from 'src/app/Services/venue-service.service';

@Component({
  selector: 'app-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.css']
})
export class VenueListComponent implements OnInit {

  constructor(
    private venueService: VenueServiceService,
    private teamService:TeamsService,
  ) {}


  VenueList = [];

  TeamList = [];

  RefreeList = [];

  PlayerList = [];

  ngOnInit() {
    this.venueService.getAllVenue().subscribe((result) => {
      this.VenueList = <any>result;
    });

    this.teamService.getAllTeamDetails().subscribe((result) => {
      this.TeamList = <any>result;
    });
  }

  playerDetailsfunction(id) {
    this.teamService.getPlayerDetails(id).subscribe((result) => {
      this.PlayerList = result;
    });
  }
}
