import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  email = ''
  password = ''
  test = false
  errorMessage: any
  loginForm!: FormGroup

  dataR: any;

  constructor(private formb: FormBuilder,private auth : AuthloginService , private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formb.group({
      email: ['', Validators.compose([Validators.required,Validators.email])],
      password:['', Validators.compose([Validators.required,Validators.maxLength(8)])]
    })
  }
  login() :void {
    this.auth.login(this.email, this.password).subscribe(result => {
      this.dataR = result
      // console.log(this.dataR)
      this.auth.saveToken(this.dataR.access_token)

      this.router.navigate(['/admin'])
    }, err => {
      this.errorMessage='INVALID DATA'
      console.log('missing error', err)
    })
  }

}
