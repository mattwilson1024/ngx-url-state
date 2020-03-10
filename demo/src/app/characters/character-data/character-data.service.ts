import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HARRY_POTTER_CHARACTERS } from './character-data';
import { ICharacter, IPaginatedResultSet } from './character-models';

@Injectable({
  providedIn: 'root'
})
export class CharacterDataService {

  constructor() { }

  getCharacters$(page: number, pageSize: number, searchTerm?: string): Observable<IPaginatedResultSet<ICharacter>> {
    const startIndex = (page - 1) * pageSize;
    const matchingCharacters = HARRY_POTTER_CHARACTERS.filter(character => !searchTerm
                          || character.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                          || character.lastName.toLowerCase().includes(searchTerm.toLowerCase()));

    const characters = matchingCharacters
      .slice(startIndex, startIndex + pageSize)
      .sort((character1, character2) => character1.lastName.localeCompare(character2.lastName));

    const paginatedResultSet: IPaginatedResultSet<ICharacter> = {
      results: characters,
      total: matchingCharacters.length
    };
    return of(paginatedResultSet);
  }

}
