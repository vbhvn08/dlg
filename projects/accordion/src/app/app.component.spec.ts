import { AppComponent } from './app.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory, mockProvider} from "@ngneat/spectator/jest";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FaqsService} from "./services/faqs.service";
import {of} from "rxjs";

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;

  const faqsMockService = {
    getFaqs: () => of([
      {
        id: '1',
        question: 'Question 1',
        answer: 'Answer 1'
      },
      {
        id: '2',
        question: 'Question 2',
        answer: 'Answer 2'
      },
    ]),
  };

  const createComponent = createComponentFactory({
    component: AppComponent,
    declarations: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    detectChanges: false,
    providers: [
      mockProvider(FaqsService, faqsMockService)
    ],
  });


  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should render accordion', () => {
    spectator.detectChanges();
    const accordions = spectator.queryAll('dlg-custom-accordion');
    expect(accordions.length).toBe(2);
  });
});
