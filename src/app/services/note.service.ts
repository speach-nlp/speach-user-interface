import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor() { }

  getAllNotes(): Note[] {
    return Data.NOTES;
  }
}
