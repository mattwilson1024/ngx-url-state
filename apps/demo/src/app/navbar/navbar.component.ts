import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

}

@NgModule({
  declarations: [ NavbarComponent ],
  imports: [
    CommonModule,
  ],
  exports: [ NavbarComponent ],
})
export class NavbarModule { }
