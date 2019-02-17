import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'fc-news-edit-page',
  templateUrl: './news-edit-page.component.html',
  styleUrls: ['./news-edit-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsEditPageComponent implements OnInit {
  article: Article;
  pageTitle!: string;

  editForm: FormGroup = new FormGroup({
    _id: new FormControl(''),
    author: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
    urlToImage: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
    publishedAt: new FormControl('', [Validators.required]),
  });

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.pageTitle = "Edit News";
      this.newsService.getById(id).subscribe(article => {
        if (article) {
          this.article = article;
          this.editForm.setValue({
            _id: article._id,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            urlToImage: article.urlToImage,
            content: article.content,
            publishedAt: article.publishedAt,
          });
          this.cdr.markForCheck();
        } else {
          this.router.navigateByUrl('/pagenotfound');
        }
      });
    } else {
      this.pageTitle = "Add News";
      this.editForm.patchValue({
        author: this.authService.getUserName(),
        publishedAt: new Date().toISOString(),
      });
      this.cdr.markForCheck();
    }
  }

  cancel() {
    this.location.back();
  }

  formSubmit() {
    if (this.editForm.valid) {
      this.newsService.upsert(this.editForm.value).subscribe(
        (result) => {
          this.location.back();
        }
      )
    }
  }
}
