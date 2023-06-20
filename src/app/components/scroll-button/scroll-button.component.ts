import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'scroll-button',
  template: `<button class="btn btn__secondary" (click)="onScrollToTop()"><p>Sobe</p></button>`,
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent {

  @Output() scrollToTop = new EventEmitter<void>();

  onScrollToTop(): void {
    this.scrollToTop.emit();
  }

}
