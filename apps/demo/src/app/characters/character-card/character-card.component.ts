import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

import { ICharacter } from '../character-data/character-models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent {
  @Input() character: ICharacter;
}

@NgModule({
  declarations: [ CharacterCardComponent ],
  imports: [
    CommonModule,
  ],
  exports: [ CharacterCardComponent ],
})

export class CharacterCardModule { }
