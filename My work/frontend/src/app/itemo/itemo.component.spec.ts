import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemoComponent } from './itemo.component';

describe('ItemoComponent', () => {
  let component: ItemoComponent;
  let fixture: ComponentFixture<ItemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemoComponent]
    });
    fixture = TestBed.createComponent(ItemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
