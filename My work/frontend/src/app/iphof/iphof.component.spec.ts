import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphofComponent } from './iphof.component';

describe('IphofComponent', () => {
  let component: IphofComponent;
  let fixture: ComponentFixture<IphofComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IphofComponent]
    });
    fixture = TestBed.createComponent(IphofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
