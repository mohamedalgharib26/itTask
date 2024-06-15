import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../components/card/card.component';
import { ButtonComponent } from '../components/button/button.component';
import {
  ApexGrid,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexTitleSubtitle,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexPlotOptions,
  ApexStroke,
  ApexFill,
  ApexDataLabels,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  stroke: ApexStroke;
  labels: string[];
  colors: string[];
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
};

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [CardComponent, ButtonComponent, NgApexchartsModule],
})
export class HomeComponent implements OnInit {
  items: any;

  public chart1: Partial<ChartOptions> | any;
  public chart2: Partial<ChartOptions> | any;
  public chartOptions: Partial<ChartOptions> | any;
  public chartOptions4: Partial<ChartOptions> | any;
  public chartOptions5: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions5 = {
      series: [
        {
          name: 'Males',
          data: [
            0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1,
            4.2, 4.5, 3.9, 3.5, 3,
          ],
        },
        {
          name: 'Females',
          data: [
            -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
            -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
          ],
        },
      ],
      chart: {
        type: 'bar',
        height: 440,
        stacked: true,
      },
      colors: ['#008FFB', '#FF4560'],
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '80%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },

      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      yaxis: {
        min: -5,
        max: 5,
        title: {
          // text: 'Age',
        },
      },
      tooltip: {
        shared: false,
        x: {
          formatter: function (val: any) {
            return val.toString();
          },
        },
        y: {
          formatter: function (val: any) {
            return Math.abs(val) + '%';
          },
        },
      },
      xaxis: {
        categories: [
          '85+',
          '80-84',
          '75-79',
          '70-74',
          '65-69',
          '60-64',
          '55-59',
          '50-54',
          '45-49',
          '40-44',
          '35-39',
          '30-34',
          '25-29',
          '20-24',
          '15-19',
          '10-14',
          '5-9',
          '0-4',
        ],
        title: {
          text: 'Percent',
        },
        labels: {
          formatter: function (val: any) {
            return Math.abs(Math.round(parseInt(val, 10))) + '%';
          },
        },
      },
    };
    this.chartOptions4 = {
      series: [44, 55, 67, 83],
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w: any) {
                return '249';
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };
    this.chart1 = {
      series: [67],
      chart: {
        height: 280,
        type: 'radialBar',
      },
      colors: ['#20E647'],
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: '#333',
            startAngle: -90,
            endAngle: 90,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              fontSize: '30px',
              show: true,
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          gradientToColors: ['#87D4F9'],
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: 'butt',
      },
      labels: ['Progress'],
    };
    this.chart2 = {
      series: [
        {
          name: 'Series 1',
          data: [45, 52, 38, 45, 19, 23, 2],
        },
      ],
      chart: {
        height: 280,
        type: 'area',
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        categories: [
          '01 Jan',
          '02 Jan',
          '03 Jan',
          '04 Jan',
          '05 Jan',
          '06 Jan',
          '07 Jan',
        ],
      },
    };
    const colorPalette = [
      '#FF4560',
      '#00E396',
      '#008FFB',
      '#775DD0',
      '#FEB019',
    ];
    this.chartOptions = {
      series: [21, 23, 19, 14, 6],
      chart: {
        type: 'donut',
        width: '100%',
        height: 400,
      },
      dataLabels: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%',
          },
          offsetY: 20,
        },
        stroke: {
          colors: undefined,
        },
      },
      colors: colorPalette,
      title: {
        text: 'Department Sales',
        style: {
          fontSize: '18px',
        },
      },
      labels: [
        'Clothing',
        'Food Products',
        'Electronics',
        'Kitchen Utility',
        'Gardening',
      ],
      legend: {
        position: 'left',
        offsetY: 80,
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value: any) {
            return value + '%';
          },
        },
        marker: {
          show: true,
        },
        fillSeriesColor: true,
        theme: 'light',
      },
    };
  }
  ngOnInit(): void {
    this.items = [
      {
        img: '/assets/icons/sales.svg',
        amount: 150,
        name: 'Sales',
      },
      {
        img: '/assets/icons/users.svg',
        amount: 200,
        name: 'Customers',
      },
      {
        img: '/assets/icons/milk.svg',
        amount: 260,
        name: 'Products',
      },
      {
        img: '/assets/icons/money.svg',
        amount: 950,
        name: 'Revenue',
      },
    ];
  }
}
