import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';
import { StatistiquePatientComponent } from '../statistique-patient/statistique-patient.component';

@Component({
  selector: 'app-profile-patient',
  templateUrl: './profile-patient.component.html',
  styleUrls: ['./profile-patient.component.css']
})
export class ProfilePatientComponent implements OnInit {
  affiche = false
  id!: number
  events:any[]=[]
  constructor(private route: ActivatedRoute,
    private crud: CrudnutristionistService,
    private dialog: MatDialog) { }

  onchange() {
    if (this.affiche == false) {
      this.affiche = true
    } else {
      this.affiche = false
    }
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!;
      this.crud.getpatientbyid(this.id).subscribe(res => {
        this.events=[res]
      })
    });


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
  }

  openstat() {
    const dialogRef = this.dialog.open(StatistiquePatientComponent);
    dialogRef.afterClosed().subscribe(val => {

    })
  }

}
