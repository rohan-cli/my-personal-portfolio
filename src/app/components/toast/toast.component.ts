import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="show"
      [class]="'toast align-items-center border-0 show position-fixed top-0 end-0 m-3 ' + toastClass"
      role="alert">
      <div class="d-flex">
        <div class="toast-body text-white">
          <i [class]="iconClass + ' me-2'"></i>
          {{ message }}
        </div>
        <button 
          type="button" 
          class="btn-close btn-close-white me-2 m-auto" 
          (click)="onClose()">
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {
  @Input() message = '';
  @Input() type: 'success' | 'error' | 'info' = 'info';
  @Input() show = false;
  @Output() close = new EventEmitter<void>();

  get toastClass(): string {
    switch (this.type) {
      case 'success': return 'bg-success';
      case 'error': return 'bg-danger';
      default: return 'bg-info';
    }
  }

  get iconClass(): string {
    switch (this.type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-exclamation-circle';
      default: return 'fas fa-info-circle';
    }
  }

  onClose() {
    this.close.emit();
  }
}