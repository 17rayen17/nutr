import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  ratincount = 0
  totalrating = 0
  finalrating!:any
  rating = new FormControl(0)
  getvalue() {
    this.ratincount++;
    this.totalrating += this.rating.value || 0;
    // console.log(this.rating.value)
    this.finalrating = (this.totalrating/this.ratincount).toFixed(2)
  }

  pofilename:any[]=[]
  pofilemail:any[]=[]
  getdataprofile() {
    this.crud.getnutr().subscribe(res => {
      this.pofilename=res.firstname
      this.pofilemail=res.email
      // console.log(this.pofilemail)
    })
  }

}
