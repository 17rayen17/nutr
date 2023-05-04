import { Component } from '@angular/core';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-edti-profile',
  templateUrl: './edti-profile.component.html',
  styleUrls: ['./edti-profile.component.css']
})
export class EdtiProfileComponent {
  
  constructor(private auth: AuthloginService) { }
  ngOnInit(): void {
    this.getmyprofile()
  }
  profile:any[] = []
  getmyprofile() {
    this.auth.getme().subscribe(res => {
      if (Array.isArray(res)) {
        this.profile = res;
      } else {
        this.profile = [res];
      }

      console.log(typeof this.profile)
    })
  }

  save() {
    history.back()
  }

}
