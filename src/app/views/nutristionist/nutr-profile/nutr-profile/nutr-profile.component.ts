import { Component, OnInit } from '@angular/core';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-nutr-profile',
  templateUrl: './nutr-profile.component.html',
  styleUrls: ['./nutr-profile.component.css']
})
export class NutrProfileComponent implements OnInit {

  constructor(private crud:CrudnutristionistService) { }

  ngOnInit(): void {
    this.getdataprofile()
  }

  pofilename:any[]=[]
  pofilemail:any[]=[]
  getdataprofile() {
    this.crud.getnutr().subscribe(res => {
      this.pofilename=res.firstname
      this.pofilemail=res.email
      console.log(this.pofilemail)
    })
  }

}
