import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Faq } from '../interfaces/accordion.types';

const ENDPOINT = '/assets/faqs.json';

@Injectable({
  providedIn: 'root',
})
export class FaqsService {
  constructor(private http: HttpClient) {}

  getFaqs(): Observable<Faq[]> {
    return this.http.get<Faq[]>(ENDPOINT);
  }
}
