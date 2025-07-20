import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { StepComponent } from '../../components/step/step.component';
import { TextBoxComponent } from '../../components/text-box/text-box.component';
import { RatingComponent } from '../../components/rating/rating.component';
import { SKILLS, EDUCATION, EXPERIENCE } from '../../constants/constants';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [
    CommonModule, 
    MainLayoutComponent, 
    TitleComponent, 
    ProgressBarComponent, 
    StepComponent, 
    TextBoxComponent, 
    RatingComponent
  ],
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  skills = SKILLS;
  education = EDUCATION;
  experience = EXPERIENCE;
}