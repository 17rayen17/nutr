import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);
@Component({
  selector: 'app-statistique-patient',
  templateUrl: './statistique-patient.component.html',
  styleUrls: ['./statistique-patient.component.css']
})
export class StatistiquePatientComponent implements OnInit {
  cardsname= ['Ideal weight','Caloric intake','BMI','Basal metabolic rate']
  constructor( private dialog: MatDialogRef<StatistiquePatientComponent>) { }

  ngOnInit(): void {
    this.renderchart()
  }

  renderchart() {
    new Chart("piechart", {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'HIDE STATICS',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 3,
          borderColor: '#688268',
          tension: 0.4,
          fill: true,

        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  close() {
    this.dialog.close()
  }

}
