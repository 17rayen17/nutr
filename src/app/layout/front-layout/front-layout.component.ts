import { ChangeDetectorRef, Component, OnInit  } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';


@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css'],
  animations: [
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ height: '0', opacity: 0 })),
        group([
          query(':enter', [
            style({ height: '0', opacity: 0 }),
            animate('0.5s ease-in-out', style({ height: '*', opacity: 1 }))
          ]),
          query(':leave', [
            style({ height: '*', opacity: 1 }),
            animate('0.5s ease-in-out', style({ height: '0', opacity: 0 }))
          ], { optional: true })
        ])
      ])
    ])
  ],
})
export class FrontLayoutComponent implements OnInit  {

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  onActiveIcion(event : any) {
    event.target.classList.toggle('active')
  }
  disableClick() {
    document.getElementById('bars')?.classList.remove('active')
  }


  getState(outlet : any) {
    // Changing the activatedRouteData.state triggers the animation
    return outlet.activatedRouteData.state;
  }


}
