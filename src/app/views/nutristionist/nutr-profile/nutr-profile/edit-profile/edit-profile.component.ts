import { Component, OnInit } from '@angular/core';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

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
