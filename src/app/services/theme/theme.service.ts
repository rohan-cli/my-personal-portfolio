import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<boolean>(true);
  theme$ = this.themeSubject.asObservable();

  toggleTheme() {
    this.themeSubject.next(!this.themeSubject.value);
  }

  get currentTheme() {
    return this.themeSubject.value;
  }
}