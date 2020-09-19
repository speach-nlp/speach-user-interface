import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  getRandomQuote(): Observable<any> {
    const url = 'https://quotes.rest/qod?language=en';
    return this.http.get(url);
  }
}
