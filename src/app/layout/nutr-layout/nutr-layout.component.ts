import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-nutr-layout',
  templateUrl: './nutr-layout.component.html',
  styleUrls: ['./nutr-layout.component.css']
})
export class NutrLayoutComponent implements OnInit {

  constructor(private crud:CrudnutristionistService) {

  }
  ngOnInit(): void {
    this.getdatanutr()
  }

  firstname:any[]=[]
  lastname:any[]=[]
  email:any[]=[]
  getdatanutr() {
    this.crud.getnutr().subscribe(res => {
      this.firstname=res.firstname
      this.lastname=res.lastname
      this.email=res.email
    })
  }

  logout() { }
}
