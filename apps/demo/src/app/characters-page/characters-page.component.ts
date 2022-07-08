import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UrlState, UrlStateService } from 'ngx-url-state';
import { Subject } from 'rxjs';
import { CharacterDetailsTabModule } from '../character-details-tab/character-details-tab.component';
import { CharacterListTabModule } from '../character-list-tab/character-list-tab.component';

interface ICharactersParams {
  tabId: string;
}

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharactersParams>;

  private componentDestroyed$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlStateService: UrlStateService,
  ) { }

  ngOnInit(): void {
    this.urlState = this.urlStateService.create<ICharactersParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$
    });

    this.urlState.listen({
      tabId: {
        defaultValue: `characters`
      },
    });
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
  }
}

@NgModule({
  declarations: [ CharactersPageComponent ],
  imports: [
    CommonModule,
    RouterModule,
    CharacterDetailsTabModule,
    CharacterListTabModule,
  ],
  exports: [ CharactersPageComponent ],
})

export class CharactersPageModule { }
