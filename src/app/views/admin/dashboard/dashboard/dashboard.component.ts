import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  istableau = true

  FirstName = ''
  LastName = ''
  Email = ''
  phone = ''
  birth_date !: Date;
  role = 'nutritionist'
  password = ''
  tel = ''
  id = ''
  loginForm!: FormGroup

  constructor(private formb: FormBuilder, private auth: AuthloginService) {

  }

  ngOnInit(): void {
    this.loginForm = this.formb.group({
      FirstName: ['', Validators.compose([Validators.required])],
      LastName: ['', Validators.compose([Validators.required])],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      birth_date: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      password:['', Validators.compose([Validators.required,Validators.maxLength(8)])]
    })


  }

  create() {
    this.auth.create(this.Email, this.password, this.FirstName,
      this.LastName, this.phone, this.birth_date, this.role).subscribe(result => {
        console.log('success create')
      }, err => {
          window.alert('failled create')
          console.log('MISSING ERROR',err)

      })
  }
  datat!: any

  getdata() {
    this.auth.getData().subscribe((data:any)=>console.log(data))
  }



}
