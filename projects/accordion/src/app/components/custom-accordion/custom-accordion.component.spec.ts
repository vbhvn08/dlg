import { CustomAccordionComponent } from './custom-accordion.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory} from "@ngneat/spectator/jest";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CustomAccordionComponent', () => {
  let spectator: Spectator<CustomAccordionComponent>;

  const createComponent = createComponentFactory({
    component: CustomAccordionComponent,
    declarations: [],
    detectChanges: false,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
  });

  beforeEach(async () => {
    spectator = createComponent();
    spectator.component.faq = {
      id: '1',
      question: 'Question 1',
      answer: 'Answer 1'
    }
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should expand accordion', () => {
    spectator.detectChanges();
    const closePanel = spectator.query('.panel');
    expect(closePanel).toHaveStyle({'max-height': '0px'});
    spectator.click('.header');
    const openPanel = spectator.query('.panel');
    expect(openPanel).toHaveStyle({'max-height': '32px'});
  });
});
