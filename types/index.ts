export interface Author {
  id: number;
  name: string;
  bio: string | null;
}

export interface Book {
  id: number;
  title: string;
  price: number | null;
  author_id: number;
}
