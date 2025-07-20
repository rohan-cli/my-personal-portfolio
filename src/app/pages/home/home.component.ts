import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TypewriterComponent } from '../../components/typewriter/typewriter.component';
import { ParticlesComponent } from '../../components/particles/particles.component';
import { SocialMediaComponent } from '../../components/social-media/social-media.component';
import { NAME, SOCIAL_MEDIA, BG_INDEX } from '../../constants/constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, TypewriterComponent, ParticlesComponent, SocialMediaComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = NAME;
  socialMedia = SOCIAL_MEDIA;
  backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${BG_INDEX})`;
  constructor() { }
  ngOnInit() {
  }
}