import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IntMapper, StringMapper, UrlState, UrlStateService } from 'ngx-url-state';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

import { CharacterDataService } from '../character-data/character-data.service';
import { ICharacter, IPaginatedResultSet } from '../character-data/character-models';

interface ICharactersParams {
  page: number;
  pageSize: number;
  search?: string;
}

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharactersParams>;

  public resultSet$: Observable<IPaginatedResultSet<ICharacter>>;

  private componentDestroyed$ = new Subject<void>();
  public searchField: FormControl;

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
        search: {
          mapper: StringMapper
        }
      }
    });

    this.resultSet$ = combineLatest([
      this.urlState.params.page,
      this.urlState.params.pageSize,
      this.urlState.params.search
    ]).pipe(
      switchMap(([page, pageSize, search]) => this.characterDataService.getCharacters$(page, pageSize, search))
    );

    this.searchField = new FormControl(this.urlState.snapshot.search || '');
    this.searchField.valueChanges.pipe(
      takeUntil(this.componentDestroyed$),
      debounceTime(500)
    ).subscribe(
      newSearchTerm => this.changeSearch(newSearchTerm)
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

  public changeSearch(newSearchTerm: string): void {
    this.urlState.set({
      search: newSearchTerm || null,
      page: 1
    });
  }
}
