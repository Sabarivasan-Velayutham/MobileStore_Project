import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecsiphComponent } from './specsiph.component';

describe('SpecsiphComponent', () => {
  let component: SpecsiphComponent;
  let fixture: ComponentFixture<SpecsiphComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecsiphComponent]
    });
    fixture = TestBed.createComponent(SpecsiphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
