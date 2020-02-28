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

export interface UrlStateParamDef<T> {
  toString: (param: T) => string;
  fromString: (stringValue: string) => T;
  defaultValue?: T;
}

export enum NavigationMode {
  AddToHistoryStack,
  ReplaceHistory
}
