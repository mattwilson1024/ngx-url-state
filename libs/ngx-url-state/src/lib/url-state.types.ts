import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { UrlParamMapper } from './mappers';

export type StringsFor<T> = {
  [P in keyof T]: string
};

export type BehaviorSubjectsFor<T> = {
  [P in keyof T]: BehaviorSubject<T[P]>
};

export type ObservablesFor<T> = {
  [P in keyof T]: Observable<T[P]>
};

export type UrlParamDefsFor<T> = {
  [P in keyof T]: UrlStateParamDef<T[P], T>
};

export interface UrlStateParamDef<P, T> {
  mapper?: UrlParamMapper<P>;
  defaultValue?: P | UrlParamDefaultValueFn<P, T>;
  // TODO: Add an ordinal to determine order of importance of default value calculation.
}

export type UrlParamDefaultValueFn<P, T> = (params: Partial<T>) => P | undefined;

export enum NavigationMode {
  AddToHistoryStack,
  ReplaceHistory
}

export interface UrlStateConstructorConfig<T> {
  activatedRoute: ActivatedRoute;
  componentDestroyed$: Subject<void>;
}
