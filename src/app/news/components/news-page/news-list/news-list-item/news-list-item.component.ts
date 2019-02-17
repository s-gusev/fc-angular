import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Article } from '../../../../models/article.model';
import { LoginStateDependentComponent } from '../../../../../shared/components/login-state-depended-component';

@Component({
  selector: 'fc-news-list-item',
  templateUrl: './news-list-item.component.html',
  styleUrls: ['./news-list-item.component.css']
})
export class NewsListItemComponent extends LoginStateDependentComponent {
  faEdit = faEdit;
  faTrash = faTrash;

  @Input() article: any;
  @Output() onEdit = new EventEmitter<Article>();
  @Output() onDelete = new EventEmitter<Article>();

  editClicked() {
    this.onEdit.emit(this.article);
  }

  deleteClicked() {
    this.onDelete.emit(this.article);
  }
}
