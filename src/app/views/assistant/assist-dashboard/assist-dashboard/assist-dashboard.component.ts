import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assist-dashboard',
  templateUrl: './assist-dashboard.component.html',
  styleUrls: ['./assist-dashboard.component.css']
})
export class AssistDashboardComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.toggleprofile()
    this.appClickoutside()
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
    sessionStorage.clear()
    this.route.navigate(['/'])
  }
}
