import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'fc-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent implements OnInit {
  faEdit = faEdit;
  faTrash = faTrash;

  @Input() article: any;
  @Output() onEdit = new EventEmitter<Article>();
  @Output() onDelete = new EventEmitter<Article>();

  constructor() { }

  ngOnInit() {
  }

  editClicked() {
    this.onEdit.emit(this.article);
  }

  deleteClicked() {
    this.onDelete.emit(this.article);
  }
}
