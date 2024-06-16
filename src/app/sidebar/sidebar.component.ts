import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbarComponent,
    RouterOutlet,
    CommonModule,
  ],
})
export class SidebarComponent {
  constructor() {
    this.onResize();
  }
  @Output() collapsedChange = new EventEmitter<boolean>();
  isCollapsed = false;
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.isCollapsed = window.innerWidth < 550;
  }
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsedChange.emit(this.isCollapsed);
  }
}
