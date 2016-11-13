import { Component, OnInit } from '@angular/core';
import {Team} from './team';
import {TeamService} from "./team.service";

@Component({
  selector: 'ngc-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {
  teams: Array<Team>;
  selectedTeam: Team;

  /**
   * Inject teamService into this component
   * @param teamService
   */
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teams = this.teamService.getTeams();
    this.selectedTeam = this.teams[0];
  }

  onSelect(team: Team): void {
    this.selectedTeam = team;
  };

}
