import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IntMapper, UrlState, UrlStateService } from 'ngx-url-state';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';
import { ICharacter, IPaginatedResultSet } from '../data/data.models';
import { CharacterDataService } from '../data/data.service';
import { PaginationModule } from '../pagination/pagination.component';

interface ICharactersParams {
  page: number;
  pageSize: number;
  search?: string;
}

@Component({
  selector: 'app-character-list-tab',
  templateUrl: './character-list-tab.component.html',
  styleUrls: ['./character-list-tab.component.scss'],
})
export class CharacterListTabComponent implements OnInit, OnDestroy {
  public urlState: UrlState<ICharactersParams>;

  public resultSet$: Observable<IPaginatedResultSet<ICharacter>>;

  private componentDestroyed$ = new Subject<void>();
  public searchField: FormControl;

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlStateService: UrlStateService,
    private characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.urlState = this.urlStateService.create<ICharactersParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$
    });

    this.urlState.listen({
      page: {
        mapper: IntMapper,
        defaultValue: 1
      },
      pageSize: {
        mapper: IntMapper,
        defaultValue: 5
      },
      search: {}
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

  public onPageChange(newPage: number): void {
    this.urlState.set({
      page: newPage
    });
  }

  public onPageSizeChange(newPageSize: number): void {
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

@NgModule({
  declarations: [CharacterListTabComponent],
  imports: [
    CommonModule,
    PaginationModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [CharacterListTabComponent],
})
export class CharacterListTabModule { }
