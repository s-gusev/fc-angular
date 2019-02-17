import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Article } from '../../models/article.model';
import { Router } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { NewsSource } from '../../models/new-source.model';
import { Constants } from '../../../shared/constants';

@Component({
  selector: 'fc-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsPageComponent implements OnInit {
  articles!: Article[];
  pageTitle!: string;
  hasMoreArticles: boolean = false;

  private sourceId?: string;
  private searchText?: string;
  private pageIndex: number = 0;

  constructor(
    private router: Router,
    private newsService: NewsService,
    private cdr: ChangeDetectorRef,
  ) {

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
    this.searchText = text;
    this.loadArticles();
  }

  performSourceChange(newsSource: NewsSource) {
    this.pageTitle = newsSource.name;

    this.sourceId = newsSource.id;
    this.loadArticles();
  }

  loadMoreArticles() {
    this.newsService.getArticles(this.sourceId || '', this.searchText || '', this.pageIndex++).subscribe(
      (result) => {
        console.log('loaded articles', result);
        this.articles = this.articles.concat(result);
        this.hasMoreArticles = result.length === Constants.articlesPageSize;
        this.cdr.markForCheck();
      }
    )
  }

  private loadArticles() {
    this.pageIndex = 0;
    this.articles = [];
    this.loadMoreArticles();
  }
}
