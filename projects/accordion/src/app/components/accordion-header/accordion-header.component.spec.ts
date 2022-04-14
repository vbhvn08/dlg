import { AccordionHeaderComponent } from './accordion-header.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory} from "@ngneat/spectator/jest";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AccordionHeaderComponent', () => {
  let spectator: Spectator<AccordionHeaderComponent>;

  const createComponent = createComponentFactory({
    component: AccordionHeaderComponent,
    declarations: [],
    detectChanges: false,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [],
  });

  beforeEach(async () => {
    spectator = createComponent();
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});

