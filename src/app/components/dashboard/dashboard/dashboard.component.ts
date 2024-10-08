import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { provideCharts, withDefaultRegisterables } from 'ng2-charts';


@Component({
  templateUrl: './dashboard.component.html',
  styles: ``,
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 10
          }
        }
      }
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Done'], ['Sales'], 'Mail Sales'],
    datasets: [
      {
        data: [300, 500, 100],
      },
    ],
  };
  public pieChartType: ChartType = 'pie';

  totalSales = 1500; // Ejemplo de datos
  totalUsers = 300; // Ejemplo de datos
  totalProducts = 50; // Ejemplo de datos

  userDistributionChartData = [
    { data: [50, 100, 150], label: 'Usuarios Activos' },
    { data: [30, 70, 100], label: 'Usuarios Inactivos' }
  ];

  userDistributionChartLabels = ['Grupo A', 'Grupo B', 'Grupo C'];

  // Datos para el gráfico circular
//   circularChartData = {
//     labels: ['Grupo 1', 'Grupo 2', 'Grupo 3'], // Etiquetas para el gráfico
//     datasets: [
//         {
//             data: [300, 150, 100], // Datos para el gráfico
//             label: 'Distribución Circular', // Etiqueta para el dataset
//             backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Colores para cada segmento
//         }
//     ]
// };

chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
      legend: {
          display: true,
          position: 'top',
      },
  },
};
}