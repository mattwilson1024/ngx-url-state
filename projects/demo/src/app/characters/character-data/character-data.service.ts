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
    const searchTermLowerCase = searchTerm ? searchTerm.toLowerCase() : '';
    const matchingCharacters = HARRY_POTTER_CHARACTERS.filter(character => !searchTerm
                          || character.firstName.toLowerCase().includes(searchTermLowerCase)
                          || character.lastName.toLowerCase().includes(searchTermLowerCase)
                          || `${character.firstName} ${character.lastName}`.toLowerCase().includes(searchTermLowerCase)
                          || character.tags.some(tag => tag.name.toLowerCase().includes(searchTermLowerCase)));

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
