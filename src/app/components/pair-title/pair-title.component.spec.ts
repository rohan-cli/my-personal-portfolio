import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairTitleComponent } from './pair-title.component';

describe('PairTitleComponent', () => {
  let component: PairTitleComponent;
  let fixture: ComponentFixture<PairTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
