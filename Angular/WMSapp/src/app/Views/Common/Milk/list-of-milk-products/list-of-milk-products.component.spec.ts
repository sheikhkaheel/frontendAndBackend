import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfMilkProductsComponent } from './list-of-milk-products.component';

describe('ListOfMilkProductsComponent', () => {
  let component: ListOfMilkProductsComponent;
  let fixture: ComponentFixture<ListOfMilkProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfMilkProductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListOfMilkProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
