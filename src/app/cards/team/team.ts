import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { teams, TEAM_LIST } from '../../app.data';

@Component({
  imports: [MatIconModule],
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {
  protected readonly te: teams[] = TEAM_LIST;
}
