import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-nutr-layout',
  templateUrl: './nutr-layout.component.html',
  styleUrls: ['./nutr-layout.component.css']
})
export class NutrLayoutComponent implements OnInit {
  id: any
  constructor(private crud: CrudnutristionistService,
  private route : ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getdatanutr()

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
    });


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
