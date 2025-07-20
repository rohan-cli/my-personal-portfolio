import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rating d-flex">
      <i 
        *ngFor="let star of stars; let i = index" 
        [class]="star ? 'fas fa-star text-warning' : 'far fa-star text-muted'"
        class="me-1">
      </i>
    </div>
  `,
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input() star = '0';
  stars: boolean[] = [];

  ngOnInit() {
    const rating = parseInt(this.star);
    this.stars = Array(5).fill(false).map((_, i) => i < rating);
  }
}