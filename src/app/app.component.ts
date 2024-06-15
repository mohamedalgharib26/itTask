import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexTitleSubtitle,
  ApexXAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgApexchartsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  series: ApexAxisChartSeries = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 50, 49, 60, 70, 91],
    },
  ];
  chart: ApexChart = {
    type: 'line',
    height: 350,
  };
  xaxis: ApexXAxis = {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
  };
  ChartTitle: ApexTitleSubtitle = {
    text: 'Basic Line Chart',
  };
  title = 'itTask';
}
