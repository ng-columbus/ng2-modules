import { Injectable } from '@angular/core';
import {Team, TEAMS} from "./team";

@Injectable()
export class TeamService {

  constructor() {
    console.log('constructing TeamService');
  }

  getTeams(): Array<Team> {
    return TEAMS;
  }

}
