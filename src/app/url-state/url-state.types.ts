import { BehaviorSubject } from 'rxjs';

export type BehaviorSubjectsFor<T> = {
  [P in keyof T]: BehaviorSubject<T[P]>
};

export type UrlParamDefsFor<T> = {
  [P in keyof T]: UrlStateParamDef<T[P]>
};

export interface UrlStateParamDef<T> {
  toString: (param: T) => string;
  fromString: (stringValue: string) => T;
  defaultValue?: T;
}
