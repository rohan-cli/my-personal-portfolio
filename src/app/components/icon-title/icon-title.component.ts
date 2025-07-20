import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="text-center p-4">
      <div class="mb-3">
        <span [innerHTML]="icon"></span>
      </div>
      <h4 [class]="className + ' fw-bold mb-2'">{{ title }}</h4>
      <p *ngIf="!linked" class="text-muted mb-0">{{ sub }}</p>
      <a *ngIf="linked" [href]="sub" target="_blank" class="text-primary text-decoration-none">
        {{ sub }}
      </a>
    </div>
  `,
  styleUrls: ['./icon-title.component.scss']
})
export class IconTitleComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() sub = '';
  @Input() className = '';
  @Input() linked = false;
}