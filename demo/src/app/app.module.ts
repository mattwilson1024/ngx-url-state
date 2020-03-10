import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { en_GB, NgZorroAntdModule, NZ_I18N } from 'ng-zorro-antd';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';
import { CharactersPageComponent } from './characters/characters-page/characters-page.component';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(en);

@NgModule({
   declarations: [
      AppComponent,
      CharactersPageComponent,
      CharacterCardComponent,
      NavbarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgZorroAntdModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      BrowserAnimationsModule
   ],
   providers: [{ provide: NZ_I18N, useValue: en_GB }],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
