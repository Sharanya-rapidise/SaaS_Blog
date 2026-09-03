import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { map, tap } from 'rxjs';

// export interface TeamMember {
//   name: string;
//   role: string;
//   allocation: number;
// }

export interface TeamMember{
  vName: string;
  vRole: string;
  vRoleNote: string | null;
  iAllocation: number;
  vAvatarInitial: string;
  vAvatarColor: string;
}

// @Injectable({
//   providedIn: 'root'
// })
// export class TeamService {
//   teamList: TeamMember[] = [];

//   constructor() {
//     const savedData = localStorage.getItem('myTeamData');
//     if (savedData) {
//       this.teamList = JSON.parse(savedData);
//     }
//   }

//   addTeamMember(newMember: TeamMember) {
//     this.teamList.push(newMember);
//     localStorage.setItem('myTeamData', JSON.stringify(this.teamList));
//   }
// }

export interface ProjectOverviewData {
  oHeader: {
    vProjectName: string;
    txDescription: string;
    vProjectStatusLabel: string;
    iStartDate: string;
    iDaysRemaining: number;
    iTotalTasks: number;
    iDoneTasks: number;
    iProgressPercent: number;
    tiIsPinned: number;
    vIconEmoji: string;
    vIconColor: string;
  };
  oAbout: {
    txAbout: string;
    aGoals: Array<{
      vGoalTitle: string;
      iCurrentValue: number;
      iTargetValue: number;
      vUnit: string;
      tiIsDone: number;
      iProgressPercent: number;
    }>;
  };

  oStats: {
    oTasks: { iTotalTasks: number; iTaskCapacity: number; iDoneTasks: number };
    oTimeline: { iDaysRemaining: number; iDeadline: string };
    oBudget: { dBudgetTotal: number; dBudgetUsed: number; vCurrency: string; iUsedPercent: number };
    aMetrics: Array<{ vLabel: string; dValue: number; dBaseline: number; vUnit: string; tiTrend: number }>;
  };

  oTeam: {
    iMemberCount: number;
    aMembers: Array<{
      vName: string;
      vRole: string;
      vRoleNote: string | null;
      iAllocation: number;
      vAvatarInitial: string;
      vAvatarColor: string;
    }>;
  };
  
  oProjectInfo: {
    vClientName: string;
    vIndustry: string;
    iStartDate: string;
    iDeadline: string;
    dBudgetTotal: number;
    vCurrency: string;
    vProjectType: string;
  };
  oTabCounts: { iTasks: number; iFiles: number; iActivities: number };
  oTaskStatusCounts: Record<string, number>;
}

interface ApiResponse<T> {
  status: string;
  message?: string;
  code: number;
  data: T;
}

@Injectable({ providedIn: 'root' })
export class ProjectOverviewService {
  private http = inject(HttpClient);
  private apiUrl = `${environment.project_managment_url}/v1/project/project-overview`;

  //for holding the shared state of pro-overview
  private projectOverview$ = new BehaviorSubject<ProjectOverviewData | null>(null);

  getOverviewStream(): Observable<ProjectOverviewData | null> {
    return this.projectOverview$.asObservable();
  }

  getProjectOverview(iProjectId: number): Observable<ProjectOverviewData> {
    return this.http
      .get<ApiResponse<ProjectOverviewData>>(this.apiUrl, {params: {iProjectId}})
      .pipe(
        map(res => res.data),
        tap(data => this.projectOverview$.next(data))
      );
  }

  //post req: this will save member to database and also showup in ui
  addTeamMember(iProjectId: any, newMember: TeamMember): Observable<ApiResponse<any>>{
    const addMemberUrl = `${environment.project_managment_url}/v1/project/add-team-member?bMock=0`;

    const payload = {
      iProjectId: Number(iProjectId),
      ...newMember
    }

    //send the project id + new member details
    return this.http.post<ApiResponse<any>>(
      addMemberUrl, 
      payload)
      .pipe(
      tap(() => {
        const currentData = this.projectOverview$.getValue();
        if(currentData && currentData.oTeam){
          const updatedMembers = [...currentData.oTeam.aMembers, newMember];

          this.projectOverview$.next({
            ...currentData,
            oTeam: {
              iMemberCount: updatedMembers.length,
              aMembers: updatedMembers
            }
          })
        }
      })
    )
  }

  getNewMember(iProjectId: any): Observable<any>{
    const newMemberUrl = `${environment.project_managment_url}/v1/project/team-members`;

    return this.http.get<ApiResponse<any>>(newMemberUrl, {
      params: {iProjectId: String(iProjectId)},

      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    }).pipe(
      map(res => res.data)
    );
  }
}
