import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './layout/sidebar/sidebar';
import { Header } from './layout/header/header';
import { Info } from './cards/info/info';
import { Tabs } from './cards/tabs/tabs';
import { About } from './cards/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Header, Info, Tabs, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SaaS_Blog');
}
