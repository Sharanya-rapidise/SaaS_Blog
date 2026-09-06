import { Component, EventEmitter, Output } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { list, List_Data , pro, Pro_Data} from '../../app.data';
@Component({
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatIconModule],
  standalone: true,
  selector: 'app-sidebar',
  styleUrl: './sidebar.css',
  templateUrl: './sidebar.html',
})
export class Sidebar {

  protected readonly lists: list[] = List_Data;
  protected readonly pros: pro[] = Pro_Data;

  private readonly openItems = new Set<string>();

  toggle(item: list): void{
    if(!item.children?.length) return;
    this.openItems.has(item.title) ? this.openItems.delete(item.title) : this.openItems.add(item.title);
  }

  isOpen(item: list): boolean{
    return this.openItems.has(item.title);
  }

}
