import { Component, Input } from '@angular/core';

import { ICharacter } from '../character-data/character-models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character: ICharacter;
}
