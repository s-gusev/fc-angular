import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fc-news-selector',
  templateUrl: './news-selector.component.html',
  styleUrls: ['./news-selector.component.css']
})
export class NewsSelectorComponent implements OnInit {
  @Output() onAdd = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.onAdd.emit();
  }

}
