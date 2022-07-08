import { CommonModule } from '@angular/common';
import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IntMapper, UrlState, UrlStateService } from 'ngx-url-state';
import { Subject } from 'rxjs';
import { CharacterDetailsTabModule } from '../character-details-tab/character-details-tab.component';
import { CharacterListTabModule } from '../character-list-tab/character-list-tab.component';
import { ICharactersPageParams } from './characters-page-param.model';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit, OnDestroy {

  public urlState: UrlState<ICharactersPageParams>;

  private componentDestroyed$ = new Subject<void>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private urlStateService: UrlStateService,
  ) { }

  ngOnInit(): void {
    this.urlState = this.urlStateService.create<ICharactersPageParams>({
      activatedRoute: this.activatedRoute,
      componentDestroyed$: this.componentDestroyed$
    });

    this.urlState.listen({
      tabId: {
        defaultValue: `characters`
      },
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
