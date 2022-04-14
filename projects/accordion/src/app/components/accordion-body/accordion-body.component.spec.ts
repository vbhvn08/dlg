import { AccordionBodyComponent } from './accordion-body.component';
import {Spectator} from "@ngneat/spectator";
import {createComponentFactory} from "@ngneat/spectator/jest";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('AccordionBodyComponent', () => {
  let spectator: Spectator<AccordionBodyComponent>;

  const createComponent = createComponentFactory({
    component: AccordionBodyComponent,
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

