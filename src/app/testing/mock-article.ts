import { Article } from './../news/models/article.model';

export const TestArticle: Article = {
  _id: 'id',
  source: { id: 'abc-news', name: 'news soure' },
  author: 'test-user',
  title: 'test arcticle title',
  description: 'test artivcle desc',
  url: 'test article url',
  urlToImage: 'http://img.com/1.png',
  content: 'test content',
  publishedAt: new Date(2018, 1, 1, 15, 0, 0).toISOString()
};
