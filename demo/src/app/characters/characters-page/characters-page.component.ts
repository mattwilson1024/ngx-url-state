import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IntMapper, UrlState, UrlStateService } from 'ngx-url-state';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CharacterDataService } from '../character-data/character-data.service';
import { ICharacter, IPaginatedResultSet } from '../character-data/character-models';

interface ICharactersParams {
  page: number;
  pageSize: number;
}

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharactersParams>;

  public resultSet$: Observable<IPaginatedResultSet<ICharacter>>;

  private componentDestroyed$: BehaviorSubject<void>;

  constructor(private activatedRoute: ActivatedRoute,
              private urlStateService: UrlStateService,
              private characterDataService: CharacterDataService) { }

  ngOnInit(): void {
    this.urlState = this.urlStateService.listen<ICharactersParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$,
      paramDefinitions: {
        page: {
          mapper: IntMapper,
          defaultValue: 1
        },
        pageSize: {
          mapper: IntMapper,
          defaultValue: 5
        },
      }
    });

    this.resultSet$ = combineLatest([this.urlState.params.page, this.urlState.params.pageSize]).pipe(
      switchMap(([page, pageSize]) => this.characterDataService.getCharacters$(page, pageSize))
    );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

  public changePage(newPage: number): void {
    this.urlState.set({
      page: newPage
    });
  }

  public changePageSize(newPageSize: number): void {
    this.urlState.set({
      page: 1,
      pageSize: newPageSize
    });
  }
}
