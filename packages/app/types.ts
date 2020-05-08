export interface PostInterface {
  data: {
    title: string;
    date: string;
    readingTime: string;
    description?: string;
    image?: string;
    filename?: string;
  };
  content: string;
  excerpt: string;
}
