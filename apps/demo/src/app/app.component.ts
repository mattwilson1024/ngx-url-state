import { Component, OnInit } from '@angular/core';
import { UrlStateService } from 'ngx-url-state';

@Component({
  selector: 'ngx-url-state-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  constructor(
    private urlStateService: UrlStateService,
  ) {}

  ngOnInit(): void {
    console.log(this.urlStateService.helloWorld());
  }
}
