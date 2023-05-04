import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-assistant-layout',
  templateUrl: './assistant-layout.component.html',
  styleUrls: ['./assistant-layout.component.css']
})
export class AssistantLayoutComponent implements OnInit {
  id:any
  constructor(private crud: CrudnutristionistService,
  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getdata()
    this.route.paramMap.subscribe((param : ParamMap) => {
      this.id = +param.get('id')!;
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
