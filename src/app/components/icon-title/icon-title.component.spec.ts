import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTitleComponent } from './icon-title.component';

describe('IconTitleComponent', () => {
  let component: IconTitleComponent;
  let fixture: ComponentFixture<IconTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
