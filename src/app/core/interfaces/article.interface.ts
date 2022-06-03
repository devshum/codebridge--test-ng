export interface Article {
  id: number,
  featured: boolean,
  title: string,
  url: string,
  imageUrl: string,
  newsSite: string,
  summary: string,
  publishedAt: string,
  launches: launches,
  events: events
}

interface launches {
  id: string,
  provider: string
}

interface events {
  id: string,
  provider: string
}