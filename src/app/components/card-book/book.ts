export interface Book {
    title: string;
    autor: string;
    genre: Genre;
    image: string;
    favorite: boolean;
}

export interface Genre {
    id: string;
    value: string;
    books: Book[];
}