import { Component, OnInit } from '@angular/core';
import { FaqsService } from './services/faqs.service';
import { Faq } from './interfaces/accordion.types';
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'accordion';
  faqs$: Observable<Faq[]>;

  constructor(private faqsService: FaqsService) {}

  ngOnInit(): void {
    this.faqs$ = this.faqsService.getFaqs();
  }
}
