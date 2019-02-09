import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'fc-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  @Input() articles: Article[];

  @Output() onEdit = new EventEmitter<Article>();
  @Output() onDelete = new EventEmitter<Article>();

  constructor() { }

  ngOnInit() {
  }

  editArticle(data: Article) {
    this.onEdit.emit(data);
  }

  deleteArticle(data: Article) {
    this.onDelete.emit(data);
  }
}
