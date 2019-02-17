import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { LoginStateDependentComponent } from '../../../shared/components/login-state-depended-component';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'fc-news-view-page',
  templateUrl: './news-view-page.component.html',
  styleUrls: ['./news-view-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsViewPageComponent extends LoginStateDependentComponent implements OnInit {
  article: Article;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    authService: AuthService,
    router: Router,
    cdr: ChangeDetectorRef,
  ) {
    super(authService, router, cdr);
  }

  ngOnInit() {
    super.ngOnInit();
    const id = this.route.snapshot.paramMap.get("id");
    this.newsService.getById(id).subscribe(article => {
      if (article) {
        this.article = article;
        this.cdr.markForCheck();
      } else {
        this.router.navigateByUrl('/pagenotfound');
      }
    });
  }
}
