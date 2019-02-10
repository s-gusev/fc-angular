import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'fc-news-view-page',
  templateUrl: './news-view-page.component.html',
  styleUrls: ['./news-view-page.component.css']
})
export class NewsViewPageComponent implements OnInit {
  article: Article;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.newsService.getById(id).subscribe(article => {
      if (article) {
        this.article = article;
      } else {
        this.router.navigateByUrl('/pagenotfound');
      }
    });
  }
}
