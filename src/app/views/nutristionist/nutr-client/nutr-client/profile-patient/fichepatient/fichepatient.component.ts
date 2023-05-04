import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fichepatient',
  templateUrl: './fichepatient.component.html',
  styleUrls: ['./fichepatient.component.css']
})
export class FichepatientComponent implements OnInit {
  patientId:any
  constructor(private location: Location) { }

  ngOnInit(): void {
    this.patientId = sessionStorage.getItem('patient id');
    console.log(this.patientId)
  }

  goback() {
    this.location.back();
  }
}
