import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {
  id:any
  constructor(private auth: AuthloginService,
  private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.getme()
    this.route.paramMap.subscribe((param : ParamMap) => {
      this.id = +param.get('id')!;
    })
  }

  firstname:any[]=[]
  lastname:any[]=[]
  email:any[]=[]
  getme() {
    this.auth.getme().subscribe(res => {
      this.firstname=res.firstname
      this.lastname=res.lastname
      this.email=res.email
    })
  }

  logout() {
    sessionStorage.clear()
  }

}
