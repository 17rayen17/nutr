import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-create-nutr',
  templateUrl: './create-nutr.component.html',
  styleUrls: ['./create-nutr.component.css']
})
export class CreateNutrComponent implements OnInit {
  loadform!: FormGroup;
  role='nutritionist'
  constructor(private form: FormBuilder,
    private createnutr: CrudnutristionistService,
    private dialog: MatDialogRef<CreateNutrComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.loadform =  new FormGroup({
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

    this.loadform.patchValue(this.data)
  }

  create() {
    if (this.loadform.valid) {
      if (this.data) {

        this.createnutr.updatenut(this.data.id,this.loadform.value).subscribe((res:any) => {
          alert('sussfully Update')
          this.dialog.close(true)
        },
          (err:any) => {
            alert('INVALID')
            console.error(err)
          }
        )

      } else {

        this.createnutr.create(this.loadform.value).subscribe((res:any) => {
          alert('sussfully create')
          this.dialog.close(true)
        },
          (err:any) => {
            alert('INVALID')
            console.error(err)
          }
        )

      }

    }
  }

}
