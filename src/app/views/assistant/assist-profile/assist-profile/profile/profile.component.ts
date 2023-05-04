import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
