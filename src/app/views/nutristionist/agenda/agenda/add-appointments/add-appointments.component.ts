import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddAppointmentsService } from 'src/app/services/add-appointments.service';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { DatePipe } from '@angular/common';
import { el } from '@fullcalendar/core/internal-common';


interface ClickableElement extends HTMLElement {
  onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
}

@Component({
  selector: 'app-add-appointments',
  templateUrl: './add-appointments.component.html',
  styleUrls: ['./add-appointments.component.css'],
  providers: [DatePipe]
})
export class AddAppointmentsComponent implements OnInit {
  loaddate!: FormGroup
  endt = ''
  color: string = ''

  constructor(private dialog: MatDialogRef<AddAppointmentsComponent>,
    private crud: CrudnutristionistService,
    private form: FormBuilder,
    private addappoint: AddAppointmentsService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    //-------select color ----------
    const spans = document.querySelectorAll('.color div span') as NodeListOf<ClickableElement>;
    spans.forEach(span => {
      span.onclick = () => {
        spans.forEach(s => s.classList?.remove('choosed'))
        span.classList?.add("choosed")
        const c = span.getAttribute('data-color')!
        this.color = c
        console.log('color : ' + this.color)
        this.loaddate.controls['colors'].setValue(this.color);
      }
    })

    //---------FormsModule
    this.loaddate = this.form.group({
      title: '',
      name: '',
      start: '',
      end:'',
      colors: ''
    })



    this.getpatientname()

    // this.loaddate.patchValue(this.data)
    // console.log(this.data.view.currentStart)
    // console.log(this.data.event.id)

  }


  patient: any[] = []
  names: any[] = []
  phone: any[] = []
  selectedPatient:any
  getpatientname() {
    this.crud.getpatient().subscribe((res: any) => {
      this.patient = res

      for (let i = 0; i < this.patient.length; i++) {
        this.names.push(this.patient[i].firstname)
        this.phone.push(this.patient[i].phone)
      }






      this.loaddate = this.form.group({
        title: '',
        name: this.names[0],
        start: '',
        end: '',
        colors: ''
      });


      if (this.data && this.data.event) {
        this.loaddate.patchValue({
          title: this.data.event._def.title,
          name: this.data.event._def.extendedProps.name,
          start: this.data.event.startStr,
          end: this.data.event._def.extendedProps.endStr,
          colors: this.data.event.backgroundColor
        })
      }

      if (this.loaddate.value.name) {
        this.selectedPatient = this.patient[0].phone
      }

      this.patient.find(pat => {
        const valuename = this.loaddate.get('name')
        valuename?.valueChanges.subscribe((res : any) => {
          // console.log(res)
          if ((pat.firstname === res) === true) {
            this.selectedPatient=pat.phone
          }
        })
      })

    });
  }



  addappointment() {
    if (this.loaddate.valid) {

      if (this.data) {
        this.addappoint.updateRdv(this.data.event.id, this.loaddate.value).subscribe(res => {
          alert('successfully updated')
          this.dialog.close()
        })
      } else {
        this.addappoint.addrdv(this.loaddate.value).subscribe(res => {
          alert('successfully rdv'+this.loaddate.value.end)
          this.dialog.close()
        })
      }

    }
  }


  close() {
    this.dialog.close()
  }

  deleterdv() {
    this.addappoint.deleterdv(this.data.event.id).subscribe(res => {
      confirm('r u sure !!!')
      this.dialog.close()
    })
  }

}
