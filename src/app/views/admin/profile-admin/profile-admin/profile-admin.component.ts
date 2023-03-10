import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, startWith, switchMap } from 'rxjs';
import { AutocompeteService } from 'src/app/services/autocompete.service';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent {
  myControl = new FormControl();
  options = [];
  filteredOptions: Observable<any>;


  constructor(private service: AutocompeteService) {
     this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(val => {
            return this.filter(val || '')
       })
    )
   }

  filter(val: string): Observable<any> {

    return this.service.getData()
     .pipe(
       map(response => response.filter((option:any) => {
         return option.name.toLowerCase().indexOf(val.toLowerCase()) === 0
       }))
     )
   }
}
