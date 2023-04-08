import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
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



  constructor(private formb: FormBuilder,
    private auth: AuthloginService,
    private router: Router,
    private _snackBar: MatSnackBar) {
    sessionStorage.clear();

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl(null ,[Validators.required,Validators.email]),
      'password':new FormControl(null, Validators.required)
    })

  }
  dataR: any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 1;
  login() {
    if (this.loginForm.valid) {
      this.auth.logincode(this.loginForm.value).subscribe(res => {
        this.dataR = res
        // admin login ---------------------------
          if (this.dataR.user.role == "admin") {
            sessionStorage.setItem('token', this.dataR.access_token)
            sessionStorage.setItem('role', this.dataR.user.role)
            this._snackBar.open('successfully admin login', 'Done', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
            this.router.navigate(['/admin'])

            // nutritionist login ---------------------------
          } else if (this.dataR.user.role == "nutritionist") {
            sessionStorage.setItem('token', this.dataR.access_token)
            sessionStorage.setItem('role', this.dataR.user.role)
            this._snackBar.open('successfully nutritionist login', 'Done', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
            this.router.navigate(['/nutritionist'])

            // assistant login ---------------------------
          } else if (this.dataR.user.role == "assistant") {
            sessionStorage.setItem('token', this.dataR.access_token);
            sessionStorage.setItem('role', this.dataR.user.role);
            this._snackBar.open('successfully assistant login', 'Done', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
            this.router.navigate(['/assistant'])
            // patient login ---------------------------
          } else if (this.dataR.user.role == "patient") {
            sessionStorage.setItem('token', this.dataR.access_token);
            sessionStorage.setItem('role', this.dataR.user.role);
            this._snackBar.open('successfully assistant login', 'Done', {
              horizontalPosition: this.horizontalPosition,
              verticalPosition: this.verticalPosition,
              duration: this.durationInSeconds * 1000,
            });
            this.router.navigate(['/patient'])
          }


      })
    }

  }

}
