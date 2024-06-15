import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    NgApexchartsModule,
    SidebarComponent,
    NavbarComponent,
    ButtonComponent,
  ],
})
export class AppComponent {
  isSidebarCollapsed = false;

  onSidebarCollapse(collapsed: boolean) {
    this.isSidebarCollapsed = collapsed;
  }

  title = 'itTask';
}
