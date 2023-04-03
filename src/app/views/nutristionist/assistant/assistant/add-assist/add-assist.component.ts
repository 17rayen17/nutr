import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-add-assist',
  templateUrl: './add-assist.component.html',
  styleUrls: ['./add-assist.component.css']
})
export class AddAssistComponent implements OnInit {
  loadform!: FormGroup;
  role='assistant'
  constructor(private form: FormBuilder,
    private dialog: MatDialogRef<AddAssistComponent>,
    private crud: CrudnutristionistService,
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
      password_confirmation: '',
      role:this.role
    })

    this.loadform.patchValue(this.data)
  }

  createassistant() {
    if (this.loadform.valid) {

      if (this.data) {
        this.crud.updateAassistt(this.data.id,this.loadform.value).subscribe(res => {
          alert('successfly assistant Updated')
          this.dialog.close(true)
          console.log(res)
        }, err => {
          alert('INVALID')
          console.log(err)
        })

      } else {
        this.crud.createassist(this.loadform.value).subscribe(res => {
          alert('successfly assistant created')
          this.dialog.close(true)
          console.log(res)
        }, err => {
          alert('INVALID')
          console.log(err)
        })
      }
    }
  }


}
