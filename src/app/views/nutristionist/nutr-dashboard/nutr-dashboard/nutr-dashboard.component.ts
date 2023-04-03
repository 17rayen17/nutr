import { Component, OnInit } from '@angular/core';
import { AddAppointmentsService } from 'src/app/services/add-appointments.service';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-nutr-dashboard',
  templateUrl: './nutr-dashboard.component.html',
  styleUrls: ['./nutr-dashboard.component.css']
})
export class NutrDashboardComponent implements OnInit {
  constructor(private appoint:AddAppointmentsService,private crud :CrudnutristionistService){}

  ngOnInit(): void {
    const holdBtn = document.getElementById("holdBtn") as HTMLButtonElement;
    const holdList = document.getElementById("holdList") as HTMLElement;
    holdBtn.onclick = function () {
      holdList?.classList.toggle("hide");
    };

    const notifbtn = document.querySelector('.notifbtn') as HTMLButtonElement;
    const listnotif = document.querySelector('.listnotif') as HTMLElement;
    notifbtn.onclick = function () {
      listnotif?.classList.toggle("d-none");
    }
    document.addEventListener('click', function(event) {
      // Check if the clicked element is the notifbtn or a child of listnotif
      if ((event.target as Element).closest('.notifbtn') || (event.target as Element).closest('.listnotif')) {
        return;
      }

      // Otherwise, hide the notification list
      listnotif?.classList.add('d-none');
    });
    this.getapoint()
    this.getpatient()
    this.getassist()

  }

  data:any[] = []
  getapoint() {
    this.appoint.getrdv().subscribe((res : any) => {
      this.data = res
      console.log(this.data)
    })
  }

  patients:any[]=[]
  getpatient() {
    this.crud.getpatient().subscribe(res => {
      this.patients=res
    })
  }

  assistant: any[] = []
  getassist() {
    this.crud.getassist().subscribe(res => {
      this.assistant=res
    })
  }
}

