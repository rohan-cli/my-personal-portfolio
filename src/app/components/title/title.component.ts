import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="title-container">
      <ng-content select="[slot=icon]"></ng-content>
      <i *ngIf="icon" [class]="icon"></i>
      <h1 [class]="className">
        {{ title }}
        <span *ngIf="specific" class="text-primary">{{ specific }}</span>
      </h1>
      <p *ngIf="sub" class="text-muted mt-2">{{ sub }}</p>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() title = '';
  @Input() specific = '';
  @Input() className = '';
  @Input() sub = '';
  @Input() icon = '';
}