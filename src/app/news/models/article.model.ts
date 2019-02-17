import { NewsSource } from "./new-source.model";

export interface Article {
    _id?: string,
    source: NewsSource,
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    content: string,
    publishedAt: string,
}
