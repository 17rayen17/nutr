import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-patient-layout',
  templateUrl: './patient-layout.component.html',
  styleUrls: ['./patient-layout.component.css']
})
export class PatientLayoutComponent implements OnInit {
  id!:any
  constructor(private crud: CrudnutristionistService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getdata()
    this.route.paramMap.subscribe((params : ParamMap) => {
      this.id = +params.get('id')!;
    })
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
