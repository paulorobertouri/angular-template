import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ButtonComponent } from './components/common/button/button.component';
import { CardComponent } from './components/common/card/card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-template';
}
