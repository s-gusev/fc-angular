import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Article } from '../../models/article.model';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { NewsSource } from '../../models/new-source.model';

@Component({
  selector: 'fc-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent implements OnInit {
  articles: Observable<Article[]>;
  pageTitle: string;

  constructor(
    private router: Router,
    private newsService: NewsService,
  ) {
    this.articles = this.newsService.getArticles();
  }

  ngOnInit() {
  }

  addArticle() {
    this.router.navigate(["news/add"]);
  }

  editArticle(data: Article) {
    this.router.navigate(["news/edit", 1]);
  }

  deleteArticle(data: Article) {
    console.log('delete', data);
  }

  performSearch(text: string) {
    console.log('searchClicked', text)
  }

  performSourceChange(newsSource: NewsSource) {
    this.pageTitle = newsSource.name;
    console.log('sourceChanged', newsSource)
  }

  showMoreArticles() {
    this.articles = this.newsService.getMoreArticles();
  }
}
