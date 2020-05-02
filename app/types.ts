export interface PostInterface {
  data: {
    title: string;
    date: string;
    readingTime: string;
    image?: string;
    filename?: string;
  };
  content: string;
  excerpt: string;
}
