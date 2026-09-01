import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectOverviewData } from '../../app.service';
@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  @Input() about!: ProjectOverviewData['oAbout'];
}
