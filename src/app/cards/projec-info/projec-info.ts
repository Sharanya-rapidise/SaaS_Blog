import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { proinfo, P_INFO } from '../../app.data';
@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-project-info',
  styleUrl: './projec-info.css',
  templateUrl: './projec-info.html',
})
export class ProjectInfo {
  protected readonly pro : proinfo[] = P_INFO;
}
