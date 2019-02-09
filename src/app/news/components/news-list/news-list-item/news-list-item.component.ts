import { Component, OnInit, Input } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'fc-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  @Input() article: any;

  constructor() { }

  ngOnInit() {
  }

}
