import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from '../../layout/main-layout/main-layout.component';
import { TitleComponent } from '../../components/title/title.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { PORTFOLIOS } from '../../constants/constants';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, MainLayoutComponent, TitleComponent, ButtonComponent, CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolios = PORTFOLIOS;
  filter = 'all';
  keywords: string[] = [];
  filteredPortfolios = this.portfolios;

  constructor() {
    this.keywords = Array.from(
      new Set(
        this.portfolios.map(el => el.keyword)
          .join(' ')
          .split(' ')
      )
    );
  }

  setFilter(filter: string) {
    this.filter = filter;
    this.filteredPortfolios = this.filter === 'all' 
      ? this.portfolios 
      : this.portfolios.filter(el => el.keyword.split(' ').includes(this.filter));
  }
}