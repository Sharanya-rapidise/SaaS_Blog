import { Component, inject, Input, signal, DestroyRef, OnInit} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { teams, TEAM_LIST } from '../../app.data';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ProjectOverviewService, TeamMember, ProjectOverviewData } from '../../app.service';
import { Form, FormResult } from '../../form/form';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  imports: [MatIconModule, MatDialogModule, CommonModule],
  standalone: true,
  selector: 'app-team',
  styleUrl: './team.css',
  templateUrl: './team.html',
})
export class Team implements OnInit{

  // @Input() team!: ProjectOverviewData['oTeam'];

  // protected readonly te: teams[] = TEAM_LIST;

  dialog = inject(MatDialog);
  projectService = inject(ProjectOverviewService);
  private destroyRef = inject(DestroyRef);

  team = signal<ProjectOverviewData['oTeam'] | null>(null);

  ngOnInit(){
    this.projectService.getOverviewStream()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((data) => {
      if(data?.oTeam){
        this.team.set( {
          iMemberCount: data.oTeam.iMemberCount,
          aMembers: [...data.oTeam.aMembers]
        })
      }
    });

    // this.projectService.addTeamMember(2, completeMember).subscribe({
    //   next: (savedMember: any) => {
    //     console.log('succesfully saved to db', savedMember);

    //     this.team = {
    //       iMemberCount: this.team.aMembers.length + 1,
    //       aMembers: [...this.team.aMembers, completeMember]
    //     };
    //   },
    //   error: (err: any) => console.error(err)
    // });
  }

  openDialog(){
    const dialogRef = this.dialog.open(Form);

    dialogRef.afterClosed().subscribe((result: FormResult | undefined) => {
      if(result){

        //generating initials of name entered by te user                       
        const initials = result.vName
        .split(' ')
        .map(word => word.charAt(0))
        .join('')
        .toUpperCase()
        .slice(0, 2);

        //generating random colours for avatar background
        const colors = ['#cfcdf5', '#c4f3e3', '#f7e0b9', '#f8c0c0', '#f5b9d7', '#c6b4f1'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        const completeMember: TeamMember = {
          vName: result.vName,
          vRole: result.vRole,
          vRoleNote: null,
          iAllocation: Number(result.iAllocation),
          vAvatarInitial: initials || '??',
          vAvatarColor: randomColor
        };
        
        this.projectService.addTeamMember(2, completeMember).subscribe({
          next: (savedMember: any) => {
            console.log('successfully saved to database', savedMember);

            this.projectService.getNewMember(2).subscribe({
              next: (freshMemberList: any) => {

                const memberExists = freshMemberList.some((m: any) => m.vName === completeMember.vName);
                const updatedList = memberExists ? freshMemberList : [...freshMemberList, completeMember];

                this.team.set( {
                  iMemberCount: updatedList.length,
                  aMembers: updatedList
                })
              },
              error: (fetchErr: any) => console.log('Failed fetching updated list:', fetchErr)
            })
          }, 
          error: (err: any) => console.error('Failed to add team member:', err)
        });
      }
    });
  }
}
