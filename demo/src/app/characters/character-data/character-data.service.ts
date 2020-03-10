import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HARRY_POTTER_CHARACTERS } from './character-data';
import { ICharacter } from './character-models';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor() { }

  getCharacters$(page: number, pageSize: number): Observable<ICharacter[]> {
    const startIndex = (page - 1) * pageSize;
    const characters = HARRY_POTTER_CHARACTERS.slice(startIndex, pageSize);

    return of(characters);
  }

}
