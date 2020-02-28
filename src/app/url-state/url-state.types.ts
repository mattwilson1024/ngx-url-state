import { BehaviorSubject, Observable } from 'rxjs';

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
  [P in keyof T]: UrlStateParamDef<T[P]>
};

export interface UrlStateParamDef<P> {
  mapper: UrlParamMapper<P>;
  defaultValue?: P;
}

export enum NavigationMode {
  AddToHistoryStack,
  ReplaceHistory
}

export interface UrlParamMapper<P> {
  toString: (typedValue: P) => string;
  fromString: (stringValue: string) => P;
}
