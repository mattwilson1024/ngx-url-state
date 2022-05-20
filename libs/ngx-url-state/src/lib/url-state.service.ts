import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlStateService {

  constructor() { }

  public helloWorld(): string {
    return `Howdy, world`;
  }
}
