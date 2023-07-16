import { Component, OnInit } from '@angular/core';
import { RefereeService } from 'src/app/Services/referee.service';
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
    private teamService: TeamsService,
    private refereeService: RefereeService,
  ) { }


  VenueList = [];

  TeamList = [];

  RefereeList = [];

  PlayerList = [];

  ngOnInit() {
    this.venueService.getAllVenue().subscribe((result) => {
      this.VenueList = <any>result;
    });

    this.teamService.getAllTeamDetails().subscribe((result) => {
      this.TeamList = <any>result;
    });

    this.refereeService.getAllRefreeDetails().subscribe((result) => {
      this.RefereeList = <any>result;
    });

  }

  playerDetailsfunction(id) {
    this.teamService.getPlayerDetails(id).subscribe((result) => {
      this.PlayerList = result;
    });
  }

  input = '';
  searchInput = '';
  onSearch() {
    this.searchInput = this.input;
  }
}
