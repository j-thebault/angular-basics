import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-not-found-component',
  template: `
    <div>
      404 - Sorry no page at this address. <a routerLink="/">go home</a>
    </div>
  `
})

export class NotFoundComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
