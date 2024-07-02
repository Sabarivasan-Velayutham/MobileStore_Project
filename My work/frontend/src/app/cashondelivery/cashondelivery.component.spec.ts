import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashondeliveryComponent } from './cashondelivery.component';

describe('CashondeliveryComponent', () => {
  let component: CashondeliveryComponent;
  let fixture: ComponentFixture<CashondeliveryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CashondeliveryComponent]
    });
    fixture = TestBed.createComponent(CashondeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
