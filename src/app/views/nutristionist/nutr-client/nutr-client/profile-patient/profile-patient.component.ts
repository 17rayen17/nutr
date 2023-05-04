import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { StatistiquePatientComponent } from '../statistique-patient/statistique-patient.component';
import { FormControl, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AgendaComponent } from '../../../agenda/agenda/agenda.component';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css'],
  providers:[DatePipe]
})
export class ProfilePatientComponent implements OnInit {
  afficheFichePatient = false
  afficheConsultation = false
  id!: number
  events: any[] = []
  noteform!: FormGroup
  date: Date = new Date()
  formattedDate!: string;

  constructor(private route: ActivatedRoute,
    private crud: CrudnutristionistService,
    private datePipe: DatePipe,
    private dialog: MatDialog) { }

  openFichePatient(event : Event) {
      console.log(event.target)
    if (this.afficheFichePatient == false || this.afficheConsultation == false) {
      this.afficheFichePatient = true
      this.afficheConsultation = false
    } else {
      this.afficheFichePatient = false
      this.afficheConsultation = true
    }
    }




  ngOnInit(): void {
    this.formattedDate = this.datePipe.transform(this.date, 'EEEE, d MMMM yyyy', 'fr') ?? '';
    this.getnotes()


    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.crud.getpatientbyid(this.id).subscribe(res => {
        this.events=[res]
      })
    });
    sessionStorage.setItem('patient id', this.id.toString())



    const btns: NodeListOf<HTMLDivElement> = document.querySelectorAll(".controls div");
    const fchs: NodeListOf<HTMLDivElement> = document.querySelectorAll(".fiche");


    btns.forEach((btn: HTMLDivElement) => {
    btn.onclick = function () {
    btns.forEach((btn: HTMLDivElement) => btn.classList.remove("active"));
      btn.classList.add("active");

      const ficheId = btn.getAttribute("data-fiche");
      if (ficheId != null) {
        const ficheElement = document.getElementById(ficheId);

      if (ficheElement) {
          fchs.forEach(f => f.classList.remove("active"));
          ficheElement.classList.add("active");
      }
    }

  };
    });

    this.noteform = new FormGroup({
      "note": new FormControl(null),
      "PatientId":new FormControl(this.id)
    })
  }

  openstat() {
    const dialogRef = this.dialog.open(StatistiquePatientComponent);
    dialogRef.afterClosed().subscribe(val => {

    })
  }
//----------- NOTE ------------
  opnote=false
  openNote() {
    this.opnote = !this.opnote
  }

  savenote() {
    this.crud.createnote(this.noteform.value).subscribe(res => {
      this.getnotes()
    })
  }


  notes:any[]= []
  getnotes() {
    this.crud.getnote().subscribe(res => {
      this.notes = [];
        res.filter((item : any) => {
          if (item.PatientId == this.id) {
            // console.log(item)
            this.notes.push(item)
            console.log(this.notes)
          }
        })
    })
  }

  deleteNote(id : number) {
    this.crud.deletenote(id).subscribe(res => {
      this.getnotes()
    })
  }

//--------------------------------------------

}
