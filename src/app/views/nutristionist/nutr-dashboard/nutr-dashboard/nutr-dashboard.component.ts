import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddAppointmentsService } from 'src/app/services/add-appointments.service';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nutr-dashboard',
  templateUrl: './nutr-dashboard.component.html',
  styleUrls: ['./nutr-dashboard.component.css']
})
export class NutrDashboardComponent implements OnInit {

  constructor(private appoint: AddAppointmentsService,
    private crud: CrudnutristionistService,
    private toastr: ToastrService,
    private route : Router) { }

  ngOnInit(): void {
    this.toggleprofile()
    this.appClickoutside()

    //-------------------notificatio -----------------------------------
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

    //----------------------------------------------------------

    this.getapoint()
    this.getpatient()
    this.getassist()
    this.data

  }

  data: any[] = []
  getapoint() {
    const currentDate = new Date(); // current date
    const twentyFourHoursLater = new Date(currentDate.getTime() + (24 * 60 * 60 * 1000)); // date 24 hours later
    this.appoint.getrdv().subscribe((res: any) => {
      this.data = res.filter((appt: any) => {
        const apptStartDateTime = new Date(appt.start + ' ' + appt.end);
        return apptStartDateTime >= currentDate && apptStartDateTime <= twentyFourHoursLater;

      });
      console.log(this.data);

      //-------------toastr -----------------------
      const apptTimes = JSON.parse(JSON.stringify(this.data.map(appt => ({ start: appt.start, end: appt.end }))));
      const apptTimesString = apptTimes.map((appt : any) => `<li>${appt.start} - ${appt.end}</li>`).join('');
      // console.log(apptTimesString.length)
      if (apptTimesString.length != 0) {
        this.toastr.warning(
          `<div class="toast-message" >
            <p><strong>Upcoming Appointments:</strong></p>
            <ul>satrt at${apptTimesString}</ul>
          </div>`,
          'warning',
          { enableHtml: true, closeButton: true, timeOut: 3000 }
        );
      }
      //------------------------------------------------------


    });
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
  isoppend=false
  toggleprofile() {
    this.isoppend = !this.isoppend
    const flesh = document.querySelector('i.fa-regular.fa-circle-user.fa-2x')
    if (this.isoppend) {
      flesh?.classList.add('active')
    } else {
      flesh?.classList.remove('active')
    }
  }

  appClickoutside() {
    this.isoppend = false
    const flesh = document.querySelector('i.fa-regular.fa-circle-user.fa-2x')
    if (this.isoppend) {
      flesh?.classList.add('active')
    } else {
      flesh?.classList.remove('active')
    }
  }

  logout() {
    this.route.navigate(['/'])
  }

  click = false
  onclick() {
    if (this.click === false) {
      this.click = !this.click
    }
  }
}

