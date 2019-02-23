import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../shared/services/auth.service';
import { Constants } from '../../shared/constants';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
  private pageSize = Constants.articlesPageSize;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  getById(id: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/news/${id}`);
  }

  getArticles(source: string, text: string, pageIndex: number): Observable<Article[]> {
    return this.http.get<Article[]>(`http://localhost:3000/news/${encodeURI(source)}/${encodeURI(text)}/${this.pageSize}/${pageIndex}`);
  }

  upsert(article: Article): Observable<Article> {
    return this.http.post<Article>(`http://localhost:3000/news`, article, this.authService.getAuthHeders());
  }

  deleteArticle(id: string) {
    return this.http.delete('http://localhost:3000/news/' + id, this.authService.getAuthHeders());
  }
}
