import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  isHovering = false;

  handleMouseMove(event: any): void {
    const circle = document.querySelector('.circle') as HTMLElement;
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const halfWidth = circle.offsetWidth / 2;
    const halfHeight = circle.offsetHeight / 2;
    circle.style.transform = `translate(${x - halfWidth}px, ${y - halfHeight}px)`;
    this.isHovering = true;
  }

  handleMouseLeave(): void {
    this.isHovering = false;
  }
}
