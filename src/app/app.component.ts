import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div [class]="themeClass">
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themeClass = 'light-theme';

  constructor(private themeService: ThemeService) {
    this.themeService.theme$.subscribe(theme => {
      this.themeClass = theme ? 'light-theme' : 'dark-theme';
    });
  }
}