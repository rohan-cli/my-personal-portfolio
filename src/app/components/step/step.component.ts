import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-step',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="step-item mb-4 p-4 border-start border-primary border-3">
      <div class="ps-3">
        <h5 class="fw-bold mb-2">{{ title }}</h5>
        <p class="text-muted mb-2">{{ sub }}</p>
        <p class="mb-0">{{ desc }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./step.component.scss']
})
export class StepComponent {
  @Input() title = '';
  @Input() sub = '';
  @Input() desc = '';
}