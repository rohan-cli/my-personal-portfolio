import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-text-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="'card border-0 shadow-sm p-4 ' + className">
      <div *ngIf="icon || title" class="d-flex align-items-center mb-3">
        <div *ngIf="icon" class="me-3 text-primary">
          <i [class]="icon"></i>
        </div>
        <div>
          <h5 *ngIf="title" class="mb-0 fw-bold">{{ title }}</h5>
          <p *ngIf="sub" class="text-muted mb-0">{{ sub }}</p>
        </div>
      </div>
      <div *ngIf="text" class="text-content">
        {{ text }}
      </div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./text-box.component.scss']
})
export class TextBoxComponent {
  @Input() className = '';
  @Input() icon = '';
  @Input() title = '';
  @Input() sub = '';
  @Input() text = '';
}