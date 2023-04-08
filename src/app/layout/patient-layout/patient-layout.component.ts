import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent implements OnInit {

  constructor(private crud: CrudnutristionistService) { }

  ngOnInit(): void {
    this.getdata()
  }
  firstname:any[]=[]
  lastname:any[]=[]
  email:any[]=[]
  getdata() {
    this.crud.getnutr().subscribe(res => {
      this.firstname=res.firstname
      this.lastname=res.lastname
      this.email=res.email
    })
  }

  logout() { }
}