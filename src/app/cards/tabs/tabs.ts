import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectOverviewData } from '../../app.service';

@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-tabs',
  styleUrl: './tabs.css',
  templateUrl: './tabs.html',
})
export class Tabs {
  @Input() counts!: ProjectOverviewData['oTabCounts'];

  activeTab: string = 'overview';

  selectedTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
