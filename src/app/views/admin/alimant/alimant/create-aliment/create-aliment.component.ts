import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-create-aliment',
  templateUrl: './create-aliment.component.html',
  styleUrls: ['./create-aliment.component.css']
})
export class CreateAlimentComponent {
  loadform!: FormGroup;

  constructor(private form: FormBuilder,
    private createnutr: CrudnutristionistService,
    private dialog: MatDialogRef<CreateAlimentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.loadform = this.form.group({
      famille: ['',Validators.required],
      nom: ['',Validators.required],
      calorie: ['',Validators.required],
      proteine: ['',Validators.required],
      glucide: ['',Validators.required],
      lipide: ['',Validators.required],
      quantity: ['',Validators.required]
    })

    this.loadform.patchValue(this.data)
  }

  create() {
    if (this.loadform.valid) {
      if (this.data) {

        this.createnutr.updateAliment(this.data.id,this.loadform.value).subscribe((res:any) => {
          alert('sussfully Update')
          this.dialog.close(true)
        },
          (err:any) => {
            alert('INVALID')
            console.error(err)
          }
        )

      } else {

        this.createnutr.createAliment(this.loadform.value).subscribe((res:any) => {
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
