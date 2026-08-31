import { Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { teams, TEAM_LIST } from '../../app.data';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TeamService, TeamMember } from '../../app.service';
import { Form } from '../../form/form';
import { CommonModule } from '@angular/common';


@Component({
  imports: [MatIconModule, MatDialogModule, CommonModule],
  standalone: true,
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team {
  protected readonly te: teams[] = TEAM_LIST;

  dialog = inject(MatDialog);

  teamService = inject(TeamService);

  openDialog(){
    const dialogRef = this.dialog.open(Form);

    dialogRef.afterClosed().subscribe((result: TeamMember | undefined) => {
      if(result){
        this.teamService.addTeamMember(result);
      }
    });
  }
}
