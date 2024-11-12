import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigthlightsComponent } from './higthlights.component';

describe('HigthlightsComponent', () => {
  let component: HigthlightsComponent;
  let fixture: ComponentFixture<HigthlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HigthlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HigthlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
