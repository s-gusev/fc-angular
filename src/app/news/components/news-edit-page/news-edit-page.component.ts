import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'fc-news-edit-page',
  templateUrl: './news-edit-page.component.html',
  styleUrls: ['./news-edit-page.component.css']
})
export class NewsEditPageComponent implements OnInit {
  article: Article;
  pageTitle!: string;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.pageTitle = "Edit News";
      this.newsService.getById(id).subscribe(article => {
        if (article) {
          this.article = article;
        } else {
          this.router.navigateByUrl('/pagenotfound');
        }
      });
    } else {
      this.pageTitle = "Add News";
    }
  }
}
