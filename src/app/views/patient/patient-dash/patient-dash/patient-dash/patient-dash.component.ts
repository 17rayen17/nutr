import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { Chart, registerables } from 'node_modules/chart.js'
import { AuthloginService } from 'src/app/services/authlogin.service';
import { ActivatedRoute } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-patient-dash',
  templateUrl: './patient-dash.component.html',
  styleUrls: ['./patient-dash.component.css']
})
export class PatientDashComponent implements OnInit {
  id:any
  constructor(private auth: AuthloginService,
  private crud: CrudnutristionistService,
  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')!
    })
    this.renderchart()
    this.getdataprofile()
    this.getregime()


    document.querySelector('.btnsregime')?.addEventListener('click', () => {
      document.querySelector('.fiche')?.classList.toggle('active');
    });

  }

//------ fiche regime data ----------
  regime: any[] = []
  getregime() {
    this.crud.getregime().subscribe(res => {

      res.filter((item:any) => {
        if (item.patientId === this.id) {
          this.regime.push(item)
        }
      })
      console.log(this.regime)

    })
}

//---- profile data --------------------------

  pofilefirstname:any[]=[]
  pofilelasttname:any[]=[]
  pofilemail:any[]=[]
  getdataprofile() {
    this.auth.getme().subscribe((res : any) => {
      this.pofilefirstname=res.firstname
      this.pofilelasttname=res.lastname
      this.pofilemail=res.email
      // console.log(this.pofilemail)
    })
  }


  //-------------------------stats
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
