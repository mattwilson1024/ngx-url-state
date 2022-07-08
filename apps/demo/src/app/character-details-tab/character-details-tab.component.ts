import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { UrlState } from 'ngx-url-state';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ICharacter } from '../data/data.models';
import { CharacterDataService } from '../data/data.service';
import { ICharactersPageParams } from '../characters-page/characters-page-param.model';

@Component({
  selector: 'app-character-details-tab',
  templateUrl: './character-details-tab.component.html',
  styleUrls: ['./character-details-tab.component.scss'],
})
export class CharacterDetailsTabComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharactersPageParams>;

  public character$: Observable<ICharacter>;

  private componentDestroyed$ = new Subject<void>();

  constructor(
    private characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.character$ = this.urlState.params.id
      .pipe(
        switchMap(id => this.characterDataService.getCharacter$(id)),
        takeUntil(this.componentDestroyed$)
      );
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }

}

@NgModule({
  declarations: [CharacterDetailsTabComponent],
  imports: [
    CommonModule,
  ],
  exports: [CharacterDetailsTabComponent],
})
export class CharacterDetailsTabModule { }
