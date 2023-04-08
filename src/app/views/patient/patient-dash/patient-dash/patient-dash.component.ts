import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { Chart, registerables } from 'node_modules/chart.js'
Chart.register(...registerables);

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {

  constructor(private crud:CrudnutristionistService) { }

  ngOnInit(): void {
    this.renderchart()
    this.getdataprofile()


    document.querySelector('.btnsregime')?.addEventListener('click', () => {
      document.querySelector('.fiche')?.classList.toggle('active');
    });
  }

  ratincount = 0
  totalrating = 0
  finalrating!:any
  rating = new FormControl(0)
  getvalue() {
    this.ratincount++;
    this.totalrating += this.rating.value || 0;
    // console.log(this.rating.value)
    this.finalrating = (this.totalrating/this.ratincount).toFixed(2)
  }

  pofilename:any[]=[]
  pofilemail:any[]=[]
  getdataprofile() {
    this.crud.getnutr().subscribe((res : any) => {
      this.pofilename=res.firstname
      this.pofilemail=res.email
      // console.log(this.pofilemail)
    })
  }

  //stats
  cardsname= ['Ideal weight','Caloric intake','BMI','Basal metabolic rate']
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

  }

}
