import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonComponent } from '../../components/button/button.component';
import { PairTitleComponent } from '../../components/pair-title/pair-title.component';
import { TextBoxComponent } from '../../components/text-box/text-box.component';
import { ABOUT, DOING, PERSON } from '../../constants/constants';
import { DownloadCvService } from '../../services/downloadCV/download-cv.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    MainLayoutComponent, 
    TitleComponent, 
    ButtonComponent, 
    PairTitleComponent, 
    TextBoxComponent
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(private downloadService: DownloadCvService) {}

  aboutText = ABOUT;
  doing = DOING;
  personLeft = PERSON.filter((_, index) => !(index % 2));
  personRight = PERSON.filter((_, index) => index % 2);

  downloadCV() {
    this.downloadService.downloadCV();
  }
}