import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVegetableComponent } from './edit-vegetable.component';

describe('EditVegetableComponent', () => {
  let component: EditVegetableComponent;
  let fixture: ComponentFixture<EditVegetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVegetableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditVegetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
