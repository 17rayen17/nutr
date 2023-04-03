import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  constructor(private crud : CrudnutristionistService) { }

ngOnInit(): void {
  this.getnutritionist()
  this.getassist()
}

nutritionist: any[] = []
  getnutritionist() {
    this.crud.getnutr().subscribe(res => {
      this.nutritionist=res
    })
  }
  assistant: any[] = []
  getassist() {
    this.crud.getassist().subscribe(res => {
      this.assistant=res
    })
  }

}
