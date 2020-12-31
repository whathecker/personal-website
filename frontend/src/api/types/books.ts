export interface ListBooksQuery { 
    status?: string
};

export interface Book {
    title: string,
    author: string,
    readStatus: string,
    coverImage: string,
    review?: string,
    rating?: number,
    readDate?: Date,
    id?: string
}

