import { BehaviorSubject } from 'rxjs';

export type ObservableWrapper<T> = {
  [P in keyof T]: BehaviorSubject<T[P]>
};

export type UrlParamDefs<T> = {
  [P in keyof T]: IUrlStateParamDef<T[P]>
};

export interface IUrlStateParamDef<T> {
  toString: (x: T) => string;
  fromString: (x: string) => T;
  defaultValue?: T;
}
