import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copyright',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="text-center py-4 mt-5 border-top">
      <p class="text-muted mb-0">
        &copy; {{ currentYear }} Portfolio. All rights reserved.
      </p>
    </footer>
  `,
  styleUrls: ['./copyright.component.scss']
})
export class CopyrightComponent {
  currentYear = new Date().getFullYear();
}