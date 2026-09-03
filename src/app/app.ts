import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { Info } from './cards/info/info';
import { Tabs } from './cards/tabs/tabs';
import { About } from './cards/about/about';
import { Data } from './cards/data/data';
import { RecentTasks } from './cards/recent-tasks/recent-tasks';
import { Team } from './cards/team/team';
import { ProjectInfo } from './cards/projec-info/projec-info';
import { ProjectOverviewService, ProjectOverviewData } from './app.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    Sidebar, 
    Header, 
    Info, 
    Tabs, 
    About, 
    Data, 
    RecentTasks,
    Team,
    ProjectInfo
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('SaaS_Blog');
  protected readonly sidebarCollapsed = signal(false);

  onSidebarCollapsedChange(v: boolean){this.sidebarCollapsed.set(v);}

  private overviewService = inject(ProjectOverviewService);
  protected readonly overview = signal<ProjectOverviewData | null>(null);

  ngOnInit() {
    this.overviewService.getProjectOverview(2).subscribe(data => this.overview.set(data));
  }
}


