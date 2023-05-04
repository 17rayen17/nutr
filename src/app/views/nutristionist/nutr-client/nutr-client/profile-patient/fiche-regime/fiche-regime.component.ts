import { query } from '@angular/animations';
import { AfterContentInit, ChangeDetectorRef, Component,OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { CrudnutristionistService } from 'src/app/services/crudnutristionist.service';

@Component({
  selector: 'app-fiche-regime',
  templateUrl: './fiche-regime.component.html',
  styleUrls: ['./fiche-regime.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FicheRegimeComponent implements OnInit, AfterContentInit  {
  proteineper = 39
  glucideper = 40
  lipideper = 21

  search = new FormControl(null)
  aliments: any[] = []
  food: any[] = []

  patientid!:any

  filteredOptions!: Observable<any>;
  constructor(private crud: CrudnutristionistService,
    private cdr: ChangeDetectorRef) {
    // this.setCurrentDay(this.count[0])
  }

  ngOnInit(): void {
    this.getaliment()
    this.getfood()
    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || ''))
      );
      this.onadd()
      this.saveregime
      this.setCurrentDay
    this.patientid = sessionStorage.getItem('patient id')


    }
  ngAfterContentInit(): void {
    // console.log("checked")
  }





  getaliment() {
    this.crud.getAliment().subscribe(res => {
      this.aliments = res
      this.getfood()
    })
  }

  dailyTotal: any[] = []
  total:any[] = []
  getfood() {
    this.crud.getregime().subscribe(res => {
      this.food = res
      this.daily()
      this.cdr.detectChanges();
      for (let i = 0; i < this.food.length; i++) {
        let nb = res[i].days
        this.setCurrentDay(this.count[nb - 1])
        this.cdr.detectChanges();
      }
    })
  }
  daily() {
    this.food.filter(item => {
      if (item.patientId == this.patientid) {
        this.total.push(item)

      }
    })
     // ------------- calc needs dailyTota--------------------------------
    const caloriePerDay: { [key: string]: number } = this.total.reduce<{ [key: string]: number }>((acc, curr) => {
      const day = curr.days;
      acc[day] = (acc[day] || 0) + +curr.calorie;
      return acc;
    }, {});
    const proteinePerDay: { [key: string]: number } = this.total.reduce<{ [key: string]: number }>((acc, curr) => {
      const day = curr.days;
      acc[day] = (acc[day] || 0) + +curr.proteine;
      return acc;
    }, {});
    const glucidePerDay: { [key: string]: number } = this.total.reduce<{ [key: string]: number }>((acc, curr) => {
      const day = curr.days;
      acc[day] = (acc[day] || 0) + +curr.glucide;
      return acc;
    }, {});
    const lipidePerDay: { [key: string]: number } = this.total.reduce<{ [key: string]: number }>((acc, curr) => {
      const day = curr.days;
      acc[day] = (acc[day] || 0) + +curr.lipide;
      return acc;
    }, {});
    const quantityPerDay: { [key: string]: number } = this.total.reduce<{ [key: string]: number }>((acc, curr) => {
      const day = curr.days;
      acc[day] = (acc[day] || 0) + +curr.quantity;
      return acc;
    }, {});

    this.dailyTotal.push({
      caloriePerDay,
      proteinePerDay,
      glucidePerDay,
      lipidePerDay,
      quantityPerDay,
    });


    // -------------------------------------------------------------------

  }

  private _filter(value: any): any[] {
    const filterValue = value.toLowerCase();
    return this.aliments.filter(option => option.nom.toLowerCase().includes(filterValue) ||
      option.famille.toLowerCase().includes(filterValue));
  }

  onadd() {
    const res = this.aliments.find(res => res.nom === this.search.value);
    if (res) {
      const { id, created_at, updated_at, ...rest } = res;
      const patientId = sessionStorage.getItem('patient id') // id de patient
      const newFoodItem = { ...rest, days: this.currentDay,patientId:patientId};
      this.food.push(newFoodItem);
      this.crud.createregime(newFoodItem).subscribe(res => {
        this.getfood()
        this.setCurrentDay(this.currentDay);
      });
      this.daily()
    }
  }

  saveregime() {
    this.food.forEach(f => {
      this.crud.createregime(f).subscribe(res => {
        console.log(res)
      })
      // console.log(f)
    });
  }


  count: any[] = ['1', '2', '3', '4', '5', '6', '7']
  countr() {
    let valeur = this.count.length + 1;
    this.count.push(valeur)
  }
  currentDay: number = 1
  regime: any[] = []
  setCurrentDay(day: number) {
    this.currentDay = day;
    this.regime = []
    if (this.food.length != 0) {
      for (let i = 0; i < this.food.length; i++){
        if (this.food[i].days == this.currentDay) {
          this.regime.push(this.food[i])
        }
      }
    }

    // console.log("**************")
    // console.log(this.currentDay)
    // console.log(this.regime)
    // console.log("**************")
  }






}
