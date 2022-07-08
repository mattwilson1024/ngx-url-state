import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlState, UrlStateService } from 'ngx-url-state';
import { Observable, Subject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ICharacter } from '../data/data.models';
import { CharacterDataService } from '../data/data.service';

interface ICharacterDetailsParams {
  id: string;
}

@Component({
  selector: 'app-character-details-tab',
  templateUrl: './character-details-tab.component.html',
  styleUrls: ['./character-details-tab.component.scss'],
})
export class CharacterDetailsTabComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharacterDetailsParams>;

  public character$: Observable<ICharacter>;

  private componentDestroyed$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlStateService: UrlStateService,
    private characterDataService: CharacterDataService
  ) { }

  ngOnInit(): void {
    this.urlState = this.urlStateService.create<ICharacterDetailsParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$
    });

    this.urlState.listen({
      id: {},
    });

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
