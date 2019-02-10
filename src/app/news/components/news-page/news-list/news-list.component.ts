import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../../models/article.model';

@Component({
  selector: 'fc-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsListComponent implements OnInit {
  @Input() articles: Article[];

  @Output() onEdit = new EventEmitter<Article>();
  @Output() onDelete = new EventEmitter<Article>();
  @Output() onShowMoreArticles = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  editArticle(data: Article) {
    this.onEdit.emit(data);
  }

  deleteArticle(data: Article) {
    this.onDelete.emit(data);
  }

  moreClicked() {
    this.onShowMoreArticles.emit();
  }

  trackByFn(index, item: Article) {
    return item.id;
  }
}
