import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card h-100 shadow-sm border-0 portfolio-card">
      <div class="card-img-wrapper">
        <img [src]="img" [alt]="title" class="card-img-top">
        <div class="card-overlay">
          <div class="d-flex justify-content-center gap-3">
            <a *ngIf="link" [href]="link" target="_blank" class="btn btn-primary btn-sm">
              <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a *ngIf="repo" [href]="repo" target="_blank" class="btn btn-outline-light btn-sm">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ title }}</h5>
      </div>
    </div>
  `,
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title = '';
  @Input() img = '';
  @Input() repo = '';
  @Input() link = '';
}