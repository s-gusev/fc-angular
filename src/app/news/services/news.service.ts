import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class NewsService {
  private mockArticles: Article[] = [
    {
      "source": "Own Feed",
      "title": "EU Cyber Threat Landscape and Outlook: What You Should Know about the ENISA 2018 Report - Lexology",
      "url": "https://www.lexology.com/library/detail.aspx?g=7dbf6805-0013-4ed7-aa6b-e07c7a4843a5",
      "urlToImage": "https://www.lexology.com/images/share/lexology-facebook.png",
      "publishedAt": "2019-02-09T10:39:00Z",
      "content": "The landscape for cyberattacks is constantly evolving. Attacks are becoming more global and sophisticated, and 2019 is poised to continue this trend toward increasing complexity.\r\nThis Legal Update highlights: (i) the main aspects of the threat landscape iden… [+6929 chars]"
    },
    {
      "source": "Own Feed",
      "title": "The ECB Prepares A Reaction To The Unexpectedly Permanent, Expected Temporary Slowdown",
      "url": "https://seekingalpha.com/article/4239630-ecb-prepares-reaction-unexpectedly-permanent-expected-temporary-slowdown",
      "urlToImage": "https://static.seekingalpha.com/uploads/2019/2/8/41528976-15496194884840107.png",
      "publishedAt": "2019-02-09T09:39:42Z",
      "content": "The Eurozone Doomsday Clock seems to be permanently stuck at five minutes to Midnight. Whilst the ECB procrastinate about the normalization, in preparation for the next monetary policy expansion, the IMF is swiftly nudging perceptions towards what comes next.… [+31228 chars]"
    },
    {
      "source": "BBC",
      "title": "Venezuela Did More P2P Bitcoin Trading Than Canada and India Combined in 2018",
      "url": "https://finance.yahoo.com/news/venezuela-did-more-p2p-bitcoin-092616637.html",
      "urlToImage": "https://s.yimg.com/uu/api/res/1.2/tgEzJuft3kQZQdcFOmRSEQ--~B/aD02NjY7dz0xMDAwO3NtPTE7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/ccn_656/b93aaecbc41b49704e30dce84ee7907e",
      "publishedAt": "2019-02-09T09:26:16Z",
      "content": "According to data scientist Matt Ahlborg, LocalBitcoins trading data concludes that Venezuela did more peer-to-peer Bitcoin trading in 2018 than Canada, India, and Australia combined. Venezuelan trading topped $235 million. For perspective, the United States … [+1237 chars]"
    },
  ];

  private localArticles: Article[];
  private uniqueIdIndex: number = 0;

  constructor() { }

  getArticles(): Observable<Article[]> {
    const newArticles = this.mockArticles.map(a => Object.assign({}, a));
    newArticles.forEach(a => a.id = this.getNextId())
    this.localArticles = newArticles;
    return of(newArticles);
  }

  getMoreArticles(): Observable<Article[]> {
    const newArticles = this.mockArticles.map(a => Object.assign({}, a));
    newArticles.forEach(a => a.id = this.getNextId())
    this.localArticles.push(...newArticles);
    return of(this.localArticles);
  }

  getById(id: string): Observable<Article> {
    return of(this.localArticles.find(a => a.id === id))
  }

  private getNextId(): string {
    return '' + ++this.uniqueIdIndex;
  }
}
