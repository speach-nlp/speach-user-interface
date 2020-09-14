import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getAllCategories(): Category[] {
    return Data.CATEGORIES;
  }
}
