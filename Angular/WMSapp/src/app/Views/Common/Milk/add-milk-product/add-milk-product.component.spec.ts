import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilkProductComponent } from './add-milk-product.component';

describe('AddMilkProductComponent', () => {
  let component: AddMilkProductComponent;
  let fixture: ComponentFixture<AddMilkProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMilkProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddMilkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
