import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <button 
      *ngIf="!routerLink"
      [class]="'btn ' + className"
      [class.active]="active"
      [type]="type"
      [disabled]="disabled"
      (click)="onClick()">
      {{ title }}
    </button>
    <a 
      *ngIf="routerLink"
      [routerLink]="routerLink"
      [class]="'btn ' + className"
      [class.active]="active">
      {{ title }}
    </a>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title = '';
  @Input() className = 'btn-primary';
  @Input() type = 'button';
  @Input() disabled = false;
  @Input() active = false;
  @Input() routerLink = '';
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}