import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a [href]="link" target="_blank" class="social-link">
      <i [class]="icon + ' fs-4'"></i>
    </a>
  `,
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent {
  @Input() icon = '';
  @Input() link = '';
}