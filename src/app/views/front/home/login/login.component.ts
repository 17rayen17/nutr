import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthloginService } from 'src/app/services/authlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthloginService]
})
export class LoginComponent implements OnInit {

  errorMessage: any
  loginForm!: FormGroup



  constructor(private formb: FormBuilder, private auth: AuthloginService, private router: Router) {
    sessionStorage.clear();

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null ,[Validators.required,Validators.email]),
      'password':new FormControl(null, Validators.required)
    })

  }
  dataR: any;

  login() {
    if (this.loginForm.valid) {
      this.auth.logincode(this.loginForm.value).subscribe(res => {
        this.dataR = res
          if (this.dataR.user.role == "admin") {
            sessionStorage.setItem('token', this.dataR.access_token)
            sessionStorage.setItem('role', this.dataR.user.role)
            alert('successfully admin login')
            this.router.navigate(['/admin'])

          } else if (this.dataR.user.role == "nutritionist") {
            sessionStorage.setItem('token', this.dataR.access_token)
            sessionStorage.setItem('role', this.dataR.user.role)
            this.router.navigate(['/nutritionist'])
            alert('successfully nutritionist login')
          }


      })
    }

  }

}
