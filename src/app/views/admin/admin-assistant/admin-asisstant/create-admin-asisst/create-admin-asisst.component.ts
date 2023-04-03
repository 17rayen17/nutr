import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-create-admin-asisst',
  templateUrl: './create-admin-asisst.component.html',
  styleUrls: ['./create-admin-asisst.component.css']
})
export class CreateAdminAsisstComponent implements OnInit {
  loadform!: FormGroup;

  constructor(private form: FormBuilder,
    private createnutr: CrudnutristionistService,
    private dialog: MatDialogRef<CreateAdminAsisstComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.loadform = this.form.group({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      description: '',
      birth_date: '',
      password: '',
      password_confirmation:''
    })

    this.loadform.patchValue(this.data)
  }

  create() {
    if (this.loadform.valid) {
      if (this.data) {

        this.createnutr.updateAassistt(this.data.id,this.loadform.value).subscribe((res:any) => {
          alert('sussfully Update')
          this.dialog.close(true)
        },
          (err:any) => {
            alert('INVALID')
            console.error(err)
          }
        )

      } else {

        this.createnutr.createassist(this.loadform.value).subscribe((res:any) => {
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
