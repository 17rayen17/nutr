import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.loadform = this.form.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required,Validators.email],
      phone: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      description: ['',Validators.required],
      birth_date: ['',Validators.required],
      role:this.role,
      password: ['',Validators.required],
      password_confirmation:['',Validators.required]
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
