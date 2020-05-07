import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { createComponentFactory, Spectator } from '@ngneat/spectator/jest';
import { MockComponent } from 'ng-mocks';
import { NzPaginationComponent } from 'ng-zorro-antd';
import { UrlStateService } from 'ngx-url-state';

import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterDataService } from '../character-data/character-data.service';
import { CharactersPageComponent } from './characters-page.component';

describe('CharactersPageComponent', () => {

  let spectator: Spectator<CharactersPageComponent>;
  const createComponent =  createComponentFactory({
    component: CharactersPageComponent,
    declarations: [
      MockComponent(CharacterCardComponent),
      MockComponent(NzPaginationComponent)
    ],
    providers: [
      CharacterDataService,
      UrlStateService
    ],
    imports: [
      RouterTestingModule,
      ReactiveFormsModule
    ]
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

});
