import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FieldComponent),
      multi: true
    }
  ],
  template: `
    <div class="form-group mb-3">
      <input
        *ngIf="!textarea"
        [type]="type"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [class]="'form-control form-control-lg' + (hasError ? ' is-invalid' : '')"
        [disabled]="disabled"
      />
      <textarea
        *ngIf="textarea"
        [placeholder]="placeholder"
        [value]="value"
        (input)="onInput($event)"
        (blur)="onTouched()"
        [class]="'form-control form-control-lg' + (hasError ? ' is-invalid' : '')"
        [disabled]="disabled"
        rows="5"
      ></textarea>
      <div *ngIf="hasError && errorMessage" class="invalid-feedback">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() textarea = false;
  @Input() hasError = false;
  @Input() errorMessage = '';
  @Input() disabled = false;

  value = '';
  onChange = (value: string) => {};
  onTouched = () => {};

  onInput(event: Event) {
    const target = event.target as HTMLInputElement | HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}