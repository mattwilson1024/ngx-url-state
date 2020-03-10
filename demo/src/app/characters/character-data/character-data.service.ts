import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HARRY_POTTER_CHARACTERS } from './character-data';
import { ICharacter, IPaginatedResultSet } from './character-models';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor() { }

  getCharacters$(page: number, pageSize: number): Observable<IPaginatedResultSet<ICharacter>> {
    const startIndex = (page - 1) * pageSize;
    const matchingCharacters = HARRY_POTTER_CHARACTERS;

    const characters = matchingCharacters
      .slice(startIndex, startIndex + pageSize)
      .sort((char1, char2) => char1.lastName.localeCompare(char2.lastName));

    const paginatedResultSet: IPaginatedResultSet<ICharacter> = {
      results: characters,
      total: matchingCharacters.length
    };
    return of(paginatedResultSet);
  }

}
