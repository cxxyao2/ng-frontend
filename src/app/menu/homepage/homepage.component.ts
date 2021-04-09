import { Component, OnInit } from '@angular/core';
import { transition, trigger, useAnimation } from '@angular/animations';
import { transAnimation } from '../../animations';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('openClose', [
      transition('open => closed', [
        useAnimation(transAnimation, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor: '#304ffe',
            time: '1s',
          },
        }),
      ]),
    ]),
  ],
})
export class HomepageComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() {}

  ngOnInit(): void {
    this.tick();
  }

  tick() {
    const myVar = setTimeout(() => {
      this.isOpen = !this.isOpen;
      clearTimeout(myVar);
    }, 100);
  }
}
