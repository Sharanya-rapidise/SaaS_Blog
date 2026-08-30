import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { rlist, Tasks } from '../../app.data';

@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-recent-tasks',
  styleUrl: './recent-tasks.css',
  templateUrl: './recent-tasks.html',
})
export class RecentTasks {
  protected readonly li: rlist[] = Tasks;
}
