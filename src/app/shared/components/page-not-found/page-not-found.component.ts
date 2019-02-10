import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'fc-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
