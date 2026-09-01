import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ProjectOverviewData } from '../../app.service';
import { DatePipe } from '@angular/common';
import { transPipe } from '../../trans-pipe';

@Component({
  imports: [MatIconModule, DatePipe, transPipe],
  standalone: true,
  selector: 'app-info',
  styleUrl: './info.css',
  templateUrl: './info.html',
})
export class Info {
  @Input() header!: ProjectOverviewData['oHeader'];
}
