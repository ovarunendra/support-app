import { schema } from 'normalizr';

export const Book = new schema.Entity('books');
export const Books = [Book];
