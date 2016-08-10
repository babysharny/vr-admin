/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GamesService } from './games.service';

describe('Service: Games', () => {
  beforeEach(() => {
    addProviders([GamesService]);
  });

  it('should ...',
    inject([GamesService],
      (service: GamesService) => {
        expect(service).toBeTruthy();
      }));
});
