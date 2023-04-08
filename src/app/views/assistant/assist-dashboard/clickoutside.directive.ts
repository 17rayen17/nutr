import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Inject, OnDestroy, Output } from '@angular/core';
import {Subscription, filter, fromEvent} from 'rxjs'

@Directive({
  selector: '[appClickoutside]'
})
export class ClickoutsideDirective implements AfterViewInit, OnDestroy {
  @Output() clickOutside = new EventEmitter<void>();
  documentClicked: Subscription | undefined;

  constructor(private element: ElementRef,
  @Inject(DOCUMENT) private document : Document) { }

  ngAfterViewInit(): void {
    this.documentClicked = fromEvent(this.document, 'click').pipe(
      filter((event: any) => {
        return !this.isInside(event.target as HTMLElement)
        })
    ).subscribe(() => {
        this.clickOutside.emit()
      })
  }

  isInside(elementToCheck : HTMLElement): Boolean {
    return elementToCheck === this.element.nativeElement || this.element.nativeElement.contains(elementToCheck)
  }

  ngOnDestroy(): void {
    this.documentClicked?.unsubscribe()
  }
}
