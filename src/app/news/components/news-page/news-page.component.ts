import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fc-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
  articles: Observable<Article[]>;

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
}
