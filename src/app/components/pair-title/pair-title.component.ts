import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pair-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pair-title-container">
      <div *ngFor="let item of content" class="mb-3">
        <strong>{{ item.title }}:</strong>
        <span class="ms-2">{{ item.value }}</span>
      </div>
    </div>
  `,
  styleUrls: ['./pair-title.component.scss']
})
export class PairTitleComponent {
  @Input() content: {title: string, value: string}[] = [];
}