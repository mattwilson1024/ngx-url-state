import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-character-details-tab',
  templateUrl: './character-details-tab.component.html',
  styleUrls: ['./character-details-tab.component.scss'],
})
export class CharacterDetailsTabComponent {

}

@NgModule({
  declarations: [CharacterDetailsTabComponent],
  imports: [
    CommonModule,
  ],
  exports: [CharacterDetailsTabComponent],
})
export class CharacterDetailsTabModule { }
