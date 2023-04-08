import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  creatform!: FormGroup
  role='patient'
  constructor(private form: FormBuilder,
    private patient: CrudnutristionistService,
    private dialog: MatDialogRef<AddClientComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.creatform = new FormGroup({
      "firstname": new FormControl(null,Validators.required),
      "lastname": new FormControl(null,Validators.required),
      "email":new FormControl(null, [Validators.required, Validators.email]),
      "phone": new FormControl(null,Validators.required),
      "address": new FormControl(null,Validators.required),
      "city": new FormControl(null),
      "description": new FormControl(null),
      "birth_date": new FormControl(null),
      "password": new FormControl(null),
      "password_confirmation": new FormControl(null),
      "role":new FormControl(this.role)
    })
    this.creatform.patchValue(this.data)

  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 1.5;
  onaddCilent() {
    if (this.creatform.valid) {
      if (this.data) {

        this.patient.updatepatient(this.data.id,this.creatform.value).subscribe(res => {
          this._snackBar.open('successfully Update', 'Done', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
          this.dialog.close()
        }, err => {
          alert('INVALID')
          console.log(err)
        })

      } else {
        this.patient.createpatient(this.creatform.value).subscribe(res => {
          this._snackBar.open('successfully Created Patient', 'Done', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000
          });
          this.dialog.close()
        }, err => {
          alert('INVALID')
          console.log(err)
        })
      }

    }
  }

}
