import { Category } from '../models/category';
import { Note } from '../models/note';

export class Data {
    static CATEGORIES: Category[] = [{
        name: 'Category 1',
        description: 'description about category one'
    },
    {
        name: 'Category 2',
        description: 'description about category two'
    },
    {
        name: 'Category 3',
        description: 'description about category three'
    }];
    static NOTES: Note[] = [{
        id: '123',
        details: 'Note 123 Details',
        title: 'Note Title'
    }];
}
