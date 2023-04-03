import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
  creatform!:FormGroup
  constructor(private form: FormBuilder,
    private patient: CrudnutristionistService,
    private dialog: MatDialogRef<AddClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.creatform = new FormGroup({
      "name": new FormControl(null,Validators.required),
      "email":new FormControl(null, [Validators.required, Validators.email]),
      "birthday": new FormControl(null,Validators.required),
      "Gender": new FormControl('Male'),
      "Language": new FormControl('English'),
      "phone": new FormControl(null,Validators.required),
      "address": new FormControl(null,Validators.required),
      "medicalCondition": new FormControl(null),
      "Caloric": new FormControl(null),
      "Idealweight": new FormControl(null),
      "Weight": new FormControl(null),
      "Height": new FormControl(null),
      "Waist": new FormControl(null),
      "Physical_activity":new FormControl('1'),
    })
    this.creatform.patchValue(this.data)

  }

  onaddCilent() {
    if (this.creatform.valid) {
      if (this.data) {

        this.patient.updatepatient(this.data.id,this.creatform.value).subscribe(res => {
          alert('successfully update')
          this.dialog.close()
        }, err => {
          alert('INVALID')
          console.log(err)
        })

      } else {
        this.patient.createpatient(this.creatform.value).subscribe(res => {
          alert('successfully create')
          this.dialog.close()
        }, err => {
          alert('INVALID')
          console.log(err)
        })
      }

    }
  }

}
