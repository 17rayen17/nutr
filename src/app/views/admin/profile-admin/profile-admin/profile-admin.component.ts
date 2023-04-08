import { Component, OnInit } from '@angular/core';
import { AuthloginService } from 'src/app/services/authlogin.service';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  constructor(private crud: CrudnutristionistService,
  private auth : AuthloginService) { }

ngOnInit(): void {
  this.getnutritionist()
  this.getassist()
  this.getme()
}

nutritionist: any[] = []
  getnutritionist() {
    this.crud.getallnutr().subscribe(res => {
      this.nutritionist=res
    })
  }
  assistant: any[] = []
  getassist() {
    this.crud.getassist().subscribe(res => {
      this.assistant=res
    })
  }
  firstname: any[] = []
  email:any[]=[]
  getme() {
    this.auth.getme().subscribe(res => {
      this.firstname = res.firstname
      this.email=res.email

    })
  }

}
