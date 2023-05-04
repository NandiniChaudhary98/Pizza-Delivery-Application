import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaCartComponent } from './pizza-cart.component';

describe('PizzaCartComponent', () => {
  let component: PizzaCartComponent;
  let fixture: ComponentFixture<PizzaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
