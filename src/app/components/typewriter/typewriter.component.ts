import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-typewriter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span>{{ displayText }}<span class="cursor">|</span></span>
  `,
  styleUrls: ['./typewriter.component.scss']
})
export class TypewriterComponent implements OnInit, OnDestroy {
  private texts = ['Frontend Developer'];
  private currentTextIndex = 0;
  private currentCharIndex = 0;
  private isDeleting = false;
  private typeSpeed = 100;
  private deleteSpeed = 50;
  private pauseTime = 2000;
  private timeoutId: any;

  displayText = '';

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private type() {
    const currentText = this.texts[this.currentTextIndex];
    
    if (this.isDeleting) {
      this.displayText = currentText.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.displayText = currentText.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    let typeSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

    if (!this.isDeleting && this.currentCharIndex === currentText.length) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }
}