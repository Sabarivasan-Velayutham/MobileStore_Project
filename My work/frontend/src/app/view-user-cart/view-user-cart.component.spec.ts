import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserCartComponent } from './view-user-cart.component';

describe('ViewUserCartComponent', () => {
  let component: ViewUserCartComponent;
  let fixture: ComponentFixture<ViewUserCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewUserCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
