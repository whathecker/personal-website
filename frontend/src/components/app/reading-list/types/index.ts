export interface ReadingListHeaderProps {
  headerText: string;
  bodyText: string;
}

export interface RatingProps {
  rating: number;
}

export interface ActivelyReadingBook {
  title: string;
  author: string;
  coverImage: string;
}

export interface FinishedReadingBook {
  title: string;
  author: string;
  coverImage: string;
  rating?: number;
  readDate?: Date;
  review?: string;
}
