import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-statistique',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  ngOnInit() {
    this.createUsersChart();
    this.createEventsChart();
  }

  createUsersChart() {
    const ctx = document.getElementById('usersChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Nouveaux utilisateurs',
          data: [65, 59, 80, 81, 56, 55],
          borderColor: '#3498DB',
          tension: 0.1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Croissance des utilisateurs'
          }
        }
      }
    });
  }

  createEventsChart() {
    const ctx = document.getElementById('eventsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin'],
        datasets: [{
          label: 'Événements organisés',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: '#2ecc71'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Événements par mois'
          }
        }
      }
    });
  }
}
