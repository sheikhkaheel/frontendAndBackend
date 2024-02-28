import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMilkProductComponent } from './edit-milk-product.component';

describe('EditMilkProductComponent', () => {
  let component: EditMilkProductComponent;
  let fixture: ComponentFixture<EditMilkProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMilkProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditMilkProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
