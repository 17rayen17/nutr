import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-assist-profile',
  templateUrl: './assist-profile.component.html',
  styleUrls: ['./assist-profile.component.css']
})
export class AssistProfileComponent implements OnInit {

  constructor(private crud: CrudnutristionistService) {

  }

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
}
