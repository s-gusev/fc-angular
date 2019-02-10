import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NewsSource } from 'src/app/news/models/new-source.model';

@Component({
  selector: 'fc-news-selector',
  templateUrl: './news-selector.component.html',
  styleUrls: ['./news-selector.component.css']
})
export class NewsSelectorComponent implements OnInit {
  @Output() onAdd = new EventEmitter();
  @Output() onSourceChanged = new EventEmitter<NewsSource>();
  @Output() onSearchClicked = new EventEmitter<string>();

  sources: NewsSource[] = [{
    "id": "abc-news",
    "name": "ABC News",
  },
  {
    "id": "associated-press",
    "name": "Associated Press",
  },
  {
    "id": "abc-news",
    "name": "ABC News",
  },
  {
    "id": "cnn",
    "name": "CNN",
  },
  {
    "id": "fox-news",
    "name": "Fox News",
  },
  {
    "id": "google-news",
    "name": "Google News",
  },
  {
    "id": "front-camp-news",
    "name": "Front Camp Own News",
  },
  ];

  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.onAdd.emit();
  }

  sourceChanged() {
    const selectCtrl = <HTMLSelectElement>document.getElementById('sourcesSelect');
    const selectedValue = selectCtrl.options[selectCtrl.selectedIndex].value;
    this.onSourceChanged.emit(this.sources.find(s => s.id === selectedValue));
  }

  searchClicked() {
    this.onSearchClicked.emit((<HTMLInputElement>document.getElementById('searchText')).value);
  }

}
