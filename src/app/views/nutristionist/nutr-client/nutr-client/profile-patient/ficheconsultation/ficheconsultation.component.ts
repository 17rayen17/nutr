import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ficheconsultation',
  templateUrl: './ficheconsultation.component.html',
  styleUrls: ['./ficheconsultation.component.css']
})
export class FicheconsultationComponent {

  constructor(private location: Location) { }
  
  goback() {
    this.location.back();
  }

}
