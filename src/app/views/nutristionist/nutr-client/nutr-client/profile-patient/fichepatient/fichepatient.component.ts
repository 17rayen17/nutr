import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-fichepatient',
  templateUrl: './fichepatient.component.html',
  styleUrls: ['./fichepatient.component.css']
})
export class FichepatientComponent {

  constructor(private location: Location) { }

  goback() {
    this.location.back();
  }
}
