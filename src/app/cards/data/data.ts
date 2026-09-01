import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectOverviewData } from '../../app.service';
import { transPipe } from '../../trans-pipe';
import { DatePipe } from '@angular/common';

@Component({
  imports: [MatIconModule, transPipe, DatePipe],
  standalone: true,
  selector: 'app-data',
  styleUrl: './data.css',
  templateUrl: './data.html',
})
export class Data {
  @Input() stats!: ProjectOverviewData['oStats'];
}
