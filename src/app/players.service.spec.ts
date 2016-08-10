/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { PlayersService } from './players.service';

describe('Service: Players', () => {
  beforeEach(() => {
    addProviders([PlayersService]);
  });

  it('should ...',
    inject([PlayersService],
      (service: PlayersService) => {
        expect(service).toBeTruthy();
      }));
});
