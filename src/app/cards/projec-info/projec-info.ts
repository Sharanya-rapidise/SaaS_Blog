import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { proinfo, P_INFO } from '../../app.data';
import { ProjectOverviewData } from '../../app.service';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  imports: [MatIconModule, DatePipe, CurrencyPipe],
  standalone: true,
  selector: 'app-project-info',
  styleUrl: './projec-info.css',
  templateUrl: './projec-info.html',
})
export class ProjectInfo {
  @Input() info!: ProjectOverviewData['oProjectInfo'];
  protected readonly pro : proinfo[] = P_INFO;
}
