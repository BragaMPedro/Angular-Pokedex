import { ViewportScroller } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly viewport = inject(ViewportScroller);

  showScrollButton: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (this.viewport.getScrollPosition()[1] > 280) {
      this.showScrollButton = true;
    } else {
      this.showScrollButton = false;
    }
  }

  scrollToTop() {
    this.viewport.scrollToPosition([0, 0]);
  }
}
