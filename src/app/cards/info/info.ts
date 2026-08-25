import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  standalone: true,
  selector: 'app-info',
  styleUrl: './info.css',
  templateUrl: './info.html',
})
export class Info {}
