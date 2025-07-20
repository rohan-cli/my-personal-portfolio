import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="skill-item mb-4">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h6 class="mb-0 fw-semibold">{{ skill }}</h6>
        <span class="text-muted">{{ percent }}%</span>
      </div>
      <div class="progress" style="height: 8px;">
        <div 
          class="progress-bar bg-primary" 
          role="progressbar" 
          [style.width.%]="percent"
          [attr.aria-valuenow]="percent"
          aria-valuemin="0" 
          aria-valuemax="100">
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input() skill = '';
  @Input() percent = 0;
}
