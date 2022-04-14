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
  });

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
