import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-tabs',
  styleUrl: './tabs.css',
  templateUrl: './tabs.html',
})
export class Tabs {
  activeTab: string = 'overview';

  selectedTab(tabId: string): void {
    this.activeTab = tabId;
  }
}
