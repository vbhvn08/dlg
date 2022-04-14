import {SpectatorService} from "@ngneat/spectator";
import {createServiceFactory} from "@ngneat/spectator/jest";
import {HttpClient} from "@angular/common/http";
import {FaqsService} from "./faqs.service";

describe('FaqsService', () => {
  let spectator: SpectatorService<FaqsService>;

  const createService = createServiceFactory({
    service: FaqsService,
    providers: [],
    entryComponents: [],
    mocks: [HttpClient]
  });
  beforeEach(() => spectator = createService());

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
